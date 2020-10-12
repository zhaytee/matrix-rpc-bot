using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Runtime.CompilerServices;
using System.Security;
using System.Text;
using Grpc.Core;
using Matrix;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using Newtonsoft.Json;

namespace MatrixRpcBotExample
{
    class Program
    {
        public const string APP_CONFIG_JSON_PATH = "./Config.json";
        public const string AUTH_PARAMS_JSON_PATH = "./AuthParams.json";
        const int CONNECT_TIMEOUT = 5000;

        public static void Main(string[] args)
        {
            AppConfig appConfig;

            try
            {
                appConfig = JsonConvert.DeserializeObject<AppConfig>(File.ReadAllText(APP_CONFIG_JSON_PATH));
                Console.WriteLine($"Config loaded from file: {APP_CONFIG_JSON_PATH}");
            }
            catch (FileNotFoundException)
            {
                appConfig = (AppConfig)AppConfig.DefaultConfig.Clone();
                Console.WriteLine("No config file found, using defaults");
                File.WriteAllText(APP_CONFIG_JSON_PATH, JsonConvert.SerializeObject(appConfig, Formatting.Indented));
                Console.WriteLine($"Saved config to file: {APP_CONFIG_JSON_PATH}");
            }
            catch
            {
                throw;
            }

            Console.WriteLine($"Opening connection to MatrixRpcJs @ {appConfig.MatrixRpcJsEndpoint}");
            Channel c = new Channel(appConfig.MatrixRpcJsEndpoint, ChannelCredentials.Insecure);
            if (!c.ConnectAsync().Wait(CONNECT_TIMEOUT))
                throw new Exception($"MatrixRpcJs connection @ {appConfig.MatrixRpcJsEndpoint} timed out");

            // TODO: Detect MatrixRpcJs disconnection at runtime, currently it just hangs...
            Matrix.Matrix.MatrixClient matrixClient = new Matrix.Matrix.MatrixClient(c);

            AuthParams authParams;

            try
            {
                authParams = JsonConvert.DeserializeObject<AuthParams>(File.ReadAllText(AUTH_PARAMS_JSON_PATH));
                Console.WriteLine($"Existing auth params loaded from file: {AUTH_PARAMS_JSON_PATH}");
            }
            catch (FileNotFoundException)
            {
                Console.WriteLine($"Auth params file not found ('{AUTH_PARAMS_JSON_PATH}')");
                Console.WriteLine($"Authenticating...");
                Console.Write("username: ");
                var username = Console.ReadLine();
                Console.Write("password: ");
                var password = Program.GetPassword();

                var resp = matrixClient.GetAccessToken(new GetAccessTokenRequest()
                {
                    Homeserver = appConfig.Homeserver,
                    Username = username,
                    Password = password,
                });
                authParams = new AuthParams()
                {
                    AccessToken = resp.AccessToken,
                    DeviceId = resp.DeviceId,
                    UserId = resp.UserId,
                };
                File.WriteAllText(AUTH_PARAMS_JSON_PATH, JsonConvert.SerializeObject(authParams));
                Console.WriteLine($"Saved auth params to file: {AUTH_PARAMS_JSON_PATH}");
            }
            catch
            {
                throw;
            }

            var session = matrixClient.StartSession(new StartSessionRequest()
            {
                Homeserver = appConfig.Homeserver,
                AccessToken = authParams.AccessToken,
                UserId = authParams.UserId,
                DeviceId = authParams.DeviceId,
                DisplayName = appConfig.DisplayName,
                InitialPresence = appConfig.InitialPresence,
            });

            var bot = new Bot(matrixClient, session, authParams.UserId);
            var botTask = bot.HandleEvents();

            var con = new BotConsole(bot);
            var conTask = con.Serve();

            Task.WaitAll(botTask, conTask);

            Console.WriteLine("Quitting. Waiting for connection to close...");
            c.ShutdownAsync().Wait();
            Console.WriteLine("Bye!");
        }

        // https://stackoverflow.com/questions/3404421/password-masking-console-application
        public static string GetPassword()
        {
            var pwd = new StringBuilder();
            while (true)
            {
                ConsoleKeyInfo i = Console.ReadKey(true);
                if (i.Key == ConsoleKey.Enter)
                {
                    break;
                }
                else if (i.Key == ConsoleKey.Backspace)
                {
                    if (pwd.Length > 0)
                    {
                        pwd.Remove(pwd.Length - 1, 1);
                        Console.Write("\b \b");
                    }
                }
                else if (i.KeyChar != '\u0000')
                {
                    pwd.Append(i.KeyChar);
                    Console.Write("*");
                }
            }
            return pwd.ToString();
        }
    }

}