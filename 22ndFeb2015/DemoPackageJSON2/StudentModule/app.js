/**
 * Created by MTA on 2/22/2015.
 */


var std = require("./Student");
var allStudents = [
    new std("A", 1),
    new std("B", 1),
    new std("C", 1),
    new std("D", 1)
];


//module.exports = allStudents;

module.exports = {
    getStudents : function(count){
        var localArr = [];
        for(var i = 0; i < count; i++){
            localArr.push(new std(("A" + i), 1));
        }
        return localArr;
    }
};

