/// <reference path="../typescript/Xrm2011.1_0.d.ts" />
/// <reference path="../typescript/XrmServiceToolkit.d.ts" />
Date.prototype.getDOY = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
};
function calculateProductValues() {
    updateEstFullYearAnnualRevenue1();
    updateEstFullYearAnnualRevenue2();
    updateEstFullYearAnnualRevenue3();
    updateEstFullYearAnnualRevenue4();

    updateFullYearAnnualRevenue1();
    updateFullYearAnnualRevenue2();
    updateFullYearAnnualRevenue3();
    updateFullYearAnnualRevenue4();

    updateFullYearAnnualVolume1();
    updateFullYearAnnualVolume2();
    updateFullYearAnnualVolume3();
    updateFullYearAnnualVolume4();

    updateLaunchYearAnnualVolume1();
    updateLaunchYearAnnualVolume2();
    updateLaunchYearAnnualVolume3();
    updateLaunchYearAnnualVolume4();

    updateLaunchYearAnnualRevenue1();
    updateLaunchYearAnnualRevenue2();
    updateLaunchYearAnnualRevenue3();
    updateLaunchYearAnnualRevenue4();

    updateLaunchYearAnnualVolume();
    updateLaunchYearAnnualRevenue();
    updateFullYearAnnualRevenue();
    updateFullYearAnnualVolume();
}

// Estimated Full Year Revenue updates
function updateEstFullYearAnnualRevenue1() {
    var EstPrice1 = Xrm.Page.getAttribute("ac_estimatedprice1");
    var EstFullYearVolume1 = Xrm.Page.getAttribute("ac_estfullyearvolumekg1");
    var EstFullYearRevenue1 = Xrm.Page.getAttribute("ac_estimatedrevenue1");

    if (EstPrice1.getValue() != null && EstFullYearVolume1.getValue() != null) {
        EstFullYearRevenue1.setValue(EstPrice1.getValue() * EstFullYearVolume1.getValue());
        EstFullYearRevenue1.setSubmitMode("always");
    }
}
function updateEstFullYearAnnualRevenue2() {
    var EstPrice2 = Xrm.Page.getAttribute("ac_estimatedprice2");
    var EstFullYearVolume2 = Xrm.Page.getAttribute("ac_estfullyearvolumekg2");
    var EstFullYearRevenue2 = Xrm.Page.getAttribute("ac_estimatedrevenue2");

    if (EstPrice2.getValue() != null && EstFullYearVolume2.getValue() != null) {
        EstFullYearRevenue2.setValue(EstPrice2.getValue() * EstFullYearVolume2.getValue());
        EstFullYearRevenue2.setSubmitMode("always");
    }
}
function updateEstFullYearAnnualRevenue3() {
    var EstPrice3 = Xrm.Page.getAttribute("ac_estimatedprice3");
    var EstFullYearVolume3 = Xrm.Page.getAttribute("ac_estfullyearvolumekg3");
    var EstFullYearRevenue3 = Xrm.Page.getAttribute("ac_estimatedrevenue3");

    if (EstPrice3.getValue() != null && EstFullYearVolume3.getValue() != null) {
        EstFullYearRevenue3.setValue(EstPrice3.getValue() * EstFullYearVolume3.getValue());
        EstFullYearRevenue3.setSubmitMode("always");
    }
}
function updateEstFullYearAnnualRevenue4() {
    var EstPrice4 = Xrm.Page.getAttribute("ac_estimatedprice4");
    var EstFullYearVolume4 = Xrm.Page.getAttribute("ac_estfullyearvolumekg4");
    var EstFullYearRevenue4 = Xrm.Page.getAttribute("ac_estimatedrevenue4");

    if (EstPrice4.getValue() != null && EstFullYearVolume4.getValue() != null) {
        EstFullYearRevenue4.setValue(EstPrice4.getValue() * EstFullYearVolume4.getValue());
        EstFullYearRevenue4.setSubmitMode("always");
    }
}

