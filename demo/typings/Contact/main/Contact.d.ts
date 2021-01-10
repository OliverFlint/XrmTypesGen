/**
This file was generated using 'xrm-types-gen'. https://github.com/OliverFlint/xrm-types-gen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace Contact {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "fullname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_composite"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "mapcontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "contactquickform"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "contactopportunitiesgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "contactcasessgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "subgrid_Entitlement"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "gendercode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "familystatuscode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "spousesname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "birthdate"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "anniversary"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "description"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "originatingleadid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "lastusedincampaign"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "donotsendmm"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "donotemail"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "followemail"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "donotbulkemail"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "donotphone"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "donotfax"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "donotpostalmail"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "transactioncurrencyid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "creditlimit"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "creditonhold"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "paymenttermscode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_freighttermscode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "DocumentsSubGrid"): Xrm.Attributes.Attribute;
     getControl(controlName: "fullname"): Xrm.Controls.StringControl;
     getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.Control;
     getControl(controlName: "emailaddress1"): Xrm.Controls.Control;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.Control;
     getControl(controlName: "address1_composite"): Xrm.Controls.Control;
     getControl(controlName: "mapcontrol"): Xrm.Controls.Control;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.Control;
     getControl(controlName: "contactquickform"): Xrm.Controls.Control;
     getControl(controlName: "contactopportunitiesgrid"): Xrm.Controls.Control;
     getControl(controlName: "contactcasessgrid"): Xrm.Controls.Control;
     getControl(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
     getControl(controlName: "gendercode"): Xrm.Controls.Control;
     getControl(controlName: "familystatuscode"): Xrm.Controls.Control;
     getControl(controlName: "spousesname"): Xrm.Controls.StringControl;
     getControl(controlName: "birthdate"): Xrm.Controls.Control;
     getControl(controlName: "anniversary"): Xrm.Controls.Control;
     getControl(controlName: "description"): Xrm.Controls.Control;
     getControl(controlName: "originatingleadid"): Xrm.Controls.Control;
     getControl(controlName: "lastusedincampaign"): Xrm.Controls.Control;
     getControl(controlName: "donotsendmm"): Xrm.Controls.Control;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.Control;
     getControl(controlName: "donotemail"): Xrm.Controls.Control;
     getControl(controlName: "followemail"): Xrm.Controls.Control;
     getControl(controlName: "donotbulkemail"): Xrm.Controls.Control;
     getControl(controlName: "donotphone"): Xrm.Controls.Control;
     getControl(controlName: "donotfax"): Xrm.Controls.Control;
     getControl(controlName: "donotpostalmail"): Xrm.Controls.Control;
     getControl(controlName: "transactioncurrencyid"): Xrm.Controls.Control;
     getControl(controlName: "creditlimit"): Xrm.Controls.Control;
     getControl(controlName: "creditonhold"): Xrm.Controls.Control;
     getControl(controlName: "paymenttermscode"): Xrm.Controls.Control;
     getControl(controlName: "address1_shippingmethodcode"): Xrm.Controls.Control;
     getControl(controlName: "address1_freighttermscode"): Xrm.Controls.Control;
     getControl(controlName: "DocumentsSubGrid"): Xrm.Controls.Control;
     ui: Ui;
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "SUMMARY_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "CONTACT_INFORMATION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "fullname"): Xrm.Controls.StringControl;
         get(controlName: "jobtitle"): Xrm.Controls.StringControl;
         get(controlName: "parentcustomerid"): Xrm.Controls.Control;
         get(controlName: "emailaddress1"): Xrm.Controls.Control;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "mobilephone"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.Control;
         get(controlName: "address1_composite"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "MapSection"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "mapcontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "BusinessCard"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
       get(sectionName: "SOCIAL_PANE_TAB"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "TalkingPoints_section"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
       get(sectionName: "Summary_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
       get(sectionName: "CUSTOMER_DETAILS_TAB"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "parentcustomerid"): Xrm.Controls.Control;
         get(controlName: "contactquickform"): Xrm.Controls.Control;
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
         get(controlName: "gendercode"): Xrm.Controls.Control;
         get(controlName: "familystatuscode"): Xrm.Controls.Control;
         get(controlName: "spousesname"): Xrm.Controls.StringControl;
         get(controlName: "birthdate"): Xrm.Controls.Control;
         get(controlName: "anniversary"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "PERSONAL_NOTES_SECTION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "description"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "marketing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "originatingleadid"): Xrm.Controls.Control;
         get(controlName: "lastusedincampaign"): Xrm.Controls.Control;
         get(controlName: "donotsendmm"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "CONTACT_PREFERENCES"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.Control;
         get(controlName: "donotemail"): Xrm.Controls.Control;
         get(controlName: "followemail"): Xrm.Controls.Control;
         get(controlName: "donotbulkemail"): Xrm.Controls.Control;
         get(controlName: "donotphone"): Xrm.Controls.Control;
         get(controlName: "donotfax"): Xrm.Controls.Control;
         get(controlName: "donotpostalmail"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "billing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "transactioncurrencyid"): Xrm.Controls.Control;
         get(controlName: "creditlimit"): Xrm.Controls.Control;
         get(controlName: "creditonhold"): Xrm.Controls.Control;
         get(controlName: "paymenttermscode"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "shipping information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_shippingmethodcode"): Xrm.Controls.Control;
         get(controlName: "address1_freighttermscode"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "documents_sharepoint"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "documents_sharepoint_section"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "DocumentsSubGrid"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "linkedin_v2_tab"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "linkedin_v2_tab_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
       get(sectionName: "linkedin_v2_tab_section_2"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
       get(sectionName: "linkedin_v2_tab_section_3"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
      };
     };
    };
   }
  }
 }
}
