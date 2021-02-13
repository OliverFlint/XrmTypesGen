// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext {
    namespace Forms {
      namespace account {
        namespace main {
          namespace Account {
            type Form = Xrm.FormContext & {
              getAttribute(
                attributename: "name"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "telephone1"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "fax"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "websiteurl"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "parentaccountid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "tickersymbol"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "address1_composite"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "primarycontactid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "industrycode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "sic"
              ): Xrm.Attributes.StringAttribute;
              getAttribute(
                attributename: "ownershipcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "description"
              ): Xrm.Attributes.StringAttribute;
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
                attributename: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "donotemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotphone"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotfax"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              getAttribute(
                attributename: "creditlimit"
              ): Xrm.Attributes.NumberAttribute;
              getAttribute(
                attributename: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              getAttribute(
                attributename: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              getAttribute(
                attributename: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              getControl(controlname: "name"): Xrm.Controls.StringControl;
              getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
              getControl(controlname: "fax"): Xrm.Controls.StringControl;
              getControl(controlname: "websiteurl"): Xrm.Controls.StringControl;
              getControl(
                controlname: "parentaccountid"
              ): Xrm.Controls.LookupControl;
              getControl(
                controlname: "tickersymbol"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "address1_composite"
              ): Xrm.Controls.StringControl;
              getControl(
                controlname: "mapcontrol"
              ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
              getControl(
                controlname: "notescontrol"
              ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
              getControl(
                controlname: "ActionCards"
              ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
              getControl(
                controlname: "primarycontactid"
              ): Xrm.Controls.LookupControl;
              getControl(controlname: "Contacts"): Xrm.Controls.GridControl;
              getControl(
                controlname: "accountopportunitiesgrid"
              ): Xrm.Controls.GridControl;
              getControl(
                controlname: "accountcasessgrid"
              ): Xrm.Controls.GridControl;
              getControl(
                controlname: "subgrid_Entitlement"
              ): Xrm.Controls.GridControl;
              getControl(
                controlname: "industrycode"
              ): Xrm.Controls.OptionSetControl;
              getControl(controlname: "sic"): Xrm.Controls.StringControl;
              getControl(
                controlname: "ownershipcode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "description"
              ): Xrm.Controls.StringControl;
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
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotemail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "followemail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotbulkemail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotphone"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotfax"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              getControl(
                controlname: "creditlimit"
              ): Xrm.Controls.NumberControl;
              getControl(
                controlname: "creditonhold"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
              getControl(
                controlname: "ChildAccounts"
              ): Xrm.Controls.GridControl;
              getControl(
                controlname: "DocumentsSubGrid"
              ): Xrm.Controls.GridControl;

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
                tabname: "SUMMARY_TAB"
              ): Xrm.Controls.Tab & {
                sections: SUMMARY_TABSections;
              };
              get(
                tabname: "DETAILS_TAB"
              ): Xrm.Controls.Tab & {
                sections: DETAILS_TABSections;
              };
              get(
                tabname: "documents_sharepoint"
              ): Xrm.Controls.Tab & {
                sections: documents_sharepointSections;
              };
              get(
                tabname: "AssetsAndLocationsTab"
              ): Xrm.Controls.Tab & {
                sections: AssetsAndLocationsTabSections;
              };
            };

            type SUMMARY_TABSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "ACCOUNT_INFORMATION"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABACCOUNT_INFORMATIONControls;
              };
              get(
                sectionname: "ADDRESS"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABADDRESSControls;
              };
              get(
                sectionname: "MapSection"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABMapSectionControls;
              };
              get(
                sectionname: "SOCIAL_PANE_TAB"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABSOCIAL_PANE_TABControls;
              };
              get(
                sectionname: "Summary_section_6"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABSummary_section_6Controls;
              };
              get(
                sectionname: "SUMMARY_TAB_section_6"
              ): Xrm.Controls.Section & {
                controls: SUMMARY_TABSUMMARY_TAB_section_6Controls;
              };
            };
            type DETAILS_TABSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "COMPANY_PROFILE"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABCOMPANY_PROFILEControls;
              };
              get(
                sectionname: "DETAILS_TAB_section_6"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABDETAILS_TAB_section_6Controls;
              };
              get(
                sectionname: "MARKETING"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABMARKETINGControls;
              };
              get(
                sectionname: "CONTACT_PREFERENCES"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABCONTACT_PREFERENCESControls;
              };
              get(
                sectionname: "BILLING"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABBILLINGControls;
              };
              get(
                sectionname: "SHIPPING"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABSHIPPINGControls;
              };
              get(
                sectionname: "ChildAccounts"
              ): Xrm.Controls.Section & {
                controls: DETAILS_TABChildAccountsControls;
              };
            };
            type documents_sharepointSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "documents_sharepoint_section"
              ): Xrm.Controls.Section & {
                controls: documents_sharepointdocuments_sharepoint_sectionControls;
              };
            };
            type AssetsAndLocationsTabSections = Xrm.Collection.ItemCollection<Xrm.Controls.Section> & {
              get(
                sectionname: "AssetsAndLocationsSection"
              ): Xrm.Controls.Section & {
                controls: AssetsAndLocationsTabAssetsAndLocationsSectionControls;
              };
            };
            type SUMMARY_TABACCOUNT_INFORMATIONControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "name"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "fax"): Xrm.Controls.StringControl;
              get(controlname: "websiteurl"): Xrm.Controls.StringControl;
              get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
              get(controlname: "tickersymbol"): Xrm.Controls.StringControl;
            };
            type SUMMARY_TABADDRESSControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "address1_composite"
              ): Xrm.Controls.StringControl;
            };
            type SUMMARY_TABMapSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "mapcontrol"
              ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
            };
            type SUMMARY_TABSOCIAL_PANE_TABControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "notescontrol"
              ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
            };
            type SUMMARY_TABSummary_section_6Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "ActionCards"
              ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
            };
            type SUMMARY_TABSUMMARY_TAB_section_6Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
              get(controlname: "Contacts"): Xrm.Controls.GridControl;
              get(
                controlname: "accountopportunitiesgrid"
              ): Xrm.Controls.GridControl;
              get(controlname: "accountcasessgrid"): Xrm.Controls.GridControl;
              get(controlname: "subgrid_Entitlement"): Xrm.Controls.GridControl;
            };
            type DETAILS_TABCOMPANY_PROFILEControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
              get(controlname: "sic"): Xrm.Controls.StringControl;
              get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABDETAILS_TAB_section_6Controls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "description"): Xrm.Controls.StringControl;
            };
            type DETAILS_TABMARKETINGControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
              get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
              get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABCONTACT_PREFERENCESControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABBILLINGControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
              get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABSHIPPINGControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
            };
            type DETAILS_TABChildAccountsControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "ChildAccounts"): Xrm.Controls.GridControl;
            };
            type documents_sharepointdocuments_sharepoint_sectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "DocumentsSubGrid"): Xrm.Controls.GridControl;
            };
            type AssetsAndLocationsTabAssetsAndLocationsSectionControls = Xrm.Collection.ItemCollection<Xrm.Controls.Control> & {
              get(controlname: "name"): Xrm.Controls.StringControl;
            };
            type UiControls = Xrm.Collection.ItemCollection<Xrm.Attributes.Control> & {
              get(controlname: "name"): Xrm.Controls.StringControl;
              get(controlname: "telephone1"): Xrm.Controls.StringControl;
              get(controlname: "fax"): Xrm.Controls.StringControl;
              get(controlname: "websiteurl"): Xrm.Controls.StringControl;
              get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
              get(controlname: "tickersymbol"): Xrm.Controls.StringControl;
              get(
                controlname: "address1_composite"
              ): Xrm.Controls.StringControl;
              get(
                controlname: "mapcontrol"
              ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
              get(
                controlname: "notescontrol"
              ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
              get(
                controlname: "ActionCards"
              ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
              get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
              get(controlname: "Contacts"): Xrm.Controls.GridControl;
              get(
                controlname: "accountopportunitiesgrid"
              ): Xrm.Controls.GridControl;
              get(controlname: "accountcasessgrid"): Xrm.Controls.GridControl;
              get(controlname: "subgrid_Entitlement"): Xrm.Controls.GridControl;
              get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
              get(controlname: "sic"): Xrm.Controls.StringControl;
              get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
              get(controlname: "description"): Xrm.Controls.StringControl;
              get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
              get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
              get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "preferredcontactmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
              get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "donotpostalmail"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "transactioncurrencyid"
              ): Xrm.Controls.LookupControl;
              get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
              get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
              get(
                controlname: "paymenttermscode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_shippingmethodcode"
              ): Xrm.Controls.OptionSetControl;
              get(
                controlname: "address1_freighttermscode"
              ): Xrm.Controls.OptionSetControl;
              get(controlname: "ChildAccounts"): Xrm.Controls.GridControl;
              get(controlname: "DocumentsSubGrid"): Xrm.Controls.GridControl;
            };
            type DataAttributes = Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> & {
              get(attributename: "name"): Xrm.Attributes.StringAttribute;
              get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
              get(attributename: "fax"): Xrm.Attributes.StringAttribute;
              get(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "parentaccountid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "tickersymbol"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "address1_composite"
              ): Xrm.Attributes.StringAttribute;
              get(
                attributename: "primarycontactid"
              ): Xrm.Attributes.LookupAttribute;
              get(
                attributename: "industrycode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "sic"): Xrm.Attributes.StringAttribute;
              get(
                attributename: "ownershipcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "description"): Xrm.Attributes.StringAttribute;
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
                attributename: "preferredcontactmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "followemail"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "donotbulkemail"
              ): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
              get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "donotpostalmail"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "transactioncurrencyid"
              ): Xrm.Attributes.LookupAttribute;
              get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
              get(
                attributename: "creditonhold"
              ): Xrm.Attributes.BooleanAttribute;
              get(
                attributename: "paymenttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_shippingmethodcode"
              ): Xrm.Attributes.OptionSetAttribute;
              get(
                attributename: "address1_freighttermscode"
              ): Xrm.Attributes.OptionSetAttribute;
            };
          }
        }
      }
    }
  }
}
