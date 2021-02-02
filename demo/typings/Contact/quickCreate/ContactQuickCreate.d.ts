/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace ContactQuickCreate {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "businesscard"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "description"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     getControl(controlName: "businesscard"): Xrm.Controls.Control;
     getControl(controlName: "firstname"): Xrm.Controls.StringControl;
     getControl(controlName: "lastname"): Xrm.Controls.StringControl;
     getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
     getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "description"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
     ui: Ui;
     data: Data;
    };
    type Data = Xrm.Data & {
     attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {;
      get(AttributeName: "businesscard"): Xrm.Attributes.Attribute;
      get(AttributeName: "firstname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "lastname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "parentcustomerid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "description"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_city"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     };
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
     controls: Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {;
      get(controlName: "businesscard"): Xrm.Controls.Control;
      get(controlName: "firstname"): Xrm.Controls.StringControl;
      get(controlName: "lastname"): Xrm.Controls.StringControl;
      get(controlName: "jobtitle"): Xrm.Controls.StringControl;
      get(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
      get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlName: "mobilephone"): Xrm.Controls.StringControl;
      get(controlName: "telephone1"): Xrm.Controls.StringControl;
      get(controlName: "description"): Xrm.Controls.StringControl;
      get(controlName: "address1_line1"): Xrm.Controls.StringControl;
      get(controlName: "address1_line2"): Xrm.Controls.StringControl;
      get(controlName: "address1_city"): Xrm.Controls.StringControl;
      get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
     };
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "tab_1"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "tab_1_column_1_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "businesscard"): Xrm.Controls.Control;
         get(controlName: "firstname"): Xrm.Controls.StringControl;
         get(controlName: "lastname"): Xrm.Controls.StringControl;
         get(controlName: "jobtitle"): Xrm.Controls.StringControl;
         get(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
        }
       }
       get(sectionName: "tab_1_column_2_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
         get(controlName: "mobilephone"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "description"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "tab_1_column_3_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_line1"): Xrm.Controls.StringControl;
         get(controlName: "address1_line2"): Xrm.Controls.StringControl;
         get(controlName: "address1_city"): Xrm.Controls.StringControl;
         get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
        }
       }
      };
     };
    };
   }
  }
 }
}
