/**
 * Created by MTA on 3/15/2015.
 */


var app = angular.module("todo", ["ionic"]);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state("home", {
            url         : "/",
            templateUrl : "./assets/templates/landingPage.html",
            controller  : "landingPageController"
        })
        .state("addNew", {
            url         : "/add",
            templateUrl : "./assets/templates/addNewTask.html",
            controller  : "addNewTask"
        })
        .state("edit", {
            url         : "/edit",
            templateUrl : "./assets/templates/editTask.html",
            controller  : "editTask"
        })
        .state("delete", {
            url         : "/delete",
            templateUrl : "./assets/templates/deleteTask.html",
            controller  : "deleteTask"
        });

    $urlRouterProvider.otherwise("/");
});
app.constant("basepath", "http://localhost:3000");
app.service("taskStore", function(basepath, $http, $q){
    var tasks = [{todo : "TODO 1", isDeleted : false, isDone : false}, {todo : "TODO 2", isDeleted : false, isDone : true}];

    this.saveTask = function (TODO){
        var taskObj = {todo : TODO, isDeleted : false, isDone : false};
        $http.post((basepath + "/task"), taskObj);

    };
    this.getAllTasks = function (){
        var deferred = $q.defer();
        $http.get((basepath + "/task"))
            .success(function(data){
                deferred.resolve(data.data);
            })
            .error(function(err){
                console.log("Error");
                console.log(err);
                deferred.reject();
            });
        return deferred.promise;
    };
    this.updateTask = function (action, index, newVal){
        switch (action){
            case "update":
                tasks[index].todo = newVal;
                break;
            case "delete":
                tasks[index].isDeleted = newVal;
                break;
        }
    };

});



app.controller("landingPageController", function($scope, taskStore){
    taskStore.getAllTasks()
        .then(function(allSavedTasks){
            $scope.allTODOs = allSavedTasks;
        }, function(){
            console.log("Error in downloading todos");
        });
});

app.controller("editTask", function($scope, taskStore){
    taskStore.getAllTasks()
        .then(function(allSavedTasks){
            $scope.allTODOs = allSavedTasks;
        }, function(){
            console.log("Error in downloading todos");
        });

    $scope.saveTask = function(index, todo){
        taskStore.updateTask("update", index, todo);
    };
});

app.controller("deleteTask", function($scope, taskStore){
    taskStore.getAllTasks()
        .then(function(allSavedTasks){
            $scope.allTODOs = allSavedTasks;
        }, function(){
            console.log("Error in downloading todos");
        });


    $scope.deleteTask = function(index){
        taskStore.updateTask("delete", index, true);
    };
});

app.controller("addNewTask", function($scope, taskStore){
    $scope.task     = "";
    $scope.saveTask = function(){
        alert("add new")
        taskStore.saveTask($scope.task);
        $scope.task = "";
    };
});




