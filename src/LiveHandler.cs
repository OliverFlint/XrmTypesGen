using System;
using Microsoft.PowerPlatform.Cds.Client;

namespace XrmTypesGen
{
    public class LiveHandler
    {
        public static void Handle(string connection, string entities, string output)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"Live generation is not yet supported!");
            Console.ResetColor();
            //throw new NotImplementedException("Live generation is not yet supported!");
            //     var conn = new CdsServiceClient(connection);
            //     if (conn != null && string.IsNullOrEmpty(conn.LastCdsError))
            //     {
            //         Console.ForegroundColor = ConsoleColor.Red;
            //         Console.WriteLine($"Failed to establish a connection. {conn.LastCdsError}");
            //         Console.ResetColor();
            //     }
            //     else if (conn != null && conn.LastCdsException != null)
            //     {
            //         Console.ForegroundColor = ConsoleColor.Red;
            //         Console.WriteLine($"Failed to establish a connection. {conn.LastCdsException.Message}");
            //         Console.ResetColor();
            //     }
            //     else if (conn.IsReady)
            //     {
            //         Console.WriteLine($"Connected to {conn.ConnectedOrgFriendlyName}");
            //     }
            //     else
            //     {
            //         Console.ForegroundColor = ConsoleColor.Red;
            //         Console.WriteLine($"Failed to establish a connection.");
            //         Console.ResetColor();
            //     }
        }
    }
}