/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
/// <reference path="../typescript/Xrm.d.ts" />
function SubmitCallReport() {
    var intSubmitted = 4;

    if (Xrm.Page.getAttribute("statuscode").getValue() != null) {
        Xrm.Page.getAttribute("statuscode").setValue(intSubmitted);
        Xrm.Page.getAttribute("statuscode").setSubmitMode("always");
        Xrm.Page.getAttribute("ac_submitdate").setValue(new Date());
        Xrm.Page.getAttribute("ac_submitdate").setSubmitMode("always");
        Xrm.Page.data.entity.save();
    }
}
