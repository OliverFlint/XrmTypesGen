using System;
using System.CommandLine;
using System.CommandLine.Invocation;

namespace XrmTypesGen
{
    class Program
    {
        static void Main(string[] args)
        {
            var rootCommand = new RootCommand("Xrm Typescript Type Definitions Generator");

            #region "LIVE"

            var liveCommand = new Command("live", "Generate direct from D365 instance (WIP)") {
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
                ) {
                    IsRequired = true
                },
                new Option<string>(
                    aliases: new string[] {"--output", "-o"},
                    description: "The path to a folder to output the generated types."
                ) {
                    IsRequired = true
                }
            };

            liveCommand.Handler = CommandHandler.Create<string, string, string>((connection, entities, output) =>
            {
                LiveHandler.Handle(connection, entities, output);
            });

            rootCommand.AddCommand(liveCommand);

            #endregion

            #region "ZIP"

            var zipCommand = new Command("zip", "Generate from a solution zip") {
                new Option<string>(
                    aliases: new string[] {"--zipfile", "-z"},
                    description: "The path to a solution zip file."
                ) {
                    IsRequired = true
                },
                new Option<string>(
                    aliases: new string[] {"--output", "-o"},
                    description: "The path to a folder to output the generated types."
                ) {
                    IsRequired = true
                }
            };

            zipCommand.Handler = CommandHandler.Create<string, string>((zipfile, output) =>
            {
                ZipHandler.Handle(zipfile, output);
            });

            rootCommand.AddCommand(zipCommand);

            #endregion

            #region "UNPACKED"

            var unpackedCommand = new Command("unpacked", "Generate from an unpacked solution") {
                new Option<string>(
                    aliases: new string[] {"--folder", "-f"},
                    description: "The path to an unpacked solution."
                ) {
                    IsRequired = true
                },
                new Option<string>(
                    aliases: new string[] {"--output", "-o"},
                    description: "The path to a folder to output the generated types."
                ) {
                    IsRequired = true
                }
            };

            unpackedCommand.Handler = CommandHandler.Create<string, string>((folder, output) =>
            {
                UnpackedHandler.Handle(folder, output);
            });

            rootCommand.AddCommand(unpackedCommand);

            // rootCommand.Handler = CommandHandler.Create<string, string>((connection, entities) =>
            // {

            // });
            #endregion

            var argResult = rootCommand.InvokeAsync(args).Result;
        }
    }
}
