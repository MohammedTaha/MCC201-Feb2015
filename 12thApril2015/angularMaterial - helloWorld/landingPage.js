/**
 * Created by MTA on 4/12/2015.
 */
angular
    .module('inputBasicDemo', ['ngMaterial'])
    .controller('DemoCtrl', function($scope) {
        $scope.gatherData = function(){
            console.log($scope.user);
        };
    })
    .config( function($mdThemingProvider){
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('green')
            .dark();
    });