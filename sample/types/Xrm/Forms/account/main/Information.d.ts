// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.account.main.Information {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(attributename: "name"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "primarycontactid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "accountnumber"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fax"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "parentaccountid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
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
      getAttribute(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      getAttribute(
        attributename: "ownershipcode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "numberofemployees"
      ): Xrm.Attributes.NumberAttribute;
      getAttribute(
        attributename: "tickersymbol"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "sic"): Xrm.Attributes.StringAttribute;
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
      getAttribute(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
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
      //#endregion
      //#region form context contols
      getControl(
        controlname: "WebResource_RecordWall"
      ): Xrm.Controls.IframeControl;
      getControl(controlname: "name"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      getControl(controlname: "telephone2"): Xrm.Controls.StringControl;
      getControl(controlname: "accountnumber"): Xrm.Controls.StringControl;
      getControl(controlname: "fax"): Xrm.Controls.StringControl;
      getControl(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
      getControl(controlname: "websiteurl"): Xrm.Controls.StringControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_addresstypecode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "address1_city"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_name"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_stateorprovince"
      ): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line1"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_postalcode"
      ): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line2"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_country"): Xrm.Controls.StringControl;
      getControl(controlname: "address1_line3"): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_telephone1"
      ): Xrm.Controls.StringControl;
      getControl(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "revenue"): Xrm.Controls.NumberControl;
      getControl(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      getControl(controlname: "tickersymbol"): Xrm.Controls.StringControl;
      getControl(controlname: "sic"): Xrm.Controls.StringControl;
      getControl(controlname: "territoryid"): Xrm.Controls.LookupControl;
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
      getControl(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      getControl(
        controlname: "defaultpricelevelid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "accountContactsGrid"): Xrm.Controls.GridControl;
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
      getControl(controlname: "followemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      getControl(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      getControl(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredappointmentdaycode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredappointmenttimecode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredsystemuserid"
      ): Xrm.Controls.LookupControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
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
      get(controlname: "address1_stateorprovince"): Xrm.Controls.StringControl;
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_country"): Xrm.Controls.StringControl;
      get(controlname: "address1_line3"): Xrm.Controls.StringControl;
      get(controlname: "address1_telephone1"): Xrm.Controls.StringControl;
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
      get(controlname: "accountcategorycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "customertypecode"): Xrm.Controls.OptionSetControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "defaultpricelevelid"): Xrm.Controls.LookupControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(controlname: "accountContactsGrid"): Xrm.Controls.GridControl;
      get(controlname: "accountactivitiesgrid"): Xrm.Controls.GridControl;
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
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredappointmentdaycode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredappointmenttimecode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "preferredsystemuserid"): Xrm.Controls.LookupControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "name"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "primarycontactid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
      get(attributename: "accountnumber"): Xrm.Attributes.StringAttribute;
      get(attributename: "fax"): Xrm.Attributes.StringAttribute;
      get(attributename: "parentaccountid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "websiteurl"): Xrm.Attributes.StringAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "address1_addresstypecode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "address1_city"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_name"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "address1_stateorprovince"
      ): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line1"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_postalcode"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line2"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_country"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_line3"): Xrm.Attributes.StringAttribute;
      get(attributename: "address1_telephone1"): Xrm.Attributes.StringAttribute;
      get(
        attributename: "address1_shippingmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "address1_freighttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "industrycode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "revenue"): Xrm.Attributes.NumberAttribute;
      get(attributename: "ownershipcode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "numberofemployees"): Xrm.Attributes.NumberAttribute;
      get(attributename: "tickersymbol"): Xrm.Attributes.StringAttribute;
      get(attributename: "sic"): Xrm.Attributes.StringAttribute;
      get(attributename: "territoryid"): Xrm.Attributes.LookupAttribute;
      get(
        attributename: "accountcategorycode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "customertypecode"): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
      get(attributename: "defaultpricelevelid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "creditonhold"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "followemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "originatingleadid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(attributename: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "preferredappointmentdaycode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "preferredappointmenttimecode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "preferredsystemuserid"
      ): Xrm.Attributes.LookupAttribute;
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
      get(tabname: "contacts"): contactsTabControl;
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
    interface contactsTabControl extends Xrm.Controls.Tab {
      sections: contactsTabSections;
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
      get(sectionname: "account information"): accountinformationSectionControl;
      get(sectionname: "address"): addressSectionControl;
      get(
        sectionname: "shipping information"
      ): shippinginformationSectionControl;
      get(sectionname: "description"): descriptionSectionControl;
    }
    interface detailsTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(
        sectionname: "professional information"
      ): professionalinformationSectionControl;
      get(sectionname: "description"): descriptionSectionControl;
      get(sectionname: "billing information"): billinginformationSectionControl;
    }
    interface contactsTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "contacts"): contactsSectionControl;
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
      get(sectionname: "service preferences"): servicepreferencesSectionControl;
    }

    interface tab_recordwall_section_1SectionControl
      extends Xrm.Controls.Section {
      controls: tab_recordwall_section_1SectionControls;
    }
    interface accountinformationSectionControl extends Xrm.Controls.Section {
      controls: accountinformationSectionControls;
    }
    interface addressSectionControl extends Xrm.Controls.Section {
      controls: addressSectionControls;
    }
    interface shippinginformationSectionControl extends Xrm.Controls.Section {
      controls: shippinginformationSectionControls;
    }
    interface descriptionSectionControl extends Xrm.Controls.Section {
      controls: descriptionSectionControls;
    }
    interface professionalinformationSectionControl
      extends Xrm.Controls.Section {
      controls: professionalinformationSectionControls;
    }
    interface descriptionSectionControl extends Xrm.Controls.Section {
      controls: descriptionSectionControls;
    }
    interface billinginformationSectionControl extends Xrm.Controls.Section {
      controls: billinginformationSectionControls;
    }
    interface contactsSectionControl extends Xrm.Controls.Section {
      controls: contactsSectionControls;
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
    interface servicepreferencesSectionControl extends Xrm.Controls.Section {
      controls: servicepreferencesSectionControls;
    }

    interface tab_recordwall_section_1SectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
    }
    interface accountinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "name"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "primarycontactid"): Xrm.Controls.LookupControl;
      get(controlname: "telephone2"): Xrm.Controls.StringControl;
      get(controlname: "accountnumber"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "parentaccountid"): Xrm.Controls.LookupControl;
      get(controlname: "websiteurl"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
    }
    interface addressSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "address1_addresstypecode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "address1_city"): Xrm.Controls.StringControl;
      get(controlname: "address1_name"): Xrm.Controls.StringControl;
      get(controlname: "address1_stateorprovince"): Xrm.Controls.StringControl;
      get(controlname: "address1_line1"): Xrm.Controls.StringControl;
      get(controlname: "address1_postalcode"): Xrm.Controls.StringControl;
      get(controlname: "address1_line2"): Xrm.Controls.StringControl;
      get(controlname: "address1_country"): Xrm.Controls.StringControl;
      get(controlname: "address1_line3"): Xrm.Controls.StringControl;
      get(controlname: "address1_telephone1"): Xrm.Controls.StringControl;
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
    interface descriptionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface professionalinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "industrycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "revenue"): Xrm.Controls.NumberControl;
      get(controlname: "ownershipcode"): Xrm.Controls.OptionSetControl;
      get(controlname: "numberofemployees"): Xrm.Controls.NumberControl;
      get(controlname: "tickersymbol"): Xrm.Controls.StringControl;
      get(controlname: "sic"): Xrm.Controls.StringControl;
    }
    interface descriptionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "territoryid"): Xrm.Controls.LookupControl;
      get(controlname: "accountcategorycode"): Xrm.Controls.OptionSetControl;
      get(controlname: "customertypecode"): Xrm.Controls.OptionSetControl;
    }
    interface billinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "defaultpricelevelid"): Xrm.Controls.LookupControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
    }
    interface contactsSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "accountContactsGrid"): Xrm.Controls.GridControl;
    }
    interface activitiesSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "accountactivitiesgrid"): Xrm.Controls.GridControl;
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
      get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
    }
    interface servicepreferencesSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "preferredappointmentdaycode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredappointmenttimecode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "preferredsystemuserid"): Xrm.Controls.LookupControl;
    }
  }
}
