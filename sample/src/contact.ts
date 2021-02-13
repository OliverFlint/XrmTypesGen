function OnLoad(context: Xrm.Events.EventContext) {
  const formContext = context.getFormContext() as Xrm.Ext.Forms.contact.main.Contact.Form;

  formContext.getAttribute('birthdate').setValue(new Date(1990, 6, 20));

  const grid = formContext.getControl('DocumentsSubGrid');
  grid.refresh();

  formContext.ui.tabs
    .get('DETAILS_TAB')
    .sections.get('PERSONAL INFORMATION')
    .controls.get('birthdate')
    .setDisabled(true);
}
