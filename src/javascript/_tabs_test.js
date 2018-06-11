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

		it("hides multiple elements", function() {
			var element1 = addElement("div");
			var element2 = addElement("div");
			var element3 = addElement("div");

			tabs.initialize([element1, element2, element3], "hideClass");
			assert.equal(getClass(element1), "hideClass");
			assert.equal(getClass(element2), "hideClass");
			assert.equal(getClass(element3), "hideClass");
		});

		it("sets a class on an element without previous classes", function() {
			var element = addElement("div");
			tabs.initialize([ element ], "someClass");
			assert.equal(getClass(element), "someClass");
		});

		it("sets a class on an element without overwriting existing classes", function() {
			var element = addElement("div");
			element.setAttribute("class", "existingClass");
			tabs.initialize([ element ], "newClass");
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