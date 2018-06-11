(function() {
    "use strict";

    exports.initialize = function initialize(options) {
        var tabs = options.tabs;
        var content = options.content;
        var defaultElement = options.default;
        var contentHideClass = options.contentHideClass;
        var activeTabClass = options.activeTabClass;

        // TODO: throw an error when tabs is undefined
        if (content === undefined) throw new Error("Expected options.content");
        if (defaultElement === undefined) throw new Error("Expected options.defaultElement");
        if (contentHideClass === undefined) throw new Error("Expected options.contentHideClass");
        // TODO: throw an error when activeTabClass is undefined

        content.forEach(function(element) {
            element.classList.add(contentHideClass);
        });
        defaultElement.classList.remove(contentHideClass);

        if (tabs !== undefined) tabs[0].classList.add(activeTabClass);
    };

}());