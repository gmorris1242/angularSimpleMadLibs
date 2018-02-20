(function() {
    angular.module("storyApp")
    .config(function($routeProvider) {
        $routeProvider
        .when("/form", {
            template: "<form-component></form-component>"
        })
        .when("/story", {
            template: "<story-component></story-component>"
        })
        .otherwise({ redirectTo: "/form" });
    });
})();
