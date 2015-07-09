/**
 * Created by M.JUNAID on 2015-03-12.
 */

materialToDo.controller('addNewTaskController', function($scope,$mdDialog) {

    $scope.newTask={
        isDone:false
    };

    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.done = function () {
        $mdDialog.hide();

        console.log($scope.newTask);

        /*        var str = $scope.newTask.dueDate.constructor();
                $scope.newTask.dueDate= str.substr(0,15);*/

        $scope.getTasks = localStorage.getItem('toDoTasks');
        $scope.parsedTasks=[];
        if($scope.getTasks==null){
            localStorage.setItem('toDoTasks',[]);
        }else{
            $scope.parsedTasks = JSON.parse($scope.getTasks)
        }
        //var stringifiedTasks = JSON.stringify(getTasks);
        $scope.tasks = JSON.stringify($scope.newTask);
        $scope.parsedTasks.push($scope.tasks)
        var stringifiedNewTask = JSON.stringify($scope.parsedTasks);
        localStorage.setItem('toDoTasks',stringifiedNewTask);

    };

});


