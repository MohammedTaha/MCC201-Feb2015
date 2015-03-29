var express = require('express');
var router = express.Router();
var dbOpts = require("../dbUtil/dbOpts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/addBook", function(req, res){
  res.render('addBooks');
});

router.post("/addBook", function(req, res){
  var objToSave = {"BookName": req.body.bookName ,"Author": req.body.author ,"Price": Number(req.body.price),"Desc": req.body.desc};
  dbOpts.saveBookInDataBase(objToSave)
      .then(function(){
        res.send({status: true});
      }, function(errObj){
        res.send({status: false, err : errObj});
      });
});

module.exports = router;
