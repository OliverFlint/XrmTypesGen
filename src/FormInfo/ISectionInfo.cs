namespace XrmTypesGen
{
    public interface ISectionInfo
    {
        string Name { get; set; }
        IFieldInfo[] Fields { get; set; }
    }
}