/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />

function generateName() {
	if (Xrm.Page.getAttribute("ac_accountid").getValue() != null) {
		Xrm.Page.getAttribute("ac_name").setValue(Xrm.Page.getAttribute("ac_accountid").getValue()[0].name);
	}
	else {
		Xrm.Page.getAttribute("ac_name").setValue('');
	}

	Xrm.Page.getAttribute("ac_name").setSubmitMode("always");
}

function ac_accountid_onchange(){
	generateName();
}
