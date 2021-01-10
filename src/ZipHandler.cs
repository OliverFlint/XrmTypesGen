using System;
using System.IO;
using System.IO.Compression;
using System.Xml;
using System.Linq;
using System.Collections.Generic;

namespace XrmTypesGen
{
    public class ZipHandler
    {
        public static void Handle(string zipfile, string output)
        {
            using (var file = File.OpenRead(zipfile))
            {
                using (var zip = new ZipArchive(file, ZipArchiveMode.Read))
                {
                    foreach (var entry in zip.Entries)
                    {
                        if (entry.Name.ToLower() == "customizations.xml")
                        {
                            using (var stream = entry.Open())
                            {
                                var xml = new XmlDocument();
                                xml.Load(stream);
                                Console.WriteLine("customizations.xml loaded.");

                                var formInfoArry = parseXml(xml);

                                Generator.Generate(formInfoArry, output);
                            }
                        }
                    }
                }
            }
        }

        private static FormInfo[] parseXml(XmlDocument xml)
        {
            var entityNodes = xml.SelectNodes("//entity");
            Console.WriteLine($"Found {entityNodes.Count} entities.");

            List<FormInfo> formInfoArray = new List<FormInfo>();

            foreach (XmlNode entityNode in entityNodes)
            {
                var formNodes = entityNode.SelectNodes("//forms[@type='main' or @type='quickCreate']/systemform");
                Console.WriteLine($"Found {formNodes.Count} forms on the {entityNode.Attributes["Name"].Value} entity.");

                foreach (XmlNode formNode in formNodes)
                {
                    var formInfo = parseFormXml(formNode);
                    formInfo.EntityName = entityNode.Attributes["Name"].Value;
                    formInfoArray.Add(formInfo);
                }
            }
            return formInfoArray.ToArray();
        }

        private static FormInfo parseFormXml(XmlNode formNode)
        {
            var formName = formNode.SelectSingleNode("descendant::LocalizedName").Attributes["description"].Value;
            Console.WriteLine($"Parsing the {formName} form.");
            var tabNodes = formNode.SelectNodes("descendant::tab");
            List<TabInfo> tabDetails = new List<TabInfo>();
            foreach (XmlNode tabNode in tabNodes)
            {
                if (tabNode.Attributes.Cast<XmlAttribute>().Where(a => a.Name == "name").Count() > 0)
                {
                    var tabinfo = new TabInfo()
                    {
                        Name = tabNode.Attributes["name"].Value
                    };
                    var sectionNodes = tabNode.SelectNodes("descendant::section");
                    List<SectionInfo> sectionDetails = new List<SectionInfo>();
                    foreach (XmlNode sectionNode in sectionNodes)
                    {
                        var sectioninfo = new SectionInfo()
                        {
                            Name = sectionNode.Attributes["name"].Value
                        };
                        var controlNodes = sectionNode.SelectNodes("descendant::control");
                        var controlDetails = controlNodes.Cast<XmlNode>()
                            .Select(n => new FieldInfo(n.Attributes["id"].Value, n.Attributes["classid"].Value)).Distinct().ToArray();
                        sectioninfo.Fields = controlDetails;
                        sectionDetails.Add(sectioninfo);
                    }
                    tabinfo.Sections = sectionDetails.ToArray();
                    tabDetails.Add(tabinfo);
                }
            }

            var formId = formNode.SelectSingleNode("formid").InnerText;
            var formType = formNode.SelectSingleNode($"//forms[systemform[formid='{formId}']]").Attributes["type"].Value;
            return new FormInfo
            {
                FormName = formName,
                FormId = formId,
                FormType = formType,
                Tabs = tabDetails.ToArray()
            };
        }
    }
}