// Full Year Annual Revenue updates
function updateFullYearAnnualRevenue1() {
    var EstFullYearRevenue1 = Xrm.Page.getAttribute("ac_estimatedrevenue1");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualRevenue1 = Xrm.Page.getAttribute("ac_fyarevenue1");

    if (EstFullYearRevenue1.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualRevenue1.setValue(EstFullYearRevenue1.getValue() * (Probability.getValue() / 100));
        FullYearAnnualRevenue1.setSubmitMode("always");
    }
}
function updateFullYearAnnualRevenue2() {
    var EstFullYearRevenue2 = Xrm.Page.getAttribute("ac_estimatedrevenue2");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualRevenue2 = Xrm.Page.getAttribute("ac_fyarevenue2");

    if (EstFullYearRevenue2.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualRevenue2.setValue(EstFullYearRevenue2.getValue() * (Probability.getValue() / 100));
        FullYearAnnualRevenue2.setSubmitMode("always");
    }
}
function updateFullYearAnnualRevenue3() {
    var EstFullYearRevenue3 = Xrm.Page.getAttribute("ac_estimatedrevenue3");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualRevenue3 = Xrm.Page.getAttribute("ac_fyarevenue3");

    if (EstFullYearRevenue3.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualRevenue3.setValue(EstFullYearRevenue3.getValue() * (Probability.getValue() / 100));
        FullYearAnnualRevenue3.setSubmitMode("always");
    }
}
function updateFullYearAnnualRevenue4() {
    var EstFullYearRevenue4 = Xrm.Page.getAttribute("ac_estimatedrevenue4");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualRevenue4 = Xrm.Page.getAttribute("ac_fyarevenue4");

    if (EstFullYearRevenue4.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualRevenue4.setValue(EstFullYearRevenue4.getValue() * (Probability.getValue() / 100));
        FullYearAnnualRevenue4.setSubmitMode("always");
    }
}

// Full Year Annual Volume updates
function updateFullYearAnnualVolume1() {
    var EstFullYearVolume1 = Xrm.Page.getAttribute("ac_estfullyearvolumekg1");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualVolume1 = Xrm.Page.getAttribute("ac_maturityannualvolume1kg");

    if (EstFullYearVolume1.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualVolume1.setValue(EstFullYearVolume1.getValue() * (Probability.getValue() / 100));
        FullYearAnnualVolume1.setSubmitMode("always");
    }
}
function updateFullYearAnnualVolume2() {
    var EstFullYearVolume2 = Xrm.Page.getAttribute("ac_estfullyearvolumekg2");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualVolume2 = Xrm.Page.getAttribute("ac_maturityannualvolume2kg");

    if (EstFullYearVolume2.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualVolume2.setValue(EstFullYearVolume2.getValue() * (Probability.getValue() / 100));
        FullYearAnnualVolume2.setSubmitMode("always");
    }
}
function updateFullYearAnnualVolume3() {
    var EstFullYearVolume3 = Xrm.Page.getAttribute("ac_estfullyearvolumekg3");

    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualVolume3 = Xrm.Page.getAttribute("ac_maturityannualvolume3kg");

    if (EstFullYearVolume3.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualVolume3.setValue(EstFullYearVolume3.getValue() * (Probability.getValue() / 100));
        FullYearAnnualVolume3.setSubmitMode("always");
    }
}
function updateFullYearAnnualVolume4() {
    var EstFullYearVolume4 = Xrm.Page.getAttribute("ac_estfullyearvolumekg4");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var FullYearAnnualVolume4 = Xrm.Page.getAttribute("ac_materialannualvolume4kg");

    if (EstFullYearVolume4.getValue() != null && Probability.getValue() != null) {
        FullYearAnnualVolume4.setValue(EstFullYearVolume4.getValue() * (Probability.getValue() / 100));
        FullYearAnnualVolume4.setSubmitMode("always");
    }
}

