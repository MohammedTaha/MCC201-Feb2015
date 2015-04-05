/**
 * Created by MTA on 4/5/2015.
 */


var app = angular.module("SMS", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
        .state('landingPage', {
            url: "/",
            //template : "<h2>Welcome to landing Page</h2>"
            templateUrl : "/app/templates/landingPage.html",
            controller  : "landingPageCtrl"
        })
        .state('addStudent', {
            url: "/addStudent",
            //template : "<h2>Welcome to add Student Page</h2>"
            templateUrl : "/app/templates/addStudent.html",
            controller  : "addStudent"
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    });
});
