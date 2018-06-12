(function() {
    "use strict";
    
    exports.initialize = function initialize(options) {
        
        checkOption(options.tabs, "option.tabs");
        checkOption(options.content, "option.content");
        checkOption(options.defaultTab, "option.defaultTab");
        checkOption(options.activeTabClass, "option.activeTabClass");
        checkOption(options.hiddenContentClass, "option.hiddenContentClass");

        showTab(options.defaultTab, options);
    };
    
    function showTab(tabToShow, options) {
        var activeIndex = findIndex(options.tabs, tabToShow);
        var contentToShow = options.content[activeIndex];

        options.content.forEach(function(element) {
            element.classList.add(options.hiddenContentClass);
        });
        contentToShow.classList.remove(options.hiddenContentClass);
        tabToShow.classList.add(options.activeTabClass);
    }
    
    function findIndex(contentTabs, defaultContentTab) {
        for (var i = 0; i < contentTabs.length; i++) {
            if (contentTabs[i] === defaultContentTab) return i;
        }
        throw new Error("Could not find default tab in list");
    }

    function checkOption(option, name) {
        if (option === undefined) throw new Error("Expected " + name);
    }

}());