// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.lead.main.Information {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(attributename: "subject"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "salutation"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fax"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "companyname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone3"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "pager"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_line1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_stateorprovince"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_line2"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_postalcode"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_line3"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_country"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_city"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "description"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "leadsourcecode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "leadqualitycode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "industrycode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "sic"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      getAttribute(
        attributename: "numberofemployees"
      ): Xrm.Attributes.NumberAttribute;
      getAttribute(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "statuscode"
      ): Xrm.Attributes.OptionSetAttribute;
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
      getAttribute(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "donotphone"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "donotpostalmail"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(attributename: "campaignid"): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "lastusedincampaign"
      ): Xrm.Attributes.DateAttribute;
      getAttribute(
        attributename: "donotsendmm"
      ): Xrm.Attributes.BooleanAttribute;
      //#endregion
      //#region form context contols
      getControl(
        controlname: "WebResource_RecordWall"
      ): Xrm.Controls.IframeControl;
      getControl(controlname: "subject"): Xrm.Controls.StringControl;
      getControl(controlname: "salutation"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "firstname"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone2"): Xrm.Controls.StringControl;
      getControl(controlname: "lastname"): Xrm.Controls.StringControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "jobtitle"): Xrm.Controls.StringControl;
      getControl(controlname: "fax"): Xrm.Controls.StringControl;
      getControl(controlname: "companyname"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone3"): Xrm.Controls.StringControl;
      getControl(controlname: "websiteurl"): Xrm.Controls.StringControl;
      getControl(controlname: "pager"): Xrm.Controls.StringControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line1"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_stateorprovince"
      ): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line2"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_postalcode"
      ): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line3"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_country"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_city"): Xrm.Controls.StringControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "leadqualitycode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "transactioncurrencyid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "sic"): Xrm.Controls.StringControl;
      getControl(controlname: "revenue"): Xrm.Controls.NumberControl;
      getControl(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      getControl(controlname: "leadactivitiesgrid"): Xrm.Controls.GridControl;
      getControl(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      getControl(controlname: "ownerid"): Xrm.Controls.LookupControl;
      getControl(controlname: "statuscode"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "campaignid"): Xrm.Controls.LookupControl;
      getControl(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      getControl(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
      get(controlname: "subject"): Xrm.Controls.StringControl;
      get(controlname: "salutation"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "telephone2"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "companyname"): Xrm.Controls.StringControl;
      get(controlname: "telephone3"): Xrm.Controls.StringControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "pager"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_stateorprovince"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
      get(controlname: "address1_line3"): Xrm.Controls.StringControl;
      get(controlname: "address1_country"): Xrm.Controls.StringControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
      get(controlname: "leadqualitycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "sic"): Xrm.Controls.StringControl;
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      get(controlname: "leadactivitiesgrid"): Xrm.Controls.GridControl;
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      get(controlname: "ownerid"): Xrm.Controls.LookupControl;
      get(controlname: "statuscode"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlname: "campaignid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "subject"): Xrm.Attributes.StringAttribute;
      get(attributename: "salutation"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
      get(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(attributename: "fax"): Xrm.Attributes.StringAttribute;
      get(attributename: "companyname"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone3"): Xrm.Attributes.StringAttribute;
      get(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      get(attributename: "pager"): Xrm.Attributes.StringAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "address1_stateorprovince"
      ): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_postalcode"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line3"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_country"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_city"): Xrm.Attributes.StringAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "leadsourcecode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "leadqualitycode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "industrycode"): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "sic"): Xrm.Attributes.StringAttribute;
      get(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      get(attributename: "numberofemployees"): Xrm.Attributes.NumberAttribute;
      get(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "statuscode"): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "followemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "campaignid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(attributename: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
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
      get(tabname: "general"): generalTabControl;
      get(tabname: "details"): detailsTabControl;
      get(tabname: "notes and activities"): notesandactivitiesTabControl;
      get(tabname: "administration"): administrationTabControl;
    }

    interface tab_recordwallTabControl extends Xrm.Controls.Tab {
      sections: tab_recordwallTabSections;
    }
    interface generalTabControl extends Xrm.Controls.Tab {
      sections: generalTabSections;
    }
    interface detailsTabControl extends Xrm.Controls.Tab {
      sections: detailsTabSections;
    }
    interface notesandactivitiesTabControl extends Xrm.Controls.Tab {
      sections: notesandactivitiesTabSections;
    }
    interface administrationTabControl extends Xrm.Controls.Tab {
      sections: administrationTabSections;
    }

    interface tab_recordwallTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "tab_recordwall_section_1"
      ): tab_recordwall_section_1SectionControl;
    }
    interface generalTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "name"): nameSectionControl;
      get(sectionname: "address"): addressSectionControl;
      get(sectionname: "description"): descriptionSectionControl;
    }
    interface detailsTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "lead information"): leadinformationSectionControl;
      get(sectionname: "company information"): companyinformationSectionControl;
    }
    interface notesandactivitiesTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "activities"): activitiesSectionControl;
      get(sectionname: "notes"): notesSectionControl;
    }
    interface administrationTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "internal information"
      ): internalinformationSectionControl;
      get(sectionname: "contact methods"): contactmethodsSectionControl;
      get(
        sectionname: "marketing information"
      ): marketinginformationSectionControl;
    }

    interface tab_recordwall_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_recordwall_section_1SectionControls;
    }
    interface nameSectionControl extends Xrm.Controls.Section {
      controls: nameSectionControls;
    }
    interface addressSectionControl extends Xrm.Controls.Section {
      controls: addressSectionControls;
    }
    interface descriptionSectionControl extends Xrm.Controls.Section {
      controls: descriptionSectionControls;
    }
    interface leadinformationSectionControl extends Xrm.Controls.Section {
      controls: leadinformationSectionControls;
    }
    interface companyinformationSectionControl extends Xrm.Controls.Section {
      controls: companyinformationSectionControls;
    }
    interface activitiesSectionControl extends Xrm.Controls.Section {
      controls: activitiesSectionControls;
    }
    interface notesSectionControl extends Xrm.Controls.Section {
      controls: notesSectionControls;
    }
    interface internalinformationSectionControl extends Xrm.Controls.Section {
      controls: internalinformationSectionControls;
    }
    interface contactmethodsSectionControl extends Xrm.Controls.Section {
      controls: contactmethodsSectionControls;
    }
    interface marketinginformationSectionControl extends Xrm.Controls.Section {
      controls: marketinginformationSectionControls;
    }

    interface tab_recordwall_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
    }
    interface nameSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "subject"): Xrm.Controls.StringControl;
      get(controlname: "salutation"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "telephone2"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "companyname"): Xrm.Controls.StringControl;
      get(controlname: "telephone3"): Xrm.Controls.StringControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "pager"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
    }
    interface addressSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_stateorprovince"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
      get(controlname: "address1_line3"): Xrm.Controls.StringControl;
      get(controlname: "address1_country"): Xrm.Controls.StringControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
    }
    interface descriptionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface leadinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "leadsourcecode"): Xrm.Controls.OptionSetControl;
      get(controlname: "leadqualitycode"): Xrm.Controls.OptionSetControl;
    }
    interface companyinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "sic"): Xrm.Controls.StringControl;
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
    }
    interface activitiesSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "leadactivitiesgrid"): Xrm.Controls.GridControl;
    }
    interface notesSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
    }
    interface internalinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "ownerid"): Xrm.Controls.LookupControl;
      get(controlname: "statuscode"): Xrm.Controls.OptionSetControl;
    }
    interface contactmethodsSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
    }
    interface marketinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "campaignid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
    }
  }
}
