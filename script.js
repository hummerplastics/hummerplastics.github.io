var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "parts/main.html"
    })
    .when("/tipo", {
        templateUrl : "parts/tipo.html"
    })
    .when("/green", {
        templateUrl : "parts/green.htm"
    })
    .when("/blue", {
        templateUrl : "parts/blue.htm"
    });
});
