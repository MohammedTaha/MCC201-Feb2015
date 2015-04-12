/**
 * Created by MTA on 4/12/2015.
 */

var materialdemo = angular.module('materialdemo', ['ngMaterial']);

materialdemo.controller('index',function($scope,$mdSidenav){

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
});