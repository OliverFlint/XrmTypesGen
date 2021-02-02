namespace XrmTypesGen
{
    public class TabInfo : ITabInfo
    {
        public string Name { get; set; }
        public ISectionInfo[] Sections { get; set; }
    }
}