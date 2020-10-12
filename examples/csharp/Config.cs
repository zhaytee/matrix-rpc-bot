using System;
using Matrix;

namespace MatrixRpcBotExample
{
    interface IReadOnlyAppConfig : ICloneable
    {
        string Homeserver { get; }
        string DisplayName { get; }
        Matrix.Presence InitialPresence { get; }
        string MatrixRpcJsEndpoint { get; }
    }

    class AppConfig : IReadOnlyAppConfig
    {
        public string Homeserver { get; set; }
        public string DisplayName { get; set; }
        public Matrix.Presence InitialPresence { get; set; }
        public string MatrixRpcJsEndpoint { get; set; }

        public static IReadOnlyAppConfig DefaultConfig { get; } = new AppConfig()
        {
            Homeserver = "https://matrix.org",
            DisplayName = "Some Bot",
            InitialPresence = Matrix.Presence.Online,
            MatrixRpcJsEndpoint = "127.0.0.1:58558",
        };

        public object Clone()
        {
            return new AppConfig()
            {
                Homeserver = this.Homeserver,
                DisplayName = this.DisplayName,
                InitialPresence = this.InitialPresence,
                MatrixRpcJsEndpoint = this.MatrixRpcJsEndpoint,
            };
        }
    }

    class AuthParams
    {
        public string UserId { get; set; }
        public string DeviceId { get; set; }
        public string AccessToken { get; set; }
    }
}