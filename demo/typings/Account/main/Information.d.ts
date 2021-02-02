/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace Information {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "WebResource_RecordWall"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "primarycontactid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "telephone2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "accountnumber"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentaccountid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_addresstypecode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_country"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line3"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "description"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "industrycode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "revenue"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "ownershipcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "numberofemployees"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "tickersymbol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "sic"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "territoryid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "accountcategorycode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "customertypecode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "creditlimit"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "defaultpricelevelid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "accountContactsGrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "accountactivitiesgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "ownerid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "followemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredappointmentdaycode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredappointmenttimecode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredsystemuserid"): Xrm.Attributes.LookupControl;
     getControl(controlName: "WebResource_RecordWall"): Xrm.Controls.Control;
     getControl(controlName: "name"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "telephone2"): Xrm.Controls.StringControl;
     getControl(controlName: "accountnumber"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "parentaccountid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "websiteurl"): Xrm.Controls.StringControl;
     getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_name"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_stateorprovince"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_country"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line3"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "description"): Xrm.Controls.StringControl;
     getControl(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "revenue"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "numberofemployees"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "tickersymbol"): Xrm.Controls.Control;
     getControl(controlName: "sic"): Xrm.Controls.StringControl;
     getControl(controlName: "territoryid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "accountcategorycode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "customertypecode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "defaultpricelevelid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "accountContactsGrid"): Xrm.Controls.Control;
     getControl(controlName: "accountactivitiesgrid"): Xrm.Controls.Control;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "ownerid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "followemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
     getControl(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredsystemuserid"): Xrm.Controls.LookupAttribute;
     ui: Ui;
     data: Data;
    };
    type Data = Xrm.Data & {
     attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {;
      get(AttributeName: "WebResource_RecordWall"): Xrm.Attributes.Attribute;
      get(AttributeName: "name"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "primarycontactid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "telephone2"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "accountnumber"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "fax"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "parentaccountid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "websiteurl"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_addresstypecode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_city"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_name"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_stateorprovince"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_country"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line3"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "description"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "industrycode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "revenue"): Xrm.Attributes.NumberControl;
      get(AttributeName: "ownershipcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "numberofemployees"): Xrm.Attributes.NumberControl;
      get(AttributeName: "tickersymbol"): Xrm.Attributes.Attribute;
      get(AttributeName: "sic"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "territoryid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "accountcategorycode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "customertypecode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "creditlimit"): Xrm.Attributes.NumberControl;
      get(AttributeName: "defaultpricelevelid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "accountContactsGrid"): Xrm.Attributes.Attribute;
      get(AttributeName: "accountactivitiesgrid"): Xrm.Attributes.Attribute;
      get(AttributeName: "notescontrol"): Xrm.Attributes.Attribute;
      get(AttributeName: "ownerid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "followemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredappointmentdaycode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredappointmenttimecode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredsystemuserid"): Xrm.Attributes.LookupControl;
     };
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
     controls: Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {;
      get(controlName: "WebResource_RecordWall"): Xrm.Controls.Control;
      get(controlName: "name"): Xrm.Controls.StringControl;
      get(controlName: "telephone1"): Xrm.Controls.StringControl;
      get(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
      get(controlName: "telephone2"): Xrm.Controls.StringControl;
      get(controlName: "accountnumber"): Xrm.Controls.StringControl;
      get(controlName: "fax"): Xrm.Controls.StringControl;
      get(controlName: "parentaccountid"): Xrm.Controls.LookupAttribute;
      get(controlName: "websiteurl"): Xrm.Controls.StringControl;
      get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlName: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_city"): Xrm.Controls.StringControl;
      get(controlName: "address1_name"): Xrm.Controls.StringControl;
      get(controlName: "address1_stateorprovince"): Xrm.Controls.StringControl;
      get(controlName: "address1_line1"): Xrm.Controls.StringControl;
      get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
      get(controlName: "address1_line2"): Xrm.Controls.StringControl;
      get(controlName: "address1_country"): Xrm.Controls.StringControl;
      get(controlName: "address1_line3"): Xrm.Controls.StringControl;
      get(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
      get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "description"): Xrm.Controls.StringControl;
      get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlName: "revenue"): Xrm.Controls.NumberAttribute;
      get(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "numberofemployees"): Xrm.Controls.NumberAttribute;
      get(controlName: "tickersymbol"): Xrm.Controls.Control;
      get(controlName: "sic"): Xrm.Controls.StringControl;
      get(controlName: "territoryid"): Xrm.Controls.LookupAttribute;
      get(controlName: "accountcategorycode"): Xrm.Controls.OptionSetControl;
      get(controlName: "customertypecode"): Xrm.Controls.OptionSetControl;
      get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
      get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
      get(controlName: "defaultpricelevelid"): Xrm.Controls.LookupAttribute;
      get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlName: "accountContactsGrid"): Xrm.Controls.Control;
      get(controlName: "accountactivitiesgrid"): Xrm.Controls.Control;
      get(controlName: "notescontrol"): Xrm.Controls.Control;
      get(controlName: "ownerid"): Xrm.Controls.LookupAttribute;
      get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
      get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredsystemuserid"): Xrm.Controls.LookupAttribute;
     };
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "tab_recordwall"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "tab_recordwall_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "WebResource_RecordWall"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "general"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "account information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "name"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "primarycontactid"): Xrm.Controls.LookupAttribute;
         get(controlName: "telephone2"): Xrm.Controls.StringControl;
         get(controlName: "accountnumber"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "parentaccountid"): Xrm.Controls.LookupAttribute;
         get(controlName: "websiteurl"): Xrm.Controls.StringControl;
         get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "address"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_city"): Xrm.Controls.StringControl;
         get(controlName: "address1_name"): Xrm.Controls.StringControl;
         get(controlName: "address1_stateorprovince"): Xrm.Controls.StringControl;
         get(controlName: "address1_line1"): Xrm.Controls.StringControl;
         get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
         get(controlName: "address1_line2"): Xrm.Controls.StringControl;
         get(controlName: "address1_country"): Xrm.Controls.StringControl;
         get(controlName: "address1_line3"): Xrm.Controls.StringControl;
         get(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "shipping information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "description"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "description"): Xrm.Controls.StringControl;
        }
       }
      };
     };
     get(tabName: "details"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "professional information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "industrycode"): Xrm.Controls.OptionSetControl;
         get(controlName: "revenue"): Xrm.Controls.NumberAttribute;
         get(controlName: "ownershipcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "numberofemployees"): Xrm.Controls.NumberAttribute;
         get(controlName: "tickersymbol"): Xrm.Controls.Control;
         get(controlName: "sic"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "description"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "territoryid"): Xrm.Controls.LookupAttribute;
         get(controlName: "accountcategorycode"): Xrm.Controls.OptionSetControl;
         get(controlName: "customertypecode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "billing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
         get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
         get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
         get(controlName: "defaultpricelevelid"): Xrm.Controls.LookupAttribute;
         get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        }
       }
      };
     };
     get(tabName: "contacts"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "contacts"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "accountContactsGrid"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "notes and activities"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "activities"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "accountactivitiesgrid"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "notes"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "administration"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "internal information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "ownerid"): Xrm.Controls.LookupAttribute;
        }
       }
       get(sectionName: "contact methods"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "followemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "marketing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
         get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
         get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "service preferences"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
         get(controlName: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
         get(controlName: "preferredsystemuserid"): Xrm.Controls.LookupAttribute;
        }
       }
      };
     };
    };
   }
  }
 }
}
/**
This file was generated using 'XrmTypesGen'. https://github.com/OliverFlint/XrmTypesGen
**/
declare namespace Xrm {
 namespace Ext {
  namespace Forms {
   namespace Information {
    type FormContext = Xrm.FormContext & {
     getAttribute(attributeName: "WebResource_RecordWall"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "salutation"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "firstname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "telephone2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "middlename"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "lastname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "fax"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "parentcustomerid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "address1_addresstypecode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_city"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_name"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_country"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_line3"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_telephone1"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "description"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "department"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "accountrolecode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "managername"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "assistantname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "managerphone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "assistantphone"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "gendercode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "birthdate"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "familystatuscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "anniversary"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "spousesname"): Xrm.Attributes.StringAttribute;
     getAttribute(attributeName: "contactactivitiesgrid"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "notescontrol"): Xrm.Attributes.Attribute;
     getAttribute(attributeName: "ownerid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "creditlimit"): Xrm.Attributes.NumberControl;
     getAttribute(attributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "defaultpricelevelid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
     getAttribute(attributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredappointmentdaycode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredequipmentid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "preferredappointmenttimecode"): Xrm.Attributes.OptionSetControl;
     getAttribute(attributeName: "preferredsystemuserid"): Xrm.Attributes.LookupControl;
     getAttribute(attributeName: "preferredserviceid"): Xrm.Attributes.LookupControl;
     getControl(controlName: "WebResource_RecordWall"): Xrm.Controls.Control;
     getControl(controlName: "salutation"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "firstname"): Xrm.Controls.StringControl;
     getControl(controlName: "telephone2"): Xrm.Controls.StringControl;
     getControl(controlName: "middlename"): Xrm.Controls.StringControl;
     getControl(controlName: "mobilephone"): Xrm.Controls.StringControl;
     getControl(controlName: "lastname"): Xrm.Controls.StringControl;
     getControl(controlName: "fax"): Xrm.Controls.StringControl;
     getControl(controlName: "jobtitle"): Xrm.Controls.StringControl;
     getControl(controlName: "emailaddress1"): Xrm.Controls.StringControl;
     getControl(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_city"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_name"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_stateorprovince"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line2"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_country"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_line3"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
     getControl(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "description"): Xrm.Controls.StringControl;
     getControl(controlName: "department"): Xrm.Controls.StringControl;
     getControl(controlName: "accountrolecode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "managername"): Xrm.Controls.StringControl;
     getControl(controlName: "assistantname"): Xrm.Controls.StringControl;
     getControl(controlName: "managerphone"): Xrm.Controls.StringControl;
     getControl(controlName: "assistantphone"): Xrm.Controls.StringControl;
     getControl(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "birthdate"): Xrm.Controls.DateControl;
     getControl(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "anniversary"): Xrm.Controls.DateControl;
     getControl(controlName: "spousesname"): Xrm.Controls.StringControl;
     getControl(controlName: "contactactivitiesgrid"): Xrm.Controls.Control;
     getControl(controlName: "notescontrol"): Xrm.Controls.Control;
     getControl(controlName: "ownerid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
     getControl(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "defaultpricelevelid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
     getControl(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredequipmentid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
     getControl(controlName: "preferredsystemuserid"): Xrm.Controls.LookupAttribute;
     getControl(controlName: "preferredserviceid"): Xrm.Controls.LookupAttribute;
     ui: Ui;
     data: Data;
    };
    type Data = Xrm.Data & {
     attributes: Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {;
      get(AttributeName: "WebResource_RecordWall"): Xrm.Attributes.Attribute;
      get(AttributeName: "salutation"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "firstname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "telephone2"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "middlename"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "lastname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "fax"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "parentcustomerid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "address1_addresstypecode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_city"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_name"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_stateorprovince"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_postalcode"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_country"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_line3"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_telephone1"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "address1_freighttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "address1_shippingmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "description"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "department"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "accountrolecode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "managername"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "assistantname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "managerphone"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "assistantphone"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "gendercode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "birthdate"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "familystatuscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "anniversary"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "spousesname"): Xrm.Attributes.StringAttribute;
      get(AttributeName: "contactactivitiesgrid"): Xrm.Attributes.Attribute;
      get(AttributeName: "notescontrol"): Xrm.Attributes.Attribute;
      get(AttributeName: "ownerid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "transactioncurrencyid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "paymenttermscode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "creditlimit"): Xrm.Attributes.NumberControl;
      get(AttributeName: "creditonhold"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredcontactmethodcode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotbulkemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotemail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotfax"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotphone"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "donotpostalmail"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "defaultpricelevelid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "originatingleadid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(AttributeName: "donotsendmm"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredappointmentdaycode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredequipmentid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "preferredappointmenttimecode"): Xrm.Attributes.OptionSetControl;
      get(AttributeName: "preferredsystemuserid"): Xrm.Attributes.LookupControl;
      get(AttributeName: "preferredserviceid"): Xrm.Attributes.LookupControl;
     };
    };
    type Ui = Xrm.Ui & {
     tabs: Tabs;
     controls: Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {;
      get(controlName: "WebResource_RecordWall"): Xrm.Controls.Control;
      get(controlName: "salutation"): Xrm.Controls.StringControl;
      get(controlName: "telephone1"): Xrm.Controls.StringControl;
      get(controlName: "firstname"): Xrm.Controls.StringControl;
      get(controlName: "telephone2"): Xrm.Controls.StringControl;
      get(controlName: "middlename"): Xrm.Controls.StringControl;
      get(controlName: "mobilephone"): Xrm.Controls.StringControl;
      get(controlName: "lastname"): Xrm.Controls.StringControl;
      get(controlName: "fax"): Xrm.Controls.StringControl;
      get(controlName: "jobtitle"): Xrm.Controls.StringControl;
      get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
      get(controlName: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_city"): Xrm.Controls.StringControl;
      get(controlName: "address1_name"): Xrm.Controls.StringControl;
      get(controlName: "address1_stateorprovince"): Xrm.Controls.StringControl;
      get(controlName: "address1_line1"): Xrm.Controls.StringControl;
      get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
      get(controlName: "address1_line2"): Xrm.Controls.StringControl;
      get(controlName: "address1_country"): Xrm.Controls.StringControl;
      get(controlName: "address1_line3"): Xrm.Controls.StringControl;
      get(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
      get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "description"): Xrm.Controls.StringControl;
      get(controlName: "department"): Xrm.Controls.StringControl;
      get(controlName: "accountrolecode"): Xrm.Controls.OptionSetControl;
      get(controlName: "managername"): Xrm.Controls.StringControl;
      get(controlName: "assistantname"): Xrm.Controls.StringControl;
      get(controlName: "managerphone"): Xrm.Controls.StringControl;
      get(controlName: "assistantphone"): Xrm.Controls.StringControl;
      get(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlName: "birthdate"): Xrm.Controls.DateControl;
      get(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "anniversary"): Xrm.Controls.DateControl;
      get(controlName: "spousesname"): Xrm.Controls.StringControl;
      get(controlName: "contactactivitiesgrid"): Xrm.Controls.Control;
      get(controlName: "notescontrol"): Xrm.Controls.Control;
      get(controlName: "ownerid"): Xrm.Controls.LookupAttribute;
      get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
      get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
      get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlName: "defaultpricelevelid"): Xrm.Controls.LookupAttribute;
      get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
      get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredequipmentid"): Xrm.Controls.LookupAttribute;
      get(controlName: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
      get(controlName: "preferredsystemuserid"): Xrm.Controls.LookupAttribute;
      get(controlName: "preferredserviceid"): Xrm.Controls.LookupAttribute;
     };
    };
    type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
     get(tabName: "tab_recordwall"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "tab_recordwall_section_1"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "WebResource_RecordWall"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "general"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "name"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "salutation"): Xrm.Controls.StringControl;
         get(controlName: "telephone1"): Xrm.Controls.StringControl;
         get(controlName: "firstname"): Xrm.Controls.StringControl;
         get(controlName: "telephone2"): Xrm.Controls.StringControl;
         get(controlName: "middlename"): Xrm.Controls.StringControl;
         get(controlName: "mobilephone"): Xrm.Controls.StringControl;
         get(controlName: "lastname"): Xrm.Controls.StringControl;
         get(controlName: "fax"): Xrm.Controls.StringControl;
         get(controlName: "jobtitle"): Xrm.Controls.StringControl;
         get(controlName: "emailaddress1"): Xrm.Controls.StringControl;
         get(controlName: "parentcustomerid"): Xrm.Controls.LookupAttribute;
        }
       }
       get(sectionName: "address"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_addresstypecode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_city"): Xrm.Controls.StringControl;
         get(controlName: "address1_name"): Xrm.Controls.StringControl;
         get(controlName: "address1_stateorprovince"): Xrm.Controls.StringControl;
         get(controlName: "address1_line1"): Xrm.Controls.StringControl;
         get(controlName: "address1_postalcode"): Xrm.Controls.StringControl;
         get(controlName: "address1_line2"): Xrm.Controls.StringControl;
         get(controlName: "address1_country"): Xrm.Controls.StringControl;
         get(controlName: "address1_line3"): Xrm.Controls.StringControl;
         get(controlName: "address1_telephone1"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "shipping information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "address1_freighttermscode"): Xrm.Controls.OptionSetControl;
         get(controlName: "address1_shippingmethodcode"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "description"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "description"): Xrm.Controls.StringControl;
        }
       }
      };
     };
     get(tabName: "details"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "professional information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "department"): Xrm.Controls.StringControl;
         get(controlName: "accountrolecode"): Xrm.Controls.OptionSetControl;
         get(controlName: "managername"): Xrm.Controls.StringControl;
         get(controlName: "assistantname"): Xrm.Controls.StringControl;
         get(controlName: "managerphone"): Xrm.Controls.StringControl;
         get(controlName: "assistantphone"): Xrm.Controls.StringControl;
        }
       }
       get(sectionName: "personal information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "gendercode"): Xrm.Controls.OptionSetControl;
         get(controlName: "birthdate"): Xrm.Controls.DateControl;
         get(controlName: "familystatuscode"): Xrm.Controls.OptionSetControl;
         get(controlName: "anniversary"): Xrm.Controls.DateControl;
         get(controlName: "spousesname"): Xrm.Controls.StringControl;
        }
       }
      };
     };
     get(tabName: "notes and activities"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "activities"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "contactactivitiesgrid"): Xrm.Controls.Control;
        }
       }
       get(sectionName: "notes"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "notescontrol"): Xrm.Controls.Control;
        }
       }
      };
     };
     get(tabName: "administration"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "internal information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "ownerid"): Xrm.Controls.LookupAttribute;
        }
       }
       get(sectionName: "billing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "transactioncurrencyid"): Xrm.Controls.LookupAttribute;
         get(controlName: "paymenttermscode"): Xrm.Controls.OptionSetControl;
         get(controlName: "creditlimit"): Xrm.Controls.NumberAttribute;
         get(controlName: "creditonhold"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "contact methods"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredcontactmethodcode"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotbulkemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotemail"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotfax"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotphone"): Xrm.Controls.OptionSetControl;
         get(controlName: "donotpostalmail"): Xrm.Controls.OptionSetControl;
        }
       }
      };
     };
     get(tabName: "conflictstab"): Xrm.Controls.Tab & {
      sections: Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
       get(sectionName: "conflictssection"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "defaultpricelevelid"): Xrm.Controls.LookupAttribute;
        }
       }
       get(sectionName: "marketing information"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "originatingleadid"): Xrm.Controls.LookupAttribute;
         get(controlName: "lastusedincampaign"): Xrm.Controls.DateControl;
         get(controlName: "donotsendmm"): Xrm.Controls.OptionSetControl;
        }
       }
       get(sectionName: "service preferences"): Xrm.Controls.Section & {
        controls: Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
         get(controlName: "preferredappointmentdaycode"): Xrm.Controls.OptionSetControl;
         get(controlName: "preferredequipmentid"): Xrm.Controls.LookupAttribute;
         get(controlName: "preferredappointmenttimecode"): Xrm.Controls.OptionSetControl;
         get(controlName: "preferredsystemuserid"): Xrm.Controls.LookupAttribute;
         get(controlName: "preferredserviceid"): Xrm.Controls.LookupAttribute;
        }
       }
      };
     };
    };
   }
  }
 }
}
