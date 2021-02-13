// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext {
    namespace Forms {
      namespace account {
        namespace main {
          namespace Information {
            type Form = Xrm.FormContext & {
              getAttribute(
                attributename: "name"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "telephone1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "primarycontactid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "telephone2"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "accountnumber"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "fax"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "parentaccountid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "websiteurl"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_addresstypecode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_city"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_name"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_stateorprovince"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_line1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_postalcode"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_line2"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_country"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_line3"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_telephone1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "description"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "industrycode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "revenue"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "ownershipcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "numberofemployees"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "tickersymbol"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "sic"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "territoryid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "accountcategorycode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "customertypecode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "creditlimit"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "defaultpricelevelid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "ownerid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotfax"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotphone"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "originatingleadid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "lastusedincampaign"
              ): Xrm.Attributes.DateAttribute;
              getAttribute(
                attributename: "donotsendmm"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "preferredappointmentdaycode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "preferredappointmenttimecode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "preferredsystemuserid"
              ): Xrm.Attributes.LookupAttribute;
              getControl(
                controlname: "WebResource_RecordWall"
              ): Xrm.Controls.IframeControl;
              getControl(controlname: "name"): Xrm.Controls.StringControl;
              getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
              getControl(
                controlname: "primarycontactid"
              ): Xrm.Controls.LookupControl;
              getControl(controlname: "telephone2"): Xrm.Controls.StringControl;
              getControl(
                controlname: "accountnumber"
              ): Xrm.Controls.StringControl;
              getControl(controlname: "fax"): Xrm.Controls.StringControl;
              getControl(
                controlname: "parentaccountid"
              ): Xrm.Controls.LookupControl;
              getControl(controlname: "websiteurl"): Xrm.Controls.StringControl;
              getControl(
                controlname: "emailaddress1"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_addresstypecode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "address1_city"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_name"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_stateorprovince"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_line1"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_line2"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_country"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_line3"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_telephone1"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "description"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "industrycode"
              ): Xrm.Controls.OptionSetControl;
              getControl(controlname: "revenue"): Xrm.Controls.NumberControl;
              getControl(
                controlname: "ownershipcode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "numberofemployees"
              ): Xrm.Controls.NumberControl;
              getControl(
                controlname: "tickersymbol"
              ): Xrm.Controls.StringControl;
              getControl(controlname: "sic"): Xrm.Controls.StringControl;
              getControl(
                controlname: "territoryid"
              ): Xrm.Controls.LookupControl;
              getControl(
                controlname: "accountcategorycode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "customertypecode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              getControl(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "creditlimit"
              ): Xrm.Controls.NumberControl;
              getControl(
                controlname: "defaultpricelevelid"
              ): Xrm.Controls.LookupControl;
              getControl(
                controlname: "creditonhold"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "accountContactsGrid"
              ): Xrm.Controls.GridControl;
              getControl(
                controlname: "accountactivitiesgrid"
              ): Xrm.Controls.GridControl;
              getControl(
                controlname: "notescontrol"
              ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
              getControl(controlname: "ownerid"): Xrm.Controls.LookupControl;
              getControl(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "followemail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotbulkemail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotemail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotfax"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotphone"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "originatingleadid"
              ): Xrm.Controls.LookupControl;
              getControl(
                controlname: "lastusedincampaign"
              ): Xrm.Controls.DateControl;
              getControl(
                controlname: "donotsendmm"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "preferredappointmentdaycode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "preferredappointmenttimecode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "preferredsystemuserid"
              ): Xrm.Controls.LookupControl;

              ui: Xrm.Ui & {
                tabs: Tabs;

                controls: UiControls;
              };

              data: Xrm.Data & {
                attributes: DataAttributes;
              };
            };
            type Tabs = Xrm.Collection.ItemCollection<Xrm.Controls.Tab> & {
              get(
                tabname: "tab_recordwall"
              ): Xrm.Controls.Tab & {
                sections: tab_recordwallSections;
              };
              get(
                tabname: "general"
              ): Xrm.Controls.Tab & {
                sections: generalSections;
              };
              get(
                tabname: "details"
              ): Xrm.Controls.Tab & {
                sections: detailsSections;
              };
              get(
                tabname: "contacts"
              ): Xrm.Controls.Tab & {
                sections: contactsSections;
              };
              get(
                tabname: "notes and activities"
              ): Xrm.Controls.Tab & {
                sections: notesandactivitiesSections;
              };
              get(
                tabname: "administration"
              ): Xrm.Controls.Tab & {
                sections: administrationSections;
              };
            };

            type tab_recordwallSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "tab_recordwall_section_1"
              ): Xrm.Controls.Section & {
                controls: tab_recordwalltab_recordwall_section_1Controls;
              };
            };
            type generalSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "account information"
              ): Xrm.Controls.Section & {
                controls: generalaccountinformationControls;
              };
              get(
                sectionname: "address"
              ): Xrm.Controls.Section & {
                controls: generaladdressControls;
              };
              get(
                sectionname: "shipping information"
              ): Xrm.Controls.Section & {
                controls: generalshippinginformationControls;
              };
              get(
                sectionname: "description"
              ): Xrm.Controls.Section & {
                controls: generaldescriptionControls;
              };
            };
            type detailsSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "professional information"
              ): Xrm.Controls.Section & {
                controls: detailsprofessionalinformationControls;
              };
              get(
                sectionname: "description"
              ): Xrm.Controls.Section & {
                controls: detailsdescriptionControls;
              };
              get(
                sectionname: "billing information"
              ): Xrm.Controls.Section & {
                controls: detailsbillinginformationControls;
              };
            };
            type contactsSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "contacts"
              ): Xrm.Controls.Section & {
                controls: contactscontactsControls;
              };
            };
            type notesandactivitiesSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "activities"
              ): Xrm.Controls.Section & {
                controls: notesandactivitiesactivitiesControls;
              };
              get(
                sectionname: "notes"
              ): Xrm.Controls.Section & {
                controls: notesandactivitiesnotesControls;
              };
            };
            type administrationSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "internal information"
              ): Xrm.Controls.Section & {
                controls: administrationinternalinformationControls;
              };
              get(
                sectionname: "contact methods"
              ): Xrm.Controls.Section & {
                controls: administrationcontactmethodsControls;
              };
              get(
                sectionname: "marketing information"
              ): Xrm.Controls.Section & {
                controls: administrationmarketinginformationControls;
              };
              get(
                sectionname: "service preferences"
              ): Xrm.Controls.Section & {
                controls: administrationservicepreferencesControls;
              };
            };
            type tab_recordwalltab_recordwall_section_1Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "WebResource_RecordWall"
              ): Xrm.Controls.IframeControl;
            };
            type generalaccountinformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "name"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
              get(controlname: "telephone2"): Xrm.Controls.StringControl;
              get(controlname: "accountnumber"): Xrm.Controls.StringControl;
              get(controlname: "fax"): Xrm.Controls.StringControl;
              get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
              get(controlname: "websiteurl"): Xrm.Controls.StringControl;
              get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
            };
            type generaladdressControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "address1_addresstypecode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "address1_city"): Xrm.Controls.StringControl;
              get(controlname: "address1_name"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_stateorprovince"
              ): Xrm.Controls.StringControl;
              get(controlname: "address1_line1"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;
              get(controlname: "address1_line2"): Xrm.Controls.StringControl;
              get(controlname: "address1_country"): Xrm.Controls.StringControl;
              get(controlname: "address1_line3"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_telephone1"
              ): Xrm.Controls.StringControl;
            };
            type generalshippinginformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
            };
            type generaldescriptionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "description"): Xrm.Controls.StringControl;
            };
            type detailsprofessionalinformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
              get(controlname: "revenue"): Xrm.Controls.NumberControl;
              get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
              get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
              get(controlname: "tickersymbol"): Xrm.Controls.StringControl;
              get(controlname: "sic"): Xrm.Controls.StringControl;
            };
            type detailsdescriptionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "territoryid"): Xrm.Controls.LookupControl;
              get(
                controlname: "accountcategorycode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "customertypecode"
              ): Xrm.Controls.OptionSetControl;
            };
            type detailsbillinginformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              get(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
              get(
                controlname: "defaultpricelevelid"
              ): Xrm.Controls.LookupControl;
              get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
            };
            type contactscontactsControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "accountContactsGrid"): Xrm.Controls.GridControl;
            };
            type notesandactivitiesactivitiesControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "accountactivitiesgrid"
              ): Xrm.Controls.GridControl;
            };
            type notesandactivitiesnotesControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "notescontrol"
              ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
            };
            type administrationinternalinformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "ownerid"): Xrm.Controls.LookupControl;
            };
            type administrationcontactmethodsControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
            };
            type administrationmarketinginformationControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
              get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
              get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
            };
            type administrationservicepreferencesControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "preferredappointmentdaycode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "preferredappointmenttimecode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "preferredsystemuserid"
              ): Xrm.Controls.LookupControl;
            };
            type UiControls = Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {
              get(
                controlname: "WebResource_RecordWall"
              ): Xrm.Controls.IframeControl;
              get(controlname: "name"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
              get(controlname: "telephone2"): Xrm.Controls.StringControl;
              get(controlname: "accountnumber"): Xrm.Controls.StringControl;
              get(controlname: "fax"): Xrm.Controls.StringControl;
              get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
              get(controlname: "websiteurl"): Xrm.Controls.StringControl;
              get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_addresstypecode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "address1_city"): Xrm.Controls.StringControl;
              get(controlname: "address1_name"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_stateorprovince"
              ): Xrm.Controls.StringControl;
              get(controlname: "address1_line1"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_postalcode"
              ): Xrm.Controls.StringControl;
              get(controlname: "address1_line2"): Xrm.Controls.StringControl;
              get(controlname: "address1_country"): Xrm.Controls.StringControl;
              get(controlname: "address1_line3"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_telephone1"
              ): Xrm.Controls.StringControl;
              get(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "description"): Xrm.Controls.StringControl;
              get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
              get(controlname: "revenue"): Xrm.Controls.NumberControl;
              get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
              get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
              get(controlname: "tickersymbol"): Xrm.Controls.StringControl;
              get(controlname: "sic"): Xrm.Controls.StringControl;
              get(controlname: "territoryid"): Xrm.Controls.LookupControl;
              get(
                controlname: "accountcategorycode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "customertypecode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              get(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
              get(
                controlname: "defaultpricelevelid"
              ): Xrm.Controls.LookupControl;
              get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
              get(controlname: "accountContactsGrid"): Xrm.Controls.GridControl;
              get(
                controlname: "accountactivitiesgrid"
              ): Xrm.Controls.GridControl;
              get(
                controlname: "notescontrol"
              ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
              get(controlname: "ownerid"): Xrm.Controls.LookupControl;
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
              get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
              get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "preferredappointmentdaycode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "preferredappointmenttimecode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "preferredsystemuserid"
              ): Xrm.Controls.LookupControl;
            };
            type DataAttributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
              get(attributename: "name"): Xrm.Attributes.StringAttribute;
              get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "primarycontactid"
              ): Xrm.Attributes.LookupAttribute;
              get(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "accountnumber"
              ): Xrm.Attributes.StringAttribute;
              get(attributename: "fax"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "parentaccountid"
              ): Xrm.Attributes.LookupAttribute;
              get(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "emailaddress1"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_addresstypecode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_city"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_name"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_stateorprovince"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_line1"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_postalcode"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_line2"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_country"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_line3"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_telephone1"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "description"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "industrycode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
              get(
                attributename: "ownershipcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "numberofemployees"
              ): Xrm.Attributes.NumberAttribute;
              get(
                attributename: "tickersymbol"
              ): Xrm.Attributes.StringAttribute;
              get(attributename: "sic"): Xrm.Attributes.StringAttribute;
              get(attributename: "territoryid"): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "accountcategorycode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "customertypecode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
              get(
                attributename: "defaultpricelevelid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              get(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "originatingleadid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "lastusedincampaign"
              ): Xrm.Attributes.DateAttribute;
              get(
                attributename: "donotsendmm"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "preferredappointmentdaycode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "preferredappointmenttimecode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "preferredsystemuserid"
              ): Xrm.Attributes.LookupAttribute;
            };
          }
        }
      }
    }
  }
}
