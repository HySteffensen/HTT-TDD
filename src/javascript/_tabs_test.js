(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		var container;

		beforeEach(function() {
			container = document.createElement("div");
			document.body.appendChild(container);
		});

		afterEach(function() {
			removeElement(container);
		});

		it("tabs hides an element", function() {
			var element = addElement("div");
			tabs.initialize(element, "someClass");
			assert.equal(getClass(element), "someClass");
		});

		it("sets a class on an element without overwriting existing classes", function() {
			var element = addElement("div");
			element.setAttribute("class", "existingClass");
			tabs.initialize(element, "newClass");
			assert.equal(getClass(element), "existingClass newClass");
		});

		function getClass(element) {
			return element.getAttribute("class");
		}

		function addElement(tagName) {
			var element = document.createElement(tagName);
			container.appendChild(element);

			return element;
		}

		function removeElement(element) {
			element.parentNode.removeChild(element);
		}

	});
}());