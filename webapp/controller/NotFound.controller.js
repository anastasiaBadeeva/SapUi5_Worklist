sap.ui.define([
		"jetCources/ControlTaskBadeeva/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("jetCources.ControlTaskBadeeva.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);