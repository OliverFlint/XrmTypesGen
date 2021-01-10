/**
This file was generated using 'xrm-types-gen'. https://github.com/OliverFlint/xrm-types-gen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace ContactforMultisessionexperience {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "contactquickform"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "address1_composite"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "RelatedCases"): Xrm.Attributes.Attribute;
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
     getControl(controlName: "contactquickform"): Xrm.Controls.Control;
     getControl(controlName: "firstname"): Xrm.Controls.StringControl;
     getControl(controlName: "lastname"): Xrm.Controls.StringControl;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.Control;
     getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.Control;
     getControl(controlName: "address1_composite"): Xrm.Controls.Control;
     getControl(controlName: "emailaddress1"): Xrm.Controls.Control;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "RelatedCases"): Xrm.Controls.Control;
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
         get(controlName: "contactquickform"): Xrm.Controls.Control;
         get(controlName: "firstname"): Xrm.Controls.StringControl;
         get(controlName: "lastname"): Xrm.Controls.StringControl;
         get(controlName: "parentcustomerid"): Xrm.Controls.Control;
         get(controlName: "mobilephone"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.Control;
         get(controlName: "address1_composite"): Xrm.Controls.Control;
         get(controlName: "emailaddress1"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "Timeline"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "SUMMARY_TAB_section_4"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "RelatedCases"): Xrm.Controls.Control;
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
    };
   }
  }
 }
}
