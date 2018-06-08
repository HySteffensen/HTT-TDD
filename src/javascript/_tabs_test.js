(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		it("tabs hides an element", function() {
			var element = addElement("div");
			tabs.initialize(element, "someClass");
			assert.equal(getClass(element), "someClass");
			removeElement(element);
		});

		function getClass(element) {
			return element.getAttribute("class");
		}

		function addElement(tagName) {
			var element = document.createElement(tagName);
			document.body.appendChild(element);

			return element;
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}

	});
}());