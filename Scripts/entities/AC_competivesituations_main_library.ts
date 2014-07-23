/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />

function ac_competitorid_onchange() {
	if (Xrm.Page.getAttribute("ac_competitorid").getValue() != null) {
		Xrm.Page.getAttribute("ac_name").setValue(Xrm.Page.getAttribute("ac_competitorid").getValue()[0].name);
		Xrm.Page.getAttribute("ac_name").setSubmitMode("always");
	}
	else {
		Xrm.Page.getAttribute("ac_name").setValue('');
		Xrm.Page.getAttribute("ac_name").setSubmitMode("always");
	}
}
