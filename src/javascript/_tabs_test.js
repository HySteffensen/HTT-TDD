(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		it("tabs hides an element", function() {
			var element = addElement("div");
			tabs.initialize(element);
			var display = getDisplayProperty(element);
			assert.equal(display, "none");
			removeElement(element);
		});

		function addElement(tagName) {
			var element = document.createElement(tagName);
			document.body.appendChild(element);

			return element;
		}

		function getDisplayProperty(element) {
			var styles = getComputedStyle(element);
			return styles.getPropertyValue("display");
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}

	});
}());