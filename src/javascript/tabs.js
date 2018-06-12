(function() {
    "use strict";

    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultTab = options.defaultTab;
        var activeTabClass = options.activeTabClass;
        var contentHideClass = options.contentHideClass;

        checkOption(tabs, "option.tabs");
        checkOption(content, "option.content");
        checkOption(defaultTab, "option.defaultTab");
        checkOption(activeTabClass, "option.activeTabClass");
        checkOption(contentHideClass, "option.contentHideClass");
        
        var activeIndex = findIndexOfDefaultElement(tabs, defaultTab);
        var defaultContent = content[activeIndex];

        content.forEach(function(element) {
            element.classList.add(contentHideClass);
        });
        defaultContent.classList.remove(contentHideClass);
        defaultTab.classList.add(activeTabClass);

        function findIndexOfDefaultElement(contentTabs, defaultContentTab) {
            for (var i = 0; i < contentTabs.length; i++) {
                if (contentTabs[i] === defaultContentTab) return i;
            }
            throw new Error("Could not find default tab in list");
        }

        function checkOption(option, name) {
            if (option === undefined) throw new Error("Expected " + name);
        }
    };

}());