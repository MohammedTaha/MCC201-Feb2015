/**
 * Created by M.JUNAID on 2015-03-29.
 */

materialToDo.factory('actionService',function(){
    var _clickedAction = '';
    var _index = null;

    var _setAllTasks = function(action){
        _clickedAction = action

    };

    var _getAllTasks = function(){
        return _clickedAction
    };

    var _setIndex = function(index){
        _index = index

    };

    var _getIndex = function(){
        return _index
    };

    return{
        clickedAction:{
            set:_setAllTasks,
            get:_getAllTasks
        },
        index:{
            set:_setIndex,
            get:_getIndex
        }
    }

});