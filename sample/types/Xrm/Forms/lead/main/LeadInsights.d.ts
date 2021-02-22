// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.lead.main.LeadInsights {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(attributename: "subject"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fullname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "companyname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "address1_composite"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "description"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "industrycode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      getAttribute(
        attributename: "numberofemployees"
      ): Xrm.Attributes.NumberAttribute;
      getAttribute(attributename: "sic"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "campaignid"): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "donotsendmm"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "lastusedincampaign"
      ): Xrm.Attributes.DateAttribute;
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
        attributename: "donotpostalmail"
      ): Xrm.Attributes.BooleanAttribute;
      //#endregion
      //#region form context contols
      getControl(controlname: "subject"): Xrm.Controls.StringControl;
      getControl(controlname: "fullname"): Xrm.Controls.StringControl;
      getControl(controlname: "jobtitle"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(controlname: "companyname"): Xrm.Controls.StringControl;
      getControl(controlname: "websiteurl"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_composite"): Xrm.Controls.StringControl;
      getControl(
        controlname: "mapcontrol"
      ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
      getControl(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      getControl(
        controlname: "ActionCards"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
      getControl(controlname: "Stakeholders"): Xrm.Controls.GridControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "revenue"): Xrm.Controls.NumberControl;
      getControl(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      getControl(controlname: "sic"): Xrm.Controls.StringControl;
      getControl(
        controlname: "transactioncurrencyid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "campaignid"): Xrm.Controls.LookupControl;
      getControl(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "subject"): Xrm.Controls.StringControl;
      get(controlname: "fullname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "companyname"): Xrm.Controls.StringControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
      get(
        controlname: "mapcontrol"
      ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      get(
        controlname: "ActionCards"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
      get(controlname: "Stakeholders"): Xrm.Controls.GridControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      get(controlname: "sic"): Xrm.Controls.StringControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "campaignid"): Xrm.Controls.LookupControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "subject"): Xrm.Attributes.StringAttribute;
      get(attributename: "fullname"): Xrm.Attributes.StringAttribute;
      get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "companyname"): Xrm.Attributes.StringAttribute;
      get(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_composite"): Xrm.Attributes.StringAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "industrycode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      get(attributename: "numberofemployees"): Xrm.Attributes.NumberAttribute;
      get(attributename: "sic"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "campaignid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "followemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
    }

    interface Data extends Xrm.Data {
      attributes: Attributes;
    }

    interface Ui extends Xrm.Ui {
      tabs: Tabs;
      controls: Controls;
    }

    interface Tabs extends Xrm.Collection.ItemCollection<Xrm.Controls.Tab> {
      get(tabname: "Summary"): SummaryTabControl;
      get(tabname: "details_tab"): details_tabTabControl;
    }

    interface SummaryTabControl extends Xrm.Controls.Tab {
      sections: SummaryTabSections;
    }
    interface details_tabTabControl extends Xrm.Controls.Tab {
      sections: details_tabTabSections;
    }

    interface SummaryTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "Contact"): ContactSectionControl;
      get(sectionname: "company"): companySectionControl;
      get(sectionname: "MapSection"): MapSectionSectionControl;
      get(sectionname: "SOCIAL_PANE"): SOCIAL_PANESectionControl;
      get(sectionname: "Summary_section_6"): Summary_section_6SectionControl;
      get(sectionname: "RELATED_TAB"): RELATED_TABSectionControl;
    }
    interface details_tabTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "lead_information"): lead_informationSectionControl;
      get(
        sectionname: "marketing_information"
      ): marketing_informationSectionControl;
      get(sectionname: "contact_methods"): contact_methodsSectionControl;
    }

    interface ContactSectionControl extends Xrm.Controls.Section {
      controls: ContactSectionControls;
    }
    interface companySectionControl extends Xrm.Controls.Section {
      controls: companySectionControls;
    }
    interface MapSectionSectionControl extends Xrm.Controls.Section {
      controls: MapSectionSectionControls;
    }
    interface SOCIAL_PANESectionControl extends Xrm.Controls.Section {
      controls: SOCIAL_PANESectionControls;
    }
    interface Summary_section_6SectionControl extends Xrm.Controls.Section {
      controls: Summary_section_6SectionControls;
    }
    interface RELATED_TABSectionControl extends Xrm.Controls.Section {
      controls: RELATED_TABSectionControls;
    }
    interface lead_informationSectionControl extends Xrm.Controls.Section {
      controls: lead_informationSectionControls;
    }
    interface marketing_informationSectionControl extends Xrm.Controls.Section {
      controls: marketing_informationSectionControls;
    }
    interface contact_methodsSectionControl extends Xrm.Controls.Section {
      controls: contact_methodsSectionControls;
    }

    interface ContactSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "subject"): Xrm.Controls.StringControl;
      get(controlname: "fullname"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
    }
    interface companySectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "companyname"): Xrm.Controls.StringControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "address1_composite"): Xrm.Controls.StringControl;
    }
    interface MapSectionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "mapcontrol"
      ): Xrm.Controls.Control /*classid: 62b0df79-0464-470f-8af7-4483cfea0c7d*/;
    }
    interface SOCIAL_PANESectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
    }
    interface Summary_section_6SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "ActionCards"
      ): Xrm.Controls.Control /*classid: f9a8a302-114e-466a-b582-6771b2ae0d92*/;
    }
    interface RELATED_TABSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "Stakeholders"): Xrm.Controls.GridControl;
    }
    interface lead_informationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      get(controlname: "sic"): Xrm.Controls.StringControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
    }
    interface marketing_informationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "campaignid"): Xrm.Controls.LookupControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
    }
    interface contact_methodsSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
    }
  }
}
