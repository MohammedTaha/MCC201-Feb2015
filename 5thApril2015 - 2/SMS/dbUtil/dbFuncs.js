


/**
 * Created by MTA on 4/5/2015.
 */

var mongoose = require("mongoose");
var q        = require("q");
//var dbCon    = mongoose.connect("mongodb://localhost/SMSDB");
var dbCon    = mongoose.connect("mongodb://user:pass@ds061747.mongolab.com:61747/smsdb", function(err){
    if(err){
        console.log("Error in connecting");
        console.log(err);
    } else {
        console.log("Connected to database successfully");
    }
});

var StudentModel = mongoose.model("students", {
    __Name      : String,
    __Age       : Number,
    __CreatedOn : {type : Date, default : Date.now()}
});

exports.saveStudentInDB = function (stdData){
    var deferred = q.defer();
    var myStd = new StudentModel(stdData);
    myStd.save(function(err){
        if(err){
            console.log("Error in insertion");
            console.log(err);
            deferred.reject();
        } else {
            console.log("Student added Successfully");
            deferred.resolve();
        }
    });

    return deferred.promise;
};



