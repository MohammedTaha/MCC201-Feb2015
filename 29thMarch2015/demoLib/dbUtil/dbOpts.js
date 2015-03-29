/**
 * Created by MTA on 3/29/2015.
 */

var mongoose = require("mongoose");
var q        = require("q");
var db       = mongoose.connect("mongodb://localhost/mcc201");

var booksModel = mongoose.model("books", {
    //BookName    : {type: String, required : true, unique : true},
    BookName    : String,
    Author      : String,
    Price       : Number,
    Desc        : {type : String},
    CreatedOn   : {type : Date, default: Date.now()}
});

exports.saveBookInDataBase = function (bookProps){
    var deferred = q.defer();
    var book = new booksModel(bookProps);
    book.save(function(err, data){
        if(err){
            console.log("Error in insertion");
            console.log(err);
            deferred.reject(err);
        } else {
            console.log("Book Saved Successfully");
            deferred.resolve();
        }
    });

    return deferred.promise;
};