// Launch Year Annual Volume updates
function updateLaunchYearAnnualVolume1() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearVolume1 = Xrm.Page.getAttribute("ac_estfullyearvolumekg1");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualVolume1 = Xrm.Page.getAttribute("ac_launchyearannualvolume1kg");

    if (EstDay != null && EstFullYearVolume1.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualVolume1.setValue(((EstFullYearVolume1.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualVolume1.setSubmitMode("always");
    }
}
function updateLaunchYearAnnualVolume2() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearVolume2 = Xrm.Page.getAttribute("ac_estfullyearvolumekg2");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualVolume2 = Xrm.Page.getAttribute("ac_launchyearannualvolume2kg");

    if (EstDay != null && EstFullYearVolume2.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualVolume2.setValue(((EstFullYearVolume2.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualVolume2.setSubmitMode("always");
    }
}
function updateLaunchYearAnnualVolume3() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearVolume3 = Xrm.Page.getAttribute("ac_estfullyearvolumekg3");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualVolume3 = Xrm.Page.getAttribute("ac_launchyearannualvolume3kg");

    if (EstDay != null && EstFullYearVolume3.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualVolume3.setValue(((EstFullYearVolume3.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualVolume3.setSubmitMode("always");
    }
}
function updateLaunchYearAnnualVolume4() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearVolume4 = Xrm.Page.getAttribute("ac_estfullyearvolumekg4");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualVolume4 = Xrm.Page.getAttribute("ac_launchyearannualvolume4");

    if (EstDay != null && EstFullYearVolume4.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualVolume4.setValue(((EstFullYearVolume4.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualVolume4.setSubmitMode("always");
    }
}

// Launch Year Annual Revenue updates
function updateLaunchYearAnnualRevenue1() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearRevenue1 = Xrm.Page.getAttribute("ac_estimatedrevenue1");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualRevenue1 = Xrm.Page.getAttribute("ac_launchyearannualrevenue1");

    if (EstDay != null && EstFullYearRevenue1.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualRevenue1.setValue(((EstFullYearRevenue1.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualRevenue1.setSubmitMode("always");
    }
}
function updateLaunchYearAnnualRevenue2() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearRevenue2 = Xrm.Page.getAttribute("ac_estimatedrevenue2");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualRevenue2 = Xrm.Page.getAttribute("ac_launchyearannualrevenue2");

    if (EstDay != null && EstFullYearRevenue2.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualRevenue2.setValue(((EstFullYearRevenue2.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualRevenue2.setSubmitMode("always");
    }
}
function updateLaunchYearAnnualRevenue3() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearRevenue3 = Xrm.Page.getAttribute("ac_estimatedrevenue3");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualRevenue3 = Xrm.Page.getAttribute("ac_launchyearannualrevenue3");

    if (EstDay != null && EstFullYearRevenue3.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualRevenue3.setValue(((EstFullYearRevenue3.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualRevenue3.setSubmitMode("always");
    }
}
function updateLaunchYearAnnualRevenue4() {
    var DayValue = Xrm.Page.getAttribute("estimatedclosedate").getValue();
    var day = DayValue.getDOY();
    var EstDay = day + 1;
    var EstFullYearRevenue4 = Xrm.Page.getAttribute("ac_estimatedrevenue4");
    var Probability = Xrm.Page.getAttribute("closeprobability");
    var LaunchYearAnnualRevenue4 = Xrm.Page.getAttribute("ac_launchyearannualrevenue4");

    if (EstDay != null && EstFullYearRevenue4.getValue() != null && Probability.getValue() != null) {
        LaunchYearAnnualRevenue4.setValue(((EstFullYearRevenue4.getValue() * (Probability.getValue() / 100)) / 365) * (365 - EstDay));
        LaunchYearAnnualRevenue4.setSubmitMode("always");
    }
}

function updateLaunchYearAnnualVolume() {
    var LaunchYearAnnualVolume = Xrm.Page.getAttribute("ac_launchyearannualvolumekg");
    var LaunchYearAnnualVolume1 = Xrm.Page.getAttribute("ac_launchyearannualvolume1kg");
    var LaunchYearAnnualVolume2 = Xrm.Page.getAttribute("ac_launchyearannualvolume2kg");
    var LaunchYearAnnualVolume3 = Xrm.Page.getAttribute("ac_launchyearannualvolume3kg");
    var LaunchYearAnnualVolume4 = Xrm.Page.getAttribute("ac_launchyearannualvolume4");

    LaunchYearAnnualVolume.setValue(LaunchYearAnnualVolume1.getValue() + LaunchYearAnnualVolume2.getValue() + LaunchYearAnnualVolume3.getValue() + LaunchYearAnnualVolume4.getValue());
    LaunchYearAnnualVolume.setSubmitMode("always");
}
function updateLaunchYearAnnualRevenue() {
    var LaunchYearAnnualRevenue = Xrm.Page.getAttribute("ac_launchyearannualrevenue");
    var LaunchYearAnnualRevenue1 = Xrm.Page.getAttribute("ac_launchyearannualrevenue1");
    var LaunchYearAnnualRevenue2 = Xrm.Page.getAttribute("ac_launchyearannualrevenue2");
    var LaunchYearAnnualRevenue3 = Xrm.Page.getAttribute("ac_launchyearannualrevenue3");
    var LaunchYearAnnualRevenue4 = Xrm.Page.getAttribute("ac_launchyearannualrevenue4");

    LaunchYearAnnualRevenue.setValue(LaunchYearAnnualRevenue1.getValue() + LaunchYearAnnualRevenue2.getValue() + LaunchYearAnnualRevenue3.getValue() + LaunchYearAnnualRevenue4.getValue());
    LaunchYearAnnualRevenue.setSubmitMode("always");
}
function updateFullYearAnnualVolume() {
    var FullYearAnnualVolume = Xrm.Page.getAttribute("ac_maturityannualvolumekg");
    var FullYearAnnualVolume1 = Xrm.Page.getAttribute("ac_maturityannualvolume1kg");
    var FullYearAnnualVolume2 = Xrm.Page.getAttribute("ac_maturityannualvolume2kg");
    var FullYearAnnualVolume3 = Xrm.Page.getAttribute("ac_maturityannualvolume3kg");
    var FullYearAnnualVolume4 = Xrm.Page.getAttribute("ac_materialannualvolume4kg");

    FullYearAnnualVolume.setValue(FullYearAnnualVolume1.getValue() + FullYearAnnualVolume2.getValue() + FullYearAnnualVolume3.getValue() + FullYearAnnualVolume4.getValue());
    FullYearAnnualVolume.setSubmitMode("always");
}
function updateFullYearAnnualRevenue() {
    var FullYearAnnualRevenue = Xrm.Page.getAttribute("ac_fullyearannualrevenue");
    var FullYearAnnualRevenue1 = Xrm.Page.getAttribute("ac_fyarevenue1");
    var FullYearAnnualRevenue2 = Xrm.Page.getAttribute("ac_fyarevenue2");
    var FullYearAnnualRevenue3 = Xrm.Page.getAttribute("ac_fyarevenue3");
    var FullYearAnnualRevenue4 = Xrm.Page.getAttribute("ac_fyarevenue4");

    FullYearAnnualRevenue.setValue(FullYearAnnualRevenue1.getValue() + FullYearAnnualRevenue2.getValue() + FullYearAnnualRevenue3.getValue() + FullYearAnnualRevenue4.getValue());
    FullYearAnnualRevenue.setSubmitMode("always");
}

// Update the user's ability to see the Complex Sale section
// make sure the tabs name is set on the form, along with the section value of ComplexSale
function updateComplexSaleSectionState() {
    var bComplexSale = Xrm.Page.getAttribute("ac_complexsale").getValue();
    if (bComplexSale == false) {
        Xrm.Page.ui.tabs.get("ComplexSale").setVisible(false);
    } else {
        Xrm.Page.ui.tabs.get("ComplexSale").setVisible(true);
    }
}

// Update the Estimated Revenue
function recalculateEstRevenue() {
    // Get all shortcut variables
    var oEstValue = Xrm.Page.getAttribute("estimatedvalue");
    var oPrice = Xrm.Page.getAttribute("ac_estimatedprice");
    var oAnnualVolumne = Xrm.Page.getAttribute("ac_launchyearannualvolumekg");

    if (oPrice != null && oAnnualVolumne != null) {
        oEstValue.setValue(oPrice.getValue() * oAnnualVolumne.getValue());
    } else {
        oEstValue.setValue(null);
    }

    // Force a recalculation of everything else...
    recalculateRiskAdjustedEstRevenue();
}

// Update the value in the ac_riskadjustedestrevenue field.
function recalculateRiskAdjustedEstRevenue() {
    var oRiskAdjusted = Xrm.Page.getAttribute("ac_riskadjustedestrevenue");
    var oEstValue = Xrm.Page.getAttribute("estimatedvalue");
    var oProbability = Xrm.Page.getAttribute("closeprobability");

    if (oEstValue.getValue() != null && oProbability.getValue() != null) {
        oRiskAdjusted.setValue(oEstValue.getValue() * (oProbability.getValue() / 100));
    } else {
        oRiskAdjusted.setValue(null);
    }
}

// Calculate the value of Probability (closeprobability)
function updateProbability() {
    // Constants...
    var REVENUE_TYPE_GROWTH = false;
    var STATUS_CODE_UNIVERSE = 200000;
    var STATUS_CODE_ABOVE = 200001;
    var STATUS_CODE_IN_1 = 200002;
    var STATUS_CODE_IN_2 = 200003;
    var STATUS_CODE_IN_3 = 200004;
    var STATUS_CODE_BEST_FEW = 200005;
    var STATUS_CODE_ORDER = 200006;

    // Ease of reading variables...
    var oRevenueType = Xrm.Page.getAttribute("ac_revenuetype");
    var oPlaceInFunnel = Xrm.Page.getAttribute("statuscode");
    var oProbability = Xrm.Page.getAttribute("closeprobability");

    switch (oPlaceInFunnel.getValue()) {
        case STATUS_CODE_UNIVERSE:
            oProbability.setValue(0);
            oProbability.setSubmitMode("always");
            break;
        case STATUS_CODE_ABOVE:
            oProbability.setValue(10);
            oProbability.setSubmitMode("always");
            break;
        case STATUS_CODE_IN_1:
            oProbability.setValue(20);
            oProbability.setSubmitMode("always");
            break;
        case STATUS_CODE_IN_2:
            oProbability.setValue(30);
            oProbability.setSubmitMode("always");
            break;
        case STATUS_CODE_IN_3:
            oProbability.setValue(50);
            oProbability.setSubmitMode("always");
            break;
        case STATUS_CODE_BEST_FEW:
            oProbability.setValue(75);
            oProbability.setSubmitMode("always");
            break;
        case STATUS_CODE_ORDER:
            oProbability.setValue(100);
            oProbability.setSubmitMode("always");
            break;
    }
}

// Called when the Clinical field is changed
function clinical_Changed() {
    var oClinical = Xrm.Page.getAttribute("ac_clinical").getValue();
    if (oClinical != 'undefined' && oClinical != null && oClinical == true) {
        Xrm.Page.ui.tabs.get("General").sections.get("Clinical").setVisible(true);
    } else {
        Xrm.Page.ui.tabs.get("General").sections.get("Clinical").setVisible(false);
    }
}

//When any hours spent are changed, we run the following code from the onChange event on those fields.
function calculateRevenue() {
    var oTotalRevenue = Xrm.Page.getAttribute("estimatedvalue");
    var oTotal = Xrm.Page.getAttribute("ac_estimatedrevenue1").getValue() + Xrm.Page.getAttribute("ac_estimatedrevenue2").getValue() + Xrm.Page.getAttribute("ac_estimatedrevenue3").getValue() + Xrm.Page.getAttribute("ac_estimatedrevenue4").getValue();
    oTotalRevenue.setValue(oTotal);

    oTotalRevenue.ForceSubmit = true;
}

function ac_complexsale_onchange() {
    updateComplexSaleSectionState();
}
function statuscode_onchange() {
    updateProbability();
    calculateProductValues();
}
function estimatedvalue_onchange() {
    recalculateRiskAdjustedEstRevenue();
}
function ac_launchyearannualvolumekg_onchange() {
    recalculateEstRevenue();
}
function closeprobability_onchange() {
    //crmForm.Ascentium_RecalculateRiskAdjustedEstRevenue();
    calculateProductValues();
}

function estimatedcloseddate_onChange() {
    calculateProductValues();
    updateLaunchYearAnnualVolume1();
}

function ac_estimatedrevenue1_onchange() {
    //Ascentium_CalculateRevenue();
    calculateProductValues();
}
function ac_estimatedrevenue2_onchange() {
    //Ascentium_CalculateRevenue();
    calculateProductValues();
}
function ac_estimatedrevenue3_onchange() {
    //Ascentium_CalculateRevenue();
    calculateProductValues();
}
function ac_estimatedrevenue4_onchange() {
    //Ascentium_CalculateRevenue();
    calculateProductValues();
}

function ac_estimatedprice1_onChange() {
    calculateProductValues();
}
function ac_estimatedprice2_onChange() {
    calculateProductValues();
}
function ac_estimatedprice3_onChange() {
    calculateProductValues();
}
function ac_estimatedprice4_onChange() {
    calculateProductValues();
}

function ac_estfullyearvolumekg1_onChange() {
    calculateProductValues();
}
function ac_estfullyearvolumekg2_onChange() {
    calculateProductValues();
}
function ac_estfullyearvolumekg3_onChange() {
    calculateProductValues();
}
function ac_estfullyearvolumekg4_onChange() {
    calculateProductValues();
}
