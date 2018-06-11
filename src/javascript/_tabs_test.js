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

		it("hides all class content except default upon initialization", function() {
			var element1 = addElement("div");
			var defaultElement = addElement("div");
			var element3 = addElement("div");

			tabs.initialize({
				content: [ element1, defaultElement, element3 ], 
				default: defaultElement, 
				contentHideClass: "hideClass"
			});
			
			assert.equal(getClass(element1), "hideClass", "element 1 should be hidden");
			assert.equal(getClass(defaultElement), "", "default element should not be hidden");
			assert.equal(getClass(element3), "hideClass", "element 3 should be hidden");
		});

		it("preserves existing elements when hiding a content element", function() {
			var defaultElement = addElement("div");
			var hiddenElement = addElement("div");
			hiddenElement.setAttribute("class", "existingClass");

			tabs.initialize({
				content: [ defaultElement, hiddenElement ], 
				default: defaultElement, 
				contentHideClass: "newClass"
			});

			assert.equal(getClass(hiddenElement), "existingClass newClass");
		});

		it("styles the default tab with a class", function() {
			var defaultTab = addElement("div");
			var defaultElement = addElement("div");

			tabs.initialize({
				tabs: [ defaultTab ],
				content: [ defaultElement ],
				default: defaultElement,
				activeTabClass: "activeTab",
				contentHideClass: "ignored"
			});

			assert.equal(getClass(defaultTab), "activeTab");
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