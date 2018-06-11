(function() {
    "use strict";

    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultElement = options.default;
        var contentHideClass = options.contentHideClass;
        var activeTabClass = options.activeTabClass;

        checkOption(tabs, "option.tabs");
        checkOption(content, "option.content");
        checkOption(defaultElement, "option.defaultElement");
        checkOption(contentHideClass, "option.contentHideClass");
        checkOption(activeTabClass, "option.activeTabClass");

        content.forEach(function(element) {
            element.classList.add(contentHideClass);
        });
        defaultElement.classList.remove(contentHideClass);
        var activeIndex = findIndexOfDefaultElement(content, defaultElement);
        tabs[activeIndex].classList.add(activeTabClass);

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