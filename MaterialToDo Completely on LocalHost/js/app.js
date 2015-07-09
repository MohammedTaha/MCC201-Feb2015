/**
 * Created by M.JUNAID on 2015-03-09.
 */

var materialToDo = angular.module('materialToDo', ['ngMaterial','ngRoute']);

materialToDo.constant("basePath", "http://localhost:3000");

materialToDo.config(function($routeProvider,$mdThemingProvider){

    $mdThemingProvider
        .theme('docs-dark', 'default')
        .primaryPalette('yellow');

        //.dark()
        //.theme('default')
        //.primaryPalette('yellow')
        //.accentPalette('pink');
        //.warnPalette('red')
        //.backgroundPalette('blue');


    $routeProvider
     /* .when('/signUp',{
        templateUrl:'partials/signUp.html',
        controller:'signUpController'
    }).when('/signIn',{
        templateUrl:'partials/signIn.html',
        controller:'signInController'
    })*/.when('/home',{
        templateUrl:'partials/home.html',
        controller:'homeController',
        cache: false
        }).otherwise({
        redirectTo:"/home"
    });


});
