(function() {
    "use strict";

    exports.initialize = function initialize(elementList, className) {
        elementList.forEach(function(element) {
            element.classList.add(className);
        });
    };

}());