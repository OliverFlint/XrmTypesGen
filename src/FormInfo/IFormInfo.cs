namespace XrmTypesGen
{
    public interface IFormInfo
    {
        TabInfo[] Tabs { get; set; }
        string FormName { get; set; }
        string FormId { get; set; }
        string FormType { get; set; }
        string EntityName { get; set; }
    }
}