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
			var defaultTab = createTab(); 
			
			var content1 = createTabContent();
			var defaultContent = createTabContent();
			var content3 = createTabContent();

			tabs.initialize({
				tabs: [ createTab(), defaultTab, createTab() ],
				content: [ content1, defaultContent, content3 ], 
				default: defaultTab, 
				activeTabClass: IRRELEVANT,
				contentHideClass: "hideClass"
			});
			
			assert.equal(getClass(content1), "hideClass", "element 1 should be hidden");
			assert.equal(getClass(defaultContent), "", "default element should not be hidden");
			assert.equal(getClass(content3), "hideClass", "element 3 should be hidden");
		});

		it("preserves existing elements when hiding a content element", function() {
			var defaultTab = createTab();
			
			var defaultContent = createTabContent();
			var hiddenContent = createTabContent();
			hiddenContent.setAttribute("class", "existingClass");

			tabs.initialize({
				tabs: [ defaultTab, createTab() ],
				content: [ defaultContent, hiddenContent ], 
				default: defaultTab, 
				contentHideClass: "newClass",
				activeTabClass: IRRELEVANT
			});

			assert.equal(getClass(hiddenContent), "existingClass newClass");
		});

		it("styles the default tab with a class", function() {
			var tab1 = createTab();
			var defaultTab = createTab();
			var tab3 = createTab();

			var defaultContent = createTabContent();

			tabs.initialize({
				tabs: [ tab1, defaultTab, tab3 ],
				content: [ createTabContent(), defaultContent, createTabContent() ],
				default: defaultTab,
				activeTabClass: "activeTab",
				contentHideClass: IRRELEVANT
			});

			assert.equal(getClass(tab1), null, "tab 1 should not be styled");
			assert.equal(getClass(defaultTab), "activeTab", "default tab should be styled");
			assert.equal(getClass(tab3), null, "tab 3 should not be styled");
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