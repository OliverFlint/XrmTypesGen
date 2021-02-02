namespace XrmTypesGen
{
    public interface ITabInfo
    {
        string Name { get; set; }
        ISectionInfo[] Sections { get; set; }
    }
}