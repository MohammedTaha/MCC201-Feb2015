/**
 * Created by MTA on 4/5/2015.
 */


var express = require('express');
var router = express.Router();
var dbFunctions = require("../dbUtil/dbFuncs");

router.post('/addStudent', function(req, res, next) {
    //console.log(req.body);
    dbFunctions.saveStudentInDB({__Name : req.body.name, __Age : req.body.age })
        .then(function(){
            res.send({status : true});
        }, function(){
            res.send({status : false});
        });

});

module.exports = router;

