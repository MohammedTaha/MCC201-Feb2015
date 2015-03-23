var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
function doSomethingElse(req, res, next){
  console.log("Inside Do something else");
  next();
}

function checkSession(req, res, next){
  console.log("Inside Check Sessions");
  if(req.session.myUser){
    next();
  } else {
    //res.redirect("/login");
    res.send("Please <a href = '/login'> LOGIN </a>")
  }
}

router.get("/login/:userName", function(req, res){
  //console.log("User Name "+ req.params.userName);
  req.session.myUser = req.params.userName;
  res.send("Welcome to login page");
});

router.get("/timeline", doSomethingElse, checkSession, function(req, res){
  res.send("Welcome to timeline <br/> <h2>"+ req.session.myUser +"</h2>");
});

router.get("/homePage", function(req, res){
  req.session.count = req.session.count || 0;

  res.send("Number of time visited = " + (++req.session.count));

});


router.get("/signout", function(req, res){
  req.session.destroy();
  res.send("Signed Out");
});




module.exports = router;
