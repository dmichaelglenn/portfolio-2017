var app = angular.module("ValentineApp");

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "./js/templates/main.html",
        controller: "HomeController"
    })
    .when("/work", {
        templateUrl: "./js/templates/portfolio.html",
        controller: "PortfolioController"
    })
    .when("/about", {
        templateUrl: "./js/templates/about.html",
        controller: "PortfolioController"
    })
    .when("/contact", {
        templateUrl: "./js/templates/contact.html",
        controller: "PortfolioController"
    });


});//close config
