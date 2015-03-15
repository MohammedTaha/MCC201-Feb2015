var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function checkValidNums(req, res, next){

  req.params.num1 = parseInt(req.params.num1);
  req.params.num2 = parseInt(req.params.num2);
  if(!req.params.num1 || !req.params.num2){
    res.send("Invalid parameters");
  } else {
    next();
  }
}
function checkIfLessThan0(req, res, next){
  if(req.params.num1 < 0){
    req.params.num1 = 10;
  }
  //setTimeout(function(){
    next();
  //}, 5000);
}


router.get("/doSubtract/:num1/:num2", doSubtract);
router.get("/doAdd/:num1/:num2", checkValidNums, checkIfLessThan0, function(req, res){
  res.send("result : " +( parseInt(req.params.num1) + parseInt(req.params.num2)));
});




function doSubtract(req, res){
  res.send("result : " +( parseInt(req.params.num1) - parseInt(req.params.num2)));
}


/*CLIENT APP ROUTES*/

var tasks = [];

router.get("/task", function(req, res){
  res.send({status: true, data : tasks});
});

router.post("/task", function(req, res){
  tasks.push(req.body);
  res.send({status: true});
});


/*CLIENT APP ROUTES - ENDED*/



module.exports = router;
