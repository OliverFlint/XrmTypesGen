// This file was generated with XrmTypesGen
// GitHub: https://github.com/OliverFlint/XrmTypesGen

declare namespace Xrm {
  namespace Ext.Forms.contact.main.Information {
    type Form = FormContext;
    interface FormContext extends Xrm.FormContext {
      //#region form context attributes
      getAttribute(attributename: "salutation"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "middlename"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "mobilephone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "fax"): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "emailaddress1"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "parentcustomerid"
      ): Xrm.Attributes.LookupAttribute;
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
        attributename: "address1_freighttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "address1_shippingmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "description"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "department"): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "accountrolecode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "managername"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "assistantname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "managerphone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "assistantphone"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(
        attributename: "gendercode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
      getAttribute(
        attributename: "familystatuscode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
      getAttribute(
        attributename: "spousesname"
      ): Xrm.Attributes.StringAttribute;
      getAttribute(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
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
        attributename: "creditonhold"
      ): Xrm.Attributes.BooleanAttribute;
      getAttribute(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
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
        attributename: "defaultpricelevelid"
      ): Xrm.Attributes.LookupAttribute;
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
        attributename: "preferredequipmentid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "preferredappointmenttimecode"
      ): Xrm.Attributes.OptionSetAttribute;
      getAttribute(
        attributename: "preferredsystemuserid"
      ): Xrm.Attributes.LookupAttribute;
      getAttribute(
        attributename: "preferredserviceid"
      ): Xrm.Attributes.LookupAttribute;
      //#endregion
      //#region form context contols
      getControl(
        controlname: "WebResource_RecordWall"
      ): Xrm.Controls.IframeControl;
      getControl(controlname: "salutation"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone1"): Xrm.Controls.StringControl;
      getControl(controlname: "firstname"): Xrm.Controls.StringControl;
      getControl(controlname: "telephone2"): Xrm.Controls.StringControl;
      getControl(controlname: "middlename"): Xrm.Controls.StringControl;
      getControl(controlname: "mobilephone"): Xrm.Controls.StringControl;
      getControl(controlname: "lastname"): Xrm.Controls.StringControl;
      getControl(controlname: "fax"): Xrm.Controls.StringControl;
      getControl(controlname: "jobtitle"): Xrm.Controls.StringControl;
      getControl(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      getControl(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
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
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "description"): Xrm.Controls.StringControl;
      getControl(controlname: "department"): Xrm.Controls.StringControl;
      getControl(controlname: "accountrolecode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "managername"): Xrm.Controls.StringControl;
      getControl(controlname: "assistantname"): Xrm.Controls.StringControl;
      getControl(controlname: "managerphone"): Xrm.Controls.StringControl;
      getControl(controlname: "assistantphone"): Xrm.Controls.StringControl;
      getControl(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "birthdate"): Xrm.Controls.DateControl;
      getControl(
        controlname: "familystatuscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "anniversary"): Xrm.Controls.DateControl;
      getControl(controlname: "spousesname"): Xrm.Controls.StringControl;
      getControl(
        controlname: "contactactivitiesgrid"
      ): Xrm.Controls.GridControl;
      getControl(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      getControl(controlname: "ownerid"): Xrm.Controls.LookupControl;
      getControl(
        controlname: "transactioncurrencyid"
      ): Xrm.Controls.LookupControl;
      getControl(
        controlname: "paymenttermscode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      getControl(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      getControl(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "defaultpricelevelid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      getControl(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      getControl(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredappointmentdaycode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredequipmentid"
      ): Xrm.Controls.LookupControl;
      getControl(
        controlname: "preferredappointmenttimecode"
      ): Xrm.Controls.OptionSetControl;
      getControl(
        controlname: "preferredsystemuserid"
      ): Xrm.Controls.LookupControl;
      getControl(controlname: "preferredserviceid"): Xrm.Controls.LookupControl;
      //#endregion

      data: Data;
      ui: Ui;
    }

    interface Controls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "WebResource_RecordWall"): Xrm.Controls.IframeControl;
      get(controlname: "salutation"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "telephone2"): Xrm.Controls.StringControl;
      get(controlname: "middlename"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
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
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "description"): Xrm.Controls.StringControl;
      get(controlname: "department"): Xrm.Controls.StringControl;
      get(controlname: "accountrolecode"): Xrm.Controls.OptionSetControl;
      get(controlname: "managername"): Xrm.Controls.StringControl;
      get(controlname: "assistantname"): Xrm.Controls.StringControl;
      get(controlname: "managerphone"): Xrm.Controls.StringControl;
      get(controlname: "assistantphone"): Xrm.Controls.StringControl;
      get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlname: "birthdate"): Xrm.Controls.DateControl;
      get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "anniversary"): Xrm.Controls.DateControl;
      get(controlname: "spousesname"): Xrm.Controls.StringControl;
      get(controlname: "contactactivitiesgrid"): Xrm.Controls.GridControl;
      get(
        controlname: "notescontrol"
      ): Xrm.Controls.Control /*classid: 06375649-c143-495e-a496-c962e5b4488e*/;
      get(controlname: "ownerid"): Xrm.Controls.LookupControl;
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
      get(controlname: "defaultpricelevelid"): Xrm.Controls.LookupControl;
      get(controlname: "originatingleadid"): Xrm.Controls.LookupControl;
      get(controlname: "lastusedincampaign"): Xrm.Controls.DateControl;
      get(controlname: "donotsendmm"): Xrm.Controls.OptionSetControl;
      get(
        controlname: "preferredappointmentdaycode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "preferredequipmentid"): Xrm.Controls.LookupControl;
      get(
        controlname: "preferredappointmenttimecode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "preferredsystemuserid"): Xrm.Controls.LookupControl;
      get(controlname: "preferredserviceid"): Xrm.Controls.LookupControl;
    }

    interface Attributes
      extends Xrm.Collection.ItemCollection<Xrm.Attributes.Attribute> {
      get(attributename: "salutation"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone1"): Xrm.Attributes.StringAttribute;
      get(attributename: "firstname"): Xrm.Attributes.StringAttribute;
      get(attributename: "telephone2"): Xrm.Attributes.StringAttribute;
      get(attributename: "middlename"): Xrm.Attributes.StringAttribute;
      get(attributename: "mobilephone"): Xrm.Attributes.StringAttribute;
      get(attributename: "lastname"): Xrm.Attributes.StringAttribute;
      get(attributename: "fax"): Xrm.Attributes.StringAttribute;
      get(attributename: "jobtitle"): Xrm.Attributes.StringAttribute;
      get(attributename: "emailaddress1"): Xrm.Attributes.StringAttribute;
      get(attributename: "parentcustomerid"): Xrm.Attributes.LookupAttribute;
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
        attributename: "address1_freighttermscode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "address1_shippingmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "description"): Xrm.Attributes.StringAttribute;
      get(attributename: "department"): Xrm.Attributes.StringAttribute;
      get(attributename: "accountrolecode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "managername"): Xrm.Attributes.StringAttribute;
      get(attributename: "assistantname"): Xrm.Attributes.StringAttribute;
      get(attributename: "managerphone"): Xrm.Attributes.StringAttribute;
      get(attributename: "assistantphone"): Xrm.Attributes.StringAttribute;
      get(attributename: "gendercode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "birthdate"): Xrm.Attributes.DateAttribute;
      get(attributename: "familystatuscode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "anniversary"): Xrm.Attributes.DateAttribute;
      get(attributename: "spousesname"): Xrm.Attributes.StringAttribute;
      get(attributename: "ownerid"): Xrm.Attributes.LookupAttribute;
      get(
        attributename: "transactioncurrencyid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "paymenttermscode"): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "creditlimit"): Xrm.Attributes.NumberAttribute;
      get(attributename: "creditonhold"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "preferredcontactmethodcode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(attributename: "donotbulkemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotemail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotfax"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotphone"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "donotpostalmail"): Xrm.Attributes.BooleanAttribute;
      get(attributename: "defaultpricelevelid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "originatingleadid"): Xrm.Attributes.LookupAttribute;
      get(attributename: "lastusedincampaign"): Xrm.Attributes.DateAttribute;
      get(attributename: "donotsendmm"): Xrm.Attributes.BooleanAttribute;
      get(
        attributename: "preferredappointmentdaycode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "preferredequipmentid"
      ): Xrm.Attributes.LookupAttribute;
      get(
        attributename: "preferredappointmenttimecode"
      ): Xrm.Attributes.OptionSetAttribute;
      get(
        attributename: "preferredsystemuserid"
      ): Xrm.Attributes.LookupAttribute;
      get(attributename: "preferredserviceid"): Xrm.Attributes.LookupAttribute;
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
      get(tabname: "conflictstab"): conflictstabTabControl;
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
    interface conflictstabTabControl extends Xrm.Controls.Tab {
      sections: conflictstabTabSections;
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
      get(
        sectionname: "personal information"
      ): personalinformationSectionControl;
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
      get(sectionname: "billing information"): billinginformationSectionControl;
      get(sectionname: "contact methods"): contactmethodsSectionControl;
    }
    interface conflictstabTabSections
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Section> {
      get(sectionname: "conflictssection"): conflictssectionSectionControl;
      get(
        sectionname: "marketing information"
      ): marketinginformationSectionControl;
      get(sectionname: "service preferences"): servicepreferencesSectionControl;
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
    interface personalinformationSectionControl extends Xrm.Controls.Section {
      controls: personalinformationSectionControls;
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
    interface billinginformationSectionControl extends Xrm.Controls.Section {
      controls: billinginformationSectionControls;
    }
    interface contactmethodsSectionControl extends Xrm.Controls.Section {
      controls: contactmethodsSectionControls;
    }
    interface conflictssectionSectionControl extends Xrm.Controls.Section {
      controls: conflictssectionSectionControls;
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
    interface nameSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "salutation"): Xrm.Controls.StringControl;
      get(controlname: "telephone1"): Xrm.Controls.StringControl;
      get(controlname: "firstname"): Xrm.Controls.StringControl;
      get(controlname: "telephone2"): Xrm.Controls.StringControl;
      get(controlname: "middlename"): Xrm.Controls.StringControl;
      get(controlname: "mobilephone"): Xrm.Controls.StringControl;
      get(controlname: "lastname"): Xrm.Controls.StringControl;
      get(controlname: "fax"): Xrm.Controls.StringControl;
      get(controlname: "jobtitle"): Xrm.Controls.StringControl;
      get(controlname: "emailaddress1"): Xrm.Controls.StringControl;
      get(controlname: "parentcustomerid"): Xrm.Controls.LookupControl;
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
        controlname: "address1_freighttermscode"
      ): Xrm.Controls.OptionSetControl;
      get(
        controlname: "address1_shippingmethodcode"
      ): Xrm.Controls.OptionSetControl;
    }
    interface descriptionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "description"): Xrm.Controls.StringControl;
    }
    interface professionalinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "department"): Xrm.Controls.StringControl;
      get(controlname: "accountrolecode"): Xrm.Controls.OptionSetControl;
      get(controlname: "managername"): Xrm.Controls.StringControl;
      get(controlname: "assistantname"): Xrm.Controls.StringControl;
      get(controlname: "managerphone"): Xrm.Controls.StringControl;
      get(controlname: "assistantphone"): Xrm.Controls.StringControl;
    }
    interface personalinformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "gendercode"): Xrm.Controls.OptionSetControl;
      get(controlname: "birthdate"): Xrm.Controls.DateControl;
      get(controlname: "familystatuscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "anniversary"): Xrm.Controls.DateControl;
      get(controlname: "spousesname"): Xrm.Controls.StringControl;
    }
    interface activitiesSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "contactactivitiesgrid"): Xrm.Controls.GridControl;
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
    interface billinginformationSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "transactioncurrencyid"): Xrm.Controls.LookupControl;
      get(controlname: "paymenttermscode"): Xrm.Controls.OptionSetControl;
      get(controlname: "creditlimit"): Xrm.Controls.NumberControl;
      get(controlname: "creditonhold"): Xrm.Controls.OptionSetControl;
    }
    interface contactmethodsSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(
        controlname: "preferredcontactmethodcode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "donotbulkemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotemail"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotfax"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotphone"): Xrm.Controls.OptionSetControl;
      get(controlname: "donotpostalmail"): Xrm.Controls.OptionSetControl;
    }
    interface conflictssectionSectionControls
      extends Xrm.Collection.ItemCollection<Xrm.Controls.Control> {
      get(controlname: "defaultpricelevelid"): Xrm.Controls.LookupControl;
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
      get(controlname: "preferredequipmentid"): Xrm.Controls.LookupControl;
      get(
        controlname: "preferredappointmenttimecode"
      ): Xrm.Controls.OptionSetControl;
      get(controlname: "preferredsystemuserid"): Xrm.Controls.LookupControl;
      get(controlname: "preferredserviceid"): Xrm.Controls.LookupControl;
    }
  }
}
