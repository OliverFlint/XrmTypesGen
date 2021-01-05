using System;
using System.CommandLine;
using System.CommandLine.Invocation;
using Microsoft.PowerPlatform.Cds.Client;

namespace xrm_types_gen
{
    class Program
    {
        static void Main(string[] args)
        {
            var rootCommand = new RootCommand
            {
                new Option<string>(
                        aliases: new string[] {"--connection", "-c"},
                        description: "An XRM Tooling connection string. e.g. "
                        + "'AuthType=OAuth;"
                        + "Username=jsmith@contoso.onmicrosoft.com;"
                        + "Password=passcode;"
                        + "Url=https://contosotest.crm.dynamics.com;"
                        + "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;"
                        + "RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;"
                        + "TokenCacheStorePath=.\\MyTokenCache;"
                        + "LoginPrompt=Never'"
                    ) {
                        IsRequired = true
                    },
                new Option<string>(
                    aliases: new string[] {"--entities", "-e"},
                    description: "A list of entities to generate types for. Default all entities."
                )
            };

            rootCommand.Description = "Xrm Typescript Type Definitions Generator";

            rootCommand.Handler = CommandHandler.Create<string, string>((connection, entities) =>
            {
                var conn = new CdsServiceClient(connection);
                if (conn != null && string.IsNullOrEmpty(conn.LastCdsError))
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Failed to establish a connection. {conn.LastCdsError}");
                    Console.ResetColor();
                }
                else if (conn != null && conn.LastCdsException != null)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Failed to establish a connection. {conn.LastCdsException.Message}");
                    Console.ResetColor();
                }
                else if (conn.IsReady)
                {
                    Console.WriteLine($"Connected to {conn.ConnectedOrgFriendlyName}");
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Failed to establish a connection.");
                    Console.ResetColor();
                }
            });

            var argResult = rootCommand.InvokeAsync(args).Result;
        }
    }
}
