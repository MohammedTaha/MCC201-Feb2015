/**
 * Created by MTA on 4/5/2015.
 */


var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
    res.render('appLandingPage',{});
});

module.exports = router;
