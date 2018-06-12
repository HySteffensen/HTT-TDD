(function() {
    "use strict";
    
    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultTab = options.defaultTab;
        var activeTabClass = options.activeTabClass;
        var hiddenContentClass = options.hiddenContentClass;
        
        checkOption(tabs, "option.tabs");
        checkOption(content, "option.content");
        checkOption(defaultTab, "option.defaultTab");
        checkOption(activeTabClass, "option.activeTabClass");
        checkOption(hiddenContentClass, "option.hiddenContentClass");
        
        showTab(defaultTab, tabs, content, activeTabClass, hiddenContentClass);
    };

        function showTab(tabToShow, tabs, content, activeTabClass, hiddenContentClass) {
            var activeIndex = findIndexOfDefaultElement(tabs, tabToShow);
            var defaultContent = content[activeIndex];
    
            content.forEach(function(element) {
                element.classList.add(hiddenContentClass);
            });
            defaultContent.classList.remove(hiddenContentClass);
            tabToShow.classList.add(activeTabClass);
        }
        
        function findIndexOfDefaultElement(contentTabs, defaultContentTab) {
            for (var i = 0; i < contentTabs.length; i++) {
                if (contentTabs[i] === defaultContentTab) return i;
            }
            throw new Error("Could not find default tab in list");
        }

        function checkOption(option, name) {
            if (option === undefined) throw new Error("Expected " + name);
        }

}());