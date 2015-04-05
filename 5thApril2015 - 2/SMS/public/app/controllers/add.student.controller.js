/**
 * Created by MTA on 4/5/2015.
 */


app.controller("addStudent", function($scope, stdService){

    $scope.student = {};
    $scope.addStudent = function(){
        stdService.saveStudent($scope.student)
            .then(function(){
                $scope.student = {};
            }, function(){
                alert("Error in saving student");
            });

    };
});