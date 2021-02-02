using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace XrmTypesGen
{
    public class Generator
    {
        const string HEADER = @"/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/";
        public static void Generate(FormInfo[] formInfoArray, string outputPath)
        {
            if (Directory.Exists(outputPath))
            {
                Directory.Delete(outputPath, true);
            }

            Directory.CreateDirectory(outputPath);

            foreach (var formInfo in formInfoArray)
            {
                var path = $"{outputPath}/{formInfo.EntityName}/{formInfo.FormType}";
                Directory.CreateDirectory(path);
                var formname = formInfo.FormName.Replace(" ", "");
                var filepath = $"{path}/{formname}.d.ts";
                List<string> lines = new List<string>();
                lines.Add(HEADER);
                lines.Add("declare namespace Xrm {");
                lines.Add(" namespace Ext {");
                lines.Add("  namespace Forms {");
                lines.Add($"   namespace {formname} {{");

                #region FormContext
                lines.Add($"    type FormContext = Xrm.FormContext & {{");

                var allFields = formInfo.Tabs.SelectMany(t => t.Sections).SelectMany(s => s.Fields).Distinct();

                #region getAttribute
                foreach (var field in allFields)
                {
                    var xrmtype = field.GetXrmType(field.FieldType, ObjectType.Attribute);
                    if (!string.IsNullOrEmpty(xrmtype))
                    {
                        lines.Add($"     getAttribute(attributeName: \"{field.Name}\"): {xrmtype};");
                    }
                }
                #endregion
                #region getControl
                foreach (var field in allFields)
                {
                    var xrmtype = field.GetXrmType(field.FieldType, ObjectType.Control);
                    if (!string.IsNullOrEmpty(xrmtype))
                    {
                        lines.Add($"     getControl(controlName: \"{field.Name}\"): {xrmtype};");
                    }
                }
                #endregion

                lines.Add("     ui: Ui;");
                lines.Add("     data: Data;");
                lines.Add("    };");
                #endregion

                #region Data
                lines.Add("    type Data = Xrm.Data & {");
                #region Attributes
                lines.Add("     attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {;");
                foreach (var field in allFields)
                {
                    var xrmtype = field.GetXrmType(field.FieldType, ObjectType.Attribute);
                    if (!string.IsNullOrEmpty(xrmtype))
                    {
                        lines.Add($"      get(AttributeName: \"{field.Name}\"): {xrmtype};");
                    }
                }
                lines.Add("     };");
                #endregion
                lines.Add("    };");
                #endregion

                #region UI
                lines.Add("    type Ui = Xrm.Ui & {");
                lines.Add("     tabs: Tabs;");
                #region Controls
                lines.Add("     controls: Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {;");
                foreach (var field in allFields)
                {
                    var xrmtype = field.GetXrmType(field.FieldType, ObjectType.Control);
                    if (!string.IsNullOrEmpty(xrmtype))
                    {
                        lines.Add($"      get(controlName: \"{field.Name}\"): {xrmtype};");
                    }
                }
                lines.Add("     };");
                #endregion
                lines.Add("    };");
                #endregion

                #region Tabs
                lines.Add("    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {");
                foreach (var tab in formInfo.Tabs)
                {
                    lines.Add($"     get(tabName: \"{tab.Name}\"): Xrm.Controls.Tab & {{");
                    lines.Add("      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {");
                    foreach (var section in tab.Sections)
                    {
                        lines.Add($"       get(sectionName: \"{section.Name}\"): Xrm.Controls.Section & {{");
                        lines.Add("        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {");
                        foreach (var field in section.Fields)
                        {
                            var xrmtype = field.GetXrmType(field.FieldType, ObjectType.Control);
                            if (!string.IsNullOrEmpty(xrmtype))
                            {
                                lines.Add($"         get(controlName: \"{field.Name}\"): {xrmtype};");
                            }
                        }
                        lines.Add("        }");
                        lines.Add("       }");
                    }
                    lines.Add("      };");
                    lines.Add("     };");
                }

                lines.Add("    };");
                #endregion

                lines.Add("   }");
                lines.Add("  }");
                lines.Add(" }");
                lines.Add("}");
                File.AppendAllLines(filepath, lines);
            }
        }
    }
}