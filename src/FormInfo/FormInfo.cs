namespace XrmTypesGen
{
    public class FormInfo : IFormInfo
    {
        //public FieldInfo[] Fields { get; set; }
        public TabInfo[] Tabs { get; set; }
        public string FormName { get; set; }
        public string FormId { get; set; }
        public string FormType { get; set; }
        public string EntityName { get; set; }
    }
}