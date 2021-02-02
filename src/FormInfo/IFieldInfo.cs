namespace XrmTypesGen
{
    public interface IFieldInfo
    {
        string Name { get; set; }
        string ClassId { get; set; }
        string FieldType { get; }
        string GetXrmType(string fieldtype, ObjectType objecttype);
    }
}