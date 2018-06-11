(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {
		const IRRELEVANT = "irrelevant";
		var container;

		beforeEach(function() {
			container = document.createElement("div");
			document.body.appendChild(container);
		});

		afterEach(function() {
			removeElement(container);
		});

		it("hides all class content except default upon initialization", function() {
			var content1 = createTabContent();
			var defaultContent = createTabContent();
			var content3 = createTabContent();

			tabs.initialize({
				tabs: [ createTab(), createTab(), createTab() ],
				content: [ content1, defaultContent, content3 ], 
				default: defaultContent, 
				contentHideClass: "hideClass",
				activeTabClass: IRRELEVANT
			});
			
			assert.equal(getClass(content1), "hideClass", "element 1 should be hidden");
			assert.equal(getClass(defaultContent), "", "default element should not be hidden");
			assert.equal(getClass(content3), "hideClass", "element 3 should be hidden");
		});

		it("preserves existing elements when hiding a content element", function() {
			var defaultContent = createTabContent();
			var hiddenContent = createTabContent();
			hiddenContent.setAttribute("class", "existingClass");

			tabs.initialize({
				tabs: [ createTab(), createTab() ],
				content: [ defaultContent, hiddenContent ], 
				default: defaultContent, 
				contentHideClass: "newClass",
				activeTabClass: IRRELEVANT
			});

			assert.equal(getClass(hiddenContent), "existingClass newClass");
		});

		it("styles the default tab with a class", function() {
			var defaultTab = createTab();
			var defaultContent = createTabContent();

			tabs.initialize({
				tabs: [ defaultTab ],
				content: [ defaultContent ],
				default: defaultContent,
				activeTabClass: "activeTab",
				contentHideClass: IRRELEVANT
			});

			assert.equal(getClass(defaultTab), "activeTab");
		});

		function getClass(element) {
			return element.getAttribute("class");
		}

		function createTab() {
			var tab = addElement("div");
			tab.innerHTML = "tab";
			return tab;
		}

		function createTabContent() {
			var tab = addElement("div");
			tab.innerHTML = "content";
			return tab;
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