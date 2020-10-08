using Microsoft.VisualBasic;
using System.Xml.Linq;
using System.Collections.Concurrent;
using System.Threading;
using System.Text;
using System.IO;
using System.Collections.Generic;
using System.Net.Sockets;
using System.Net;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System;

namespace MatrixRpcJsExample
{
    class BotConsole
    {
        public const int LISTEN_PORT = 38492;

        readonly Bot bot;
        bool running;
        TcpListener listener;
        ConcurrentDictionary<string, TcpClient> connectedClients = new ConcurrentDictionary<string, TcpClient>();

        public BotConsole(Bot bot)
        {
            this.bot = bot;
        }

        public async Task Serve()
        {
            if (running)
                throw new Exception("Already serving");

            running = true;

            listener = new TcpListener(IPAddress.Any, LISTEN_PORT);
            listener.Start();

            Console.WriteLine($"Accepting console connections on :{LISTEN_PORT}");

            while (running)
            {
                TcpClient client;
                try { client = await listener.AcceptTcpClientAsync(); }
                catch { running = false; continue; }

                if (client != null)
                    HandleClient(client);
            }

            try { listener.Stop(); }
            catch (Exception e) { Console.WriteLine($"While stopping TcpListener: {e.ToString()}"); }

            Console.WriteLine("No longer accepting console connections");
            listener = null;

            foreach (KeyValuePair<string, TcpClient> p in connectedClients)
            {
                if (p.Value.Connected)
                    p.Value.Close();
            }

            connectedClients.Clear();
        }

        async void HandleClient(TcpClient client)
        {
            var clientAddress = client.Client.RemoteEndPoint.ToString();
            Console.WriteLine($"Serving new console client: {clientAddress}");

            connectedClients[clientAddress] = client;

            // Apparently client.Close() disposes of these...?
            var reader = new StreamReader(client.GetStream(), Encoding.UTF8);
            var writer = new StreamWriter(client.GetStream(), Encoding.UTF8);
            writer.AutoFlush = true;

            bool servingClient = true;

            while (servingClient)
            {
                string line;
                try
                {
                    writer.WriteLine();
                    writer.Write("> ");
                    line = await reader.ReadLineAsync();
                }
                catch
                {
                    Console.WriteLine($"Lost console client: {clientAddress}");
                    servingClient = false;
                    continue;
                }

                if (string.IsNullOrEmpty(line))
                    continue;

                var toks = Regex.Split(line, @"\s+").Where(s => s != string.Empty).ToArray();
                if (toks.Length == 0 || string.IsNullOrEmpty(toks[0]))
                    continue;

                switch (toks[0])
                {
                    case "quit":
                    case "exit":
                    case "disconnect":
                    case "bye":
                        {
                            client.Close();
                            servingClient = false;
                            break;
                        }

                    case "shutdown":
                    case "kill":
                        {
                            bot.ForceStop();
                            client.Close();
                            servingClient = false;
                            listener.Stop();
                            break;
                        }

                    case "say":
                        {
                            if (toks.Length < 3)
                                break;

                            string to = toks[1];
                            string something = String.Join(" ", toks.Skip(2).Take(toks.Length - 2).ToArray());
                            try
                            {
                                bot.Say(something, to);
                            }
                            catch (Exception ex)
                            {
                                writer.WriteLine(ex.Message);
                            }
                            break;
                        }

                    case "join":
                        {
                            if (toks.Length < 2)
                                break;

                            string roomId = toks[1];
                            try
                            {
                                bot.Join(roomId);
                            }
                            catch (Exception ex)
                            {
                                writer.WriteLine(ex.Message);
                            }
                            break;
                        }

                    case "leave":
                        {
                            if (toks.Length < 2)
                                break;

                            string roomId = toks[1];
                            try
                            {
                                bot.Leave(roomId);
                            }
                            catch (Exception ex)
                            {
                                writer.WriteLine(ex.Message);
                            }
                            break;
                        }

                    default:
                        {
                            writer.WriteLine($"Unknown command: '{toks[0]}'");
                            break;
                        }
                }
            }

            if (connectedClients.ContainsKey(clientAddress))
                connectedClients.Remove(clientAddress, out _);

            Console.WriteLine($"No longer serving console client: {clientAddress}");
        }
    }
}