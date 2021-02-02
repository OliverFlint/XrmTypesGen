/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace ContactforInteractiveexperience {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "contactquickform"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_composite"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "contactopportunitiesgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "contactcasessgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "subgrid_Entitlement"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "gendercode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "familystatuscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "spousesname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "birthdate"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "anniversary"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "description"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "followemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "creditlimit"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
     getControl(controlName: "contactquickform"): Xrm.Controls.Control;
     getControl(controlName: "firstname"): Xrm.Controls.StringControl;
     getControl(controlName: "lastname"): Xrm.Controls.StringControl;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_composite"): Xrm.Controls.StringControl;
     getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "contactopportunitiesgrid"): Xrm.Controls.Control;
     getControl(controlName: "contactcasessgrid"): Xrm.Controls.Control;
     getControl(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
     getControl(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "spousesname"): Xrm.Controls.StringControl;
     getControl(controlName: "birthdate"): Xrm.Controls.DateControl;
     getControl(controlName: "anniversary"): Xrm.Controls.DateControl;
     getControl(controlName: "description"): Xrm.Controls.StringControl;
     getControl(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
     getControl(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "followemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
     ui: Ui;
     data: Data;
    };
    type Data = Xrm.Data & {
     attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {;
      get(AttributeName: "contactquickform"): Xrm.Attributes.Attribute;
      get(AttributeName: "firstname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "lastname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "parentcustomerid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "fax"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_composite"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "notescontrol"): Xrm.Attributes.Attribute;
      get(AttributeName: "contactopportunitiesgrid"): Xrm.Attributes.Attribute;
      get(AttributeName: "contactcasessgrid"): Xrm.Attributes.Attribute;
      get(AttributeName: "subgrid_Entitlement"): Xrm.Attributes.Attribute;
      get(AttributeName: "gendercode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "familystatuscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "spousesname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "birthdate"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "anniversary"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "description"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "followemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "creditlimit"): Xrm.Attributes.NumberControl;
      get(AttributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
     };
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
     controls: Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {;
      get(controlName: "contactquickform"): Xrm.Controls.Control;
      get(controlName: "firstname"): Xrm.Controls.StringControl;
      get(controlName: "lastname"): Xrm.Controls.StringControl;
      get(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
      get(controlName: "mobilephone"): Xrm.Controls.StringControl;
      get(controlName: "fax"): Xrm.Controls.StringControl;
      get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_composite"): Xrm.Controls.StringControl;
      get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlName: "notescontrol"): Xrm.Controls.Control;
      get(controlName: "contactopportunitiesgrid"): Xrm.Controls.Control;
      get(controlName: "contactcasessgrid"): Xrm.Controls.Control;
      get(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
      get(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "spousesname"): Xrm.Controls.StringControl;
      get(controlName: "birthdate"): Xrm.Controls.DateControl;
      get(controlName: "anniversary"): Xrm.Controls.DateControl;
      get(controlName: "description"): Xrm.Controls.StringControl;
      get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
      get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
      get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
      get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
     };
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "SUMMARY_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "CONTACT_INFORMATION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "contactquickform"): Xrm.Controls.Control;
         get(controlName: "firstname"): Xrm.Controls.StringControl;
         get(controlName: "lastname"): Xrm.Controls.StringControl;
         get(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
         get(controlName: "mobilephone"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_composite"): Xrm.Controls.StringControl;
         get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "Timeline"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "ref_pan_CUSTOMER_DETAILS_TAB"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "contactopportunitiesgrid"): Xrm.Controls.Control;
         get(controlName: "contactcasessgrid"): Xrm.Controls.Control;
         get(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "DETAILS_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "PERSONAL INFORMATION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
         get(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
         get(controlName: "spousesname"): Xrm.Controls.StringControl;
         get(controlName: "birthdate"): Xrm.Controls.DateControl;
         get(controlName: "anniversary"): Xrm.Controls.DateControl;
        }
       }
       get(sectionName: "PERSONAL_NOTES_SECTION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "description"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "marketing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
         get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
         get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "CONTACT_PREFERENCES"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "billing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
         get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
         get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
         get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "shipping information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
        }
       }
      };
     };
     get(tabName: "conflictstab"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "conflictssection"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        }
       }
      };
     };
    };
   }
  }
 }
}
