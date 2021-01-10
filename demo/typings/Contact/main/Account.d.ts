/**
This file was generated using 'xrm-types-gen'. https://github.com/OliverFlint/xrm-types-gen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace Account {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "websiteurl"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "parentaccountid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "tickersymbol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_composite"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "mapcontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "primarycontactid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "contactquickform"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "Contacts"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "accountopportunitiesgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "accountcasessgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "subgrid_Entitlement"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "industrycode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "ownershipcode"): Xrm.Attributes.Attribute;
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
     getAttribute(attributeName: "ChildAccounts"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "DocumentsSubGrid"): Xrm.Attributes.Attribute;
     getControl(controlName: "name"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "websiteurl"): Xrm.Controls.Control;
     getControl(controlName: "parentaccountid"): Xrm.Controls.Control;
     getControl(controlName: "tickersymbol"): Xrm.Controls.Control;
     getControl(controlName: "address1_composite"): Xrm.Controls.Control;
     getControl(controlName: "mapcontrol"): Xrm.Controls.Control;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "primarycontactid"): Xrm.Controls.Control;
     getControl(controlName: "contactquickform"): Xrm.Controls.Control;
     getControl(controlName: "Contacts"): Xrm.Controls.Control;
     getControl(controlName: "accountopportunitiesgrid"): Xrm.Controls.Control;
     getControl(controlName: "accountcasessgrid"): Xrm.Controls.Control;
     getControl(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
     getControl(controlName: "industrycode"): Xrm.Controls.Control;
     getControl(controlName: "sic"): Xrm.Controls.StringControl;
     getControl(controlName: "ownershipcode"): Xrm.Controls.Control;
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
     getControl(controlName: "ChildAccounts"): Xrm.Controls.Control;
     getControl(controlName: "DocumentsSubGrid"): Xrm.Controls.Control;
     ui: Ui;
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "SUMMARY_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "ACCOUNT_INFORMATION"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "name"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "websiteurl"): Xrm.Controls.Control;
         get(controlName: "parentaccountid"): Xrm.Controls.Control;
         get(controlName: "tickersymbol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "ADDRESS"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_composite"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "MapSection"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "mapcontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "SOCIAL_PANE_TAB"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "Summary_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
        }
       }
       get(sectionName: "SUMMARY_TAB_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "primarycontactid"): Xrm.Controls.Control;
         get(controlName: "contactquickform"): Xrm.Controls.Control;
         get(controlName: "Contacts"): Xrm.Controls.Control;
         get(controlName: "accountopportunitiesgrid"): Xrm.Controls.Control;
         get(controlName: "accountcasessgrid"): Xrm.Controls.Control;
         get(controlName: "subgrid_Entitlement"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "DETAILS_TAB"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "COMPANY_PROFILE"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "industrycode"): Xrm.Controls.Control;
         get(controlName: "sic"): Xrm.Controls.StringControl;
         get(controlName: "ownershipcode"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "DETAILS_TAB_section_6"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "description"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "MARKETING"): Xrm.Controls.Section & {
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
       get(sectionName: "BILLING"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "transactioncurrencyid"): Xrm.Controls.Control;
         get(controlName: "creditlimit"): Xrm.Controls.Control;
         get(controlName: "creditonhold"): Xrm.Controls.Control;
         get(controlName: "paymenttermscode"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "SHIPPING"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_shippingmethodcode"): Xrm.Controls.Control;
         get(controlName: "address1_freighttermscode"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "ChildAccounts"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "ChildAccounts"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "AssetsAndLocationsTab"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "AssetsAndLocationsSection"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
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
