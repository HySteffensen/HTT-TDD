(function() {
	"use strict";

	var assert = require("./assert");
	var tabs = require("./tabs.js");

	describe("Tabs", function() {

		const ACTIVE_TAB = "activeTab";
		const HIDDEN_CONTENT = "hiddenContent";
		const IRRELEVANT = "irrelevant";
		var container;

		beforeEach(function() {
			container = document.createElement("div");
			document.body.appendChild(container);
		});

		afterEach(function() {
			removeElement(container);
		});

		it("use a class to hide all content elements except the default upon initialization", function() {
			var defaultTab = createTab(); 
			
			var content1 = createTabContent();
			var defaultContent = createTabContent();
			var content3 = createTabContent();

			tabs.initialize({
				tabs: [ createTab(), defaultTab, createTab() ],
				content: [ content1, defaultContent, content3 ], 
				defaultTab: defaultTab, 
				activeTabClass: IRRELEVANT,
				hiddenContentClass: HIDDEN_CONTENT
			});

			assertContentHidden(content1, "element 1");
			assertContentVisible(defaultContent, "element 2");
			assertContentHidden(content3, "element 3");
		});

		it("styles the default tab with a class upon initialization", function() {
			var tab1 = createTab();
			var defaultTab = createTab();
			var tab3 = createTab();

			var defaultContent = createTabContent();

			tabs.initialize({
				tabs: [ tab1, defaultTab, tab3 ],
				content: [ createTabContent(), defaultContent, createTabContent() ],
				defaultTab: defaultTab,
				activeTabClass: ACTIVE_TAB,
				hiddenContentClass: IRRELEVANT
			});

			assertTabInactive(tab1, "tab 1");
			assertTabActive(defaultTab, "default tab");
			assertTabInactive(tab3, "tab 3");
		});

		it("switch content when tab is clicked", function() {
			var tab1 = createTab();
			var tab2 = createTab();
			var tab3 = createTab();

			var content1 = createTabContent();
			var content2 = createTabContent();
			var content3 = createTabContent();

			tabs.initialize({
				tabs: [ tab1, tab2, tab3 ],
				content: [ content1, content2, content3 ],
				defaultTab: tab1,
				activeTabClass: ACTIVE_TAB,
				hiddenContentClass: HIDDEN_CONTENT
			});

			// click tab 2
			// assert content 2 is visible
			// assert content 1 is no longer visible

			// assert tab 2 is visible
			// assert tab 1 is no longer active
		});

		it("preserves existing classes when adding new classes", function() {
			var defaultTab = createTab();
			defaultTab.setAttribute("class", "existingTabClass");
			
			var defaultContent = createTabContent();
			var hiddenContent = createTabContent();
			hiddenContent.setAttribute("class", "existingClass");

			tabs.initialize({
				tabs: [ defaultTab, createTab() ],
				content: [ defaultContent, hiddenContent ], 
				defaultTab: defaultTab, 
				hiddenContentClass: "hiddenContent",
				activeTabClass: "activeTab"
			});

			assert.equal(getClass(defaultTab), "existingTabClass activeTab", "should preserve existing classes");
			assert.equal(getClass(hiddenContent), "existingClass hiddenContent", "content element should preserve exisitng classes");
		});

		function assertTabActive(element, elementName) {
			assert.equal(getClass(element), ACTIVE_TAB, element + " should be active");			
		}

		function assertTabInactive(element, elementName) {
			assert.equal(getClass(element), null, elementName + " should not be active");
		}

		function assertContentHidden(element, elementName) {
			assert.equal(getClass(element), HIDDEN_CONTENT, elementName + " should be hidden");
		}

		function assertContentVisible(element, elementName) {
			assert.equal(getClass(element), "", elementName + " should not be hidden");
		}

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