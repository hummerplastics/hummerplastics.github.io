var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "https://raw.githubusercontent.com/hummerplastics/hummerplastics.github.io/master/parts/main.html"
    })
    .when("/tipo", {
        templateUrl : "https://raw.githubusercontent.com/hummerplastics/hummerplastics.github.io/master/parts/tipo.html"
    });
});
