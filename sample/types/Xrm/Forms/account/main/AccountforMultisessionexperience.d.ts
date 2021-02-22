// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.account.main.AccountforMultisessionexperience {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(
        attributename: "primarycontactid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "name"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fax"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "primarycontactid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "parentaccountid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "address1_composite"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "industrycode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(attributename: "sic"): Xrm.Attributes.StringAttribute;
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
      getAttribute(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
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
      //#endregion
      //#region form context contols
      getControl(
        controlname: "WebResource_RecordWall"
      ): Xrm.Controls.IframeControl;
      getControl(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      getControl(controlname: "name"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "fax"): Xrm.Controls.StringControl;
      getControl(controlname: "websiteurl"): Xrm.Controls.StringControl;
      getControl(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      getControl(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
      getControl(controlname: "address1_composite"): Xrm.Controls.StringControl;
      getControl(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      getControl(controlname: "RelatedCases"): Xrm.Controls.GridControl;
      getControl(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "sic"): Xrm.Controls.StringControl;
      getControl(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      getControl(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      getControl(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "transactioncurrencyid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      getControl(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "paymenttermscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      get(controlname: "name"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      get(controlname: "RelatedCases"): Xrm.Controls.GridControl;
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
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "primarycontactid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "name"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "fax"): Xrm.Attributes.StringAttribute;
      get(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      get(attributename: "primarycontactid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "parentaccountid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "address1_composite"): Xrm.Attributes.StringAttribute;
      get(attributename: "industrycode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "sic"): Xrm.Attributes.StringAttribute;
      get(attributename: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "originatingleadid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(attributename: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "followemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
      get(attributename: "creditonhold"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "address1_shippingmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "address1_freighttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
    }

    interface Data extends Xrm.Data {
      attributes: Attributes;
    }

    interface Ui extends Xrm.Ui {
      tabs: Tabs;
      controls: Controls;
    }

    interface Tabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
      get(tabname: "tab_recordwall"): tab_recordwallTabControl;
      get(tabname: "SUMMARY_TAB"): SUMMARY_TABTabControl;
      get(tabname: "DETAILS_TAB"): DETAILS_TABTabControl;
    }

    interface tab_recordwallTabControl extends Xrm.Controls.Tab {
      sections: tab_recordwallTabSections;
    }
    interface SUMMARY_TABTabControl extends Xrm.Controls.Tab {
      sections: SUMMARY_TABTabSections;
    }
    interface DETAILS_TABTabControl extends Xrm.Controls.Tab {
      sections: DETAILS_TABTabSections;
    }

    interface tab_recordwallTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "tab_recordwall_section_1"
      ): tab_recordwall_section_1SectionControl;
    }
    interface SUMMARY_TABTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "ACCOUNT_INFORMATION"
      ): ACCOUNT_INFORMATIONSectionControl;
      get(sectionname: "Timeline"): TimelineSectionControl;
      get(
        sectionname: "SUMMARY_TAB_section_4"
      ): SUMMARY_TAB_section_4SectionControl;
    }
    interface DETAILS_TABTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "COMPANY_PROFILE"): COMPANY_PROFILESectionControl;
      get(
        sectionname: "DETAILS_TAB_section_6"
      ): DETAILS_TAB_section_6SectionControl;
      get(sectionname: "MARKETING"): MARKETINGSectionControl;
      get(
        sectionname: "CONTACT_PREFERENCES"
      ): CONTACT_PREFERENCESSectionControl;
      get(sectionname: "BILLING"): BILLINGSectionControl;
      get(sectionname: "SHIPPING"): SHIPPINGSectionControl;
    }

    interface tab_recordwall_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_recordwall_section_1SectionControls;
    }
    interface ACCOUNT_INFORMATIONSectionControl extends Xrm.Controls.Section {
      controls: ACCOUNT_INFORMATIONSectionControls;
    }
    interface TimelineSectionControl extends Xrm.Controls.Section {
      controls: TimelineSectionControls;
    }
    interface SUMMARY_TAB_section_4SectionControl extends Xrm.Controls.Section {
      controls: SUMMARY_TAB_section_4SectionControls;
    }
    interface COMPANY_PROFILESectionControl extends Xrm.Controls.Section {
      controls: COMPANY_PROFILESectionControls;
    }
    interface DETAILS_TAB_section_6SectionControl extends Xrm.Controls.Section {
      controls: DETAILS_TAB_section_6SectionControls;
    }
    interface MARKETINGSectionControl extends Xrm.Controls.Section {
      controls: MARKETINGSectionControls;
    }
    interface CONTACT_PREFERENCESSectionControl extends Xrm.Controls.Section {
      controls: CONTACT_PREFERENCESSectionControls;
    }
    interface BILLINGSectionControl extends Xrm.Controls.Section {
      controls: BILLINGSectionControls;
    }
    interface SHIPPINGSectionControl extends Xrm.Controls.Section {
      controls: SHIPPINGSectionControls;
    }

    interface tab_recordwall_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
    }
    interface ACCOUNT_INFORMATIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      get(controlname: "name"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
    }
    interface TimelineSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
    }
    interface SUMMARY_TAB_section_4SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "RelatedCases"): Xrm.Controls.GridControl;
    }
    interface COMPANY_PROFILESectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "sic"): Xrm.Controls.StringControl;
      get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
    }
    interface DETAILS_TAB_section_6SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface MARKETINGSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
    }
    interface CONTACT_PREFERENCESSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
    }
    interface BILLINGSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
    }
    interface SHIPPINGSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
    }
  }
}
