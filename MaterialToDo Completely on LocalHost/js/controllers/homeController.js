/**
 * Created by M.JUNAID on 2015-03-09.
 */

materialToDo.controller('homeController', function($scope, $mdSidenav,$mdDialog,$mdBottomSheet,$timeout,actionService,$mdToast){

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    var getTasks = localStorage.getItem('toDoTasks');
    $scope.todos=[];

    $scope.getAllTasks = function(){
        var getTasks = localStorage.getItem('toDoTasks');
        var tasksInArray = JSON.parse(getTasks);
        for(var i = 0 ; i<tasksInArray.length;i++){
            var toDoObj = JSON.parse(tasksInArray[i]);
            toDoObj.dueDate = new Date(toDoObj.dueDate);
            $scope.todos.push(toDoObj);
        }
    };

    if(getTasks!==null){
        $scope.getAllTasks()
    }


    $scope.currentStateOfTasks = function(){
        var tasksInArray=[];
        $scope.todos.forEach(function(todo){
            tasksInArray.push(JSON.stringify(todo));
        });
        var StringifiedTasks = JSON.stringify(tasksInArray);
        localStorage.setItem('toDoTasks',StringifiedTasks);
    };


    $scope.showAddNewTaskDialog = function(ev) {
        $scope.currentStateOfTasks();
        $mdDialog.show({
            controller: 'addNewTaskController',
            templateUrl: 'partials/addNewTaskDialog.html',
            targetEvent: ev
        }).then(function() {
            var getTasks = localStorage.getItem('toDoTasks');
            var tasksInArray = JSON.parse(getTasks);
            var toDoObj = JSON.parse(tasksInArray[tasksInArray.length-1]);
            toDoObj.dueDate = new Date(toDoObj.dueDate);
            $scope.todos.push(toDoObj);
            $scope.showSimpleToast('Task Added Success');
        });
    };

    $scope.showEditTaskDialog = function(ev) {
        $scope.currentStateOfTasks();
        $mdDialog.show({
            controller: 'editTaskController',
            templateUrl: 'partials/editTaskDialog.html',
            targetEvent: ev
        }).then(function() {
            var getTasks = localStorage.getItem('toDoTasks');
            $scope.todos=[];
            if(getTasks!==null){
                $scope.getAllTasks();
                $scope.showSimpleToast('Task Edited Success');
            }
        });
    };

    $scope.showDeleteTaskDialog = function() {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete this Task?')
            .ok('Yes, Delete It.')
            .cancel('No');

        $scope.getTasks = localStorage.getItem('toDoTasks');
        $scope.parsedTasks = JSON.parse($scope.getTasks);

        $mdDialog.show(confirm).then(function() {

            $scope.index = actionService.index.get();
            $scope.parsedTasks.splice($scope.index, 1);

            var stringifiedNewTask = JSON.stringify($scope.parsedTasks);
            localStorage.setItem('toDoTasks',stringifiedNewTask);

            $mdDialog.show(
                $mdDialog.alert()
                    .title('The Task has been deleted')
                    .ok('Got it!')
            );

            var getTasks = localStorage.getItem('toDoTasks');
            $scope.todos=[];
            if(getTasks!==null){
                $scope.getAllTasks()
            }

        }, function() {
            console.log("Canceled Deleting");
        });
    };

    $scope.showGridBottomSheet = function(index,ev) {
        $mdBottomSheet.show({
            templateUrl: 'partials/bottomGridSheet.html',
            controller: 'bottomGridSheetController'
        }).then(function() {
            var clickedAction = actionService.clickedAction.get();
            var stringifiedToDo = JSON.stringify($scope.todos[index]);
            localStorage.setItem('toDoToEdit',stringifiedToDo);
            var clickIndex = actionService.index.set(index);

            if(clickedAction == 'edit'){
                $scope.showEditTaskDialog(ev)
            }
            else if(clickedAction == 'delete'){
                $scope.showDeleteTaskDialog()
            }
            else{
                console.log(clickedAction);
            }
        });
    };

    $scope.toastPosition = {
        bottom: true,
        top: false,
        left: false,
        right: true
    };
    $scope.getToastPosition = function() {
        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };

    $scope.showSimpleToast = function(message) {
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position($scope.getToastPosition())
                .hideDelay(2000)
        );
    };

});
