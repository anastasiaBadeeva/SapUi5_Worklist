/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"jetCources/ControlTaskBadeeva/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"jetCources/ControlTaskBadeeva/test/integration/pages/Worklist",
	"jetCources/ControlTaskBadeeva/test/integration/pages/Object",
	"jetCources/ControlTaskBadeeva/test/integration/pages/NotFound",
	"jetCources/ControlTaskBadeeva/test/integration/pages/Browser",
	"jetCources/ControlTaskBadeeva/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "jetCources.ControlTaskBadeeva.view."
	});

	sap.ui.require([
		"jetCources/ControlTaskBadeeva/test/integration/WorklistJourney",
		"jetCources/ControlTaskBadeeva/test/integration/ObjectJourney",
		"jetCources/ControlTaskBadeeva/test/integration/NavigationJourney",
		"jetCources/ControlTaskBadeeva/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});