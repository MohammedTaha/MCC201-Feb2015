var express = require('express');
var router = express.Router();
var currentUserName = null;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', userName : "User 02"});
});

router.get("/login", function(req, res){
  if(!currentUserName){
    res.render("login/loginPage", {});
  } else {
    res.render("login/welcome", {uName : currentUserName});
  }
});

router.post("/login", function(req, res){
  currentUserName = req.body.userName;
  res.render("login/welcome", {uName : currentUserName});
});


module.exports = router;
