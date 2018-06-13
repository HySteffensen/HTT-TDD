(function() {
    "use strict";
    
    exports.initialize = function initialize(options) {
        validateOptions(options);
        handleClicks(options);
        showTab(options.defaultTab, options);
    };

    function validateOptions(options) {
        checkOption(options.tabs, "option.tabs");
        checkOption(options.content, "option.content");
        checkOption(options.defaultTab, "option.defaultTab");
        checkOption(options.activeTabClass, "option.activeTabClass");
        checkOption(options.hiddenContentClass, "option.hiddenContentClass");
    }

    function handleClicks(options) {
        options.tabs.forEach(function(tabElement) {
            tabElement.addEventListener("click", function(event) {
                showTab(event.target, options);
            });
        });
    }
    
    function showTab(tabToShow, options) {
        var activeIndex = findIndex(options.tabs, tabToShow);
        var contentToShow = options.content[activeIndex];

        options.tabs.forEach(function(tabElement) {
            tabElement.classList.remove(options.activeTabClass);
        });
        tabToShow.classList.add(options.activeTabClass);

        options.content.forEach(function(tabElement) {
            tabElement.classList.add(options.hiddenContentClass);
        });
        contentToShow.classList.remove(options.hiddenContentClass);
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