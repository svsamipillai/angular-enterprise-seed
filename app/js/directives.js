'use strict';

/* Directives */

var directives = angular.module('myApp.directives', []);

// causes element to css animate in/out
directives.directive('fadeIn', function() {
    return {
      compile: function(elm) {
        $(elm).css('opacity', 0.1);
        return function(scope, elm, attrs) {
          $(elm).animate({ opacity : 1.0 }, 500 );
        };
      }
    };
});

directives.directive('myJqueryPluginUploader', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            // elem is a jQuery lite object
            // or a jQuery object if jQuery is present.
            // so call whatever plugins you have.
            elem.pluginUploadCall();
        }
    };
});
