function OnLoad(context: Xrm.Events.EventContext) {
  const formContext = context.getFormContext() as Xrm.Ext.Forms.contact.main.Contact.Form;

  const grid = formContext.getControl('subgrid_Entitlement');
  grid.refresh();

  formContext.getAttribute('mobilephone').setValue('07987654321');

  formContext.ui.tabs
    .get('SUMMARY_TAB')
    .sections.get('CUSTOMER_DETAILS_TAB')
    .controls.get('parentcustomerid')
    .setDisabled(true);
}

/*

const formContext = context.getFormContext() as Xrm.Ext.Forms.contact.main.Contact.Form;

  formContext.getAttribute('birthdate').setValue(new Date(1990, 6, 20));

  const grid = formContext.getControl('DocumentsSubGrid');
  grid.refresh();

  formContext.ui.tabs
    .get('DETAILS_TAB')
    .sections.get('PERSONAL INFORMATION')
    .controls.get('birthdate')
    .setDisabled(true);

*/
