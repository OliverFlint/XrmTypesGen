/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace AccountQuickCreate {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "primarycontactid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "revenue"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "numberofemployees"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "description"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     getControl(controlName: "name"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "revenue"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "numberofemployees"): Xrm.Controls.NumberAttribute;
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
      get(AttributeName: "name"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "primarycontactid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "revenue"): Xrm.Attributes.NumberControl;
      get(AttributeName: "numberofemployees"): Xrm.Attributes.NumberControl;
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
      get(controlName: "name"): Xrm.Controls.StringControl;
      get(controlName: "telephone1"): Xrm.Controls.StringControl;
      get(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
      get(controlName: "revenue"): Xrm.Controls.NumberAttribute;
      get(controlName: "numberofemployees"): Xrm.Controls.NumberAttribute;
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
         get(controlName: "name"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
        }
       }
       get(sectionName: "tab_1_column_2_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "revenue"): Xrm.Controls.NumberAttribute;
         get(controlName: "numberofemployees"): Xrm.Controls.NumberAttribute;
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
