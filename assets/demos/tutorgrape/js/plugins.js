// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Checkboxes

// @codekit-prepend "";

(function (window, document, $, undefined) { // put the vars you need and match them at the bottom
    "use strict";
    // Stuff to do as soon as the DOM is ready;

    $('.button-toggle').on('click', function(event) {
         event.preventDefault();
        // alert('cledk');
        var $this = $(this);

        if ( $this.find('input').is(':checked') ) {
            $this.toggleClass('checked');
        } else {

        }
        // Act on the event
    });

}(this, this.document, this.jQuery)); // in global scope, this === window