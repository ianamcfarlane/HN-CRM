/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />

function generateName() {
	if (Xrm.Page.getAttribute("ac_teammemberid").getValue() != null) {
		Xrm.Page.getAttribute("ac_name").setValue(Xrm.Page.getAttribute("ac_teammemberid").getValue()[0].name);
	}
}
function ac_teammemberid_onchange()
{
	generateName();
}
