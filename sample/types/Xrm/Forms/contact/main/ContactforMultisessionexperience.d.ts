// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.main.ContactforMultisessionexperience {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fax"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "address1_composite"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "gendercode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "familystatuscode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "spousesname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
      getAttribute(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
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
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      getControl(controlname: "firstname"): Xrm.Controls.StringControl;
      getControl(controlname: "lastname"): Xrm.Controls.StringControl;
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "fax"): Xrm.Controls.StringControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "address1_composite"): Xrm.Controls.StringControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      getControl(controlname: "RelatedCases"): Xrm.Controls.GridControl;
      getControl(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "familystatuscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "spousesname"): Xrm.Controls.StringControl;
      getControl(controlname: "birthdate"): Xrm.Controls.DateControl;
      getControl(controlname: "anniversary"): Xrm.Controls.DateControl;
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
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      get(controlname: "RelatedCases"): Xrm.Controls.GridControl;
      get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "spousesname"): Xrm.Controls.StringControl;
      get(controlname: "birthdate"): Xrm.Controls.DateControl;
      get(controlname: "anniversary"): Xrm.Controls.DateControl;
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
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      get(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "fax"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "address1_composite"): Xrm.Attributes.StringAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "gendercode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "familystatuscode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "spousesname"): Xrm.Attributes.StringAttribute;
      get(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
      get(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
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
        sectionname: "CONTACT_INFORMATION"
      ): CONTACT_INFORMATIONSectionControl;
      get(sectionname: "Timeline"): TimelineSectionControl;
      get(
        sectionname: "SUMMARY_TAB_section_4"
      ): SUMMARY_TAB_section_4SectionControl;
    }
    interface DETAILS_TABTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "PERSONAL INFORMATION"
      ): PERSONALINFORMATIONSectionControl;
      get(
        sectionname: "PERSONAL_NOTES_SECTION"
      ): PERSONAL_NOTES_SECTIONSectionControl;
      get(
        sectionname: "marketing information"
      ): marketinginformationSectionControl;
      get(
        sectionname: "CONTACT_PREFERENCES"
      ): CONTACT_PREFERENCESSectionControl;
      get(sectionname: "billing information"): billinginformationSectionControl;
      get(
        sectionname: "shipping information"
      ): shippinginformationSectionControl;
    }

    interface tab_recordwall_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_recordwall_section_1SectionControls;
    }
    interface CONTACT_INFORMATIONSectionControl extends Xrm.Controls.Section {
      controls: CONTACT_INFORMATIONSectionControls;
    }
    interface TimelineSectionControl extends Xrm.Controls.Section {
      controls: TimelineSectionControls;
    }
    interface SUMMARY_TAB_section_4SectionControl extends Xrm.Controls.Section {
      controls: SUMMARY_TAB_section_4SectionControls;
    }
    interface PERSONALINFORMATIONSectionControl extends Xrm.Controls.Section {
      controls: PERSONALINFORMATIONSectionControls;
    }
    interface PERSONAL_NOTES_SECTIONSectionControl
      extends Xrm.Controls.Section {
      controls: PERSONAL_NOTES_SECTIONSectionControls;
    }
    interface marketinginformationSectionControl extends Xrm.Controls.Section {
      controls: marketinginformationSectionControls;
    }
    interface CONTACT_PREFERENCESSectionControl extends Xrm.Controls.Section {
      controls: CONTACT_PREFERENCESSectionControls;
    }
    interface billinginformationSectionControl extends Xrm.Controls.Section {
      controls: billinginformationSectionControls;
    }
    interface shippinginformationSectionControl extends Xrm.Controls.Section {
      controls: shippinginformationSectionControls;
    }

    interface tab_recordwall_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
    }
    interface CONTACT_INFORMATIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
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
    interface PERSONALINFORMATIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "spousesname"): Xrm.Controls.StringControl;
      get(controlname: "birthdate"): Xrm.Controls.DateControl;
      get(controlname: "anniversary"): Xrm.Controls.DateControl;
    }
    interface PERSONAL_NOTES_SECTIONSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface marketinginformationSectionControls
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
    interface billinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
    }
    interface shippinginformationSectionControls
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
