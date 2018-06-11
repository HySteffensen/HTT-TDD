(function() {
    "use strict";

    exports.initialize = function initialize(defaultElement, elementList, className) {
        elementList.forEach(function(element) {
            element.classList.add(className);
        });
        defaultElement.classList.remove(className);
    };

}());