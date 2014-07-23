/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
function Form_onload() {
    //Populates the name field
    function setNameField() {
        if (Xrm.Page.getAttribute("ac_materialnumberid").getValue() != null && Xrm.Page.getAttribute("ac_name").getValue() != null) {
            var strName = Xrm.Page.getAttribute("ac_materialnumberid").getValue()[0].name;

            Xrm.Page.getAttribute("ac_name").setValue(strName);
            Xrm.Page.getAttribute("ac_name").setSubmitMode("always");
        }
    }
}
