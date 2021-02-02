namespace XrmTypesGen
{
    public class SectionInfo : ISectionInfo
    {
        public string Name { get; set; }
        public IFieldInfo[] Fields { get; set; }
    }
}