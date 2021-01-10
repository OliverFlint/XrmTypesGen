/**
This file was generated using 'xrm-types-gen'. https://github.com/OliverFlint/xrm-types-gen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace ContactQuickCreate {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "description"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     getControl(controlName: "firstname"): Xrm.Controls.StringControl;
     getControl(controlName: "lastname"): Xrm.Controls.StringControl;
     getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.Control;
     getControl(controlName: "emailaddress1"): Xrm.Controls.Control;
     getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "description"): Xrm.Controls.Control;
     getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
     ui: Ui;
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "tab_1"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "tab_1_column_1_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "firstname"): Xrm.Controls.StringControl;
         get(controlName: "lastname"): Xrm.Controls.StringControl;
         get(controlName: "jobtitle"): Xrm.Controls.StringControl;
         get(controlName: "parentcustomerid"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "tab_1_column_2_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "emailaddress1"): Xrm.Controls.Control;
         get(controlName: "mobilephone"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "description"): Xrm.Controls.Control;
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
