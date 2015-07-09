/**
 * Created by M.JUNAID on 2015-03-12.
 */

materialToDo.controller('editTaskController', function($scope,$mdDialog,actionService) {

    $scope.taskToEdit = JSON.parse(localStorage.getItem('toDoToEdit'));
    console.log($scope.taskToEdit);
    $scope.taskToEdit.dueDate = new Date($scope.taskToEdit.dueDate);

    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.done = function () {
        $mdDialog.hide();
        //var str = $scope.newTask.dueDate.constructor();
        //$scope.newTask.dueDate= str.substr(0,15);

        $scope.getTasks = localStorage.getItem('toDoTasks');
        $scope.parsedTasks = JSON.parse($scope.getTasks)

        //var stringifiedTasks = JSON.stringify(getTasks);
        $scope.tasks = JSON.stringify($scope.taskToEdit);
        $scope.index = actionService.index.get();
        $scope.parsedTasks[$scope.index]=$scope.tasks
        var stringifiedNewTask = JSON.stringify($scope.parsedTasks);
        localStorage.setItem('toDoTasks',stringifiedNewTask);

    };

});


