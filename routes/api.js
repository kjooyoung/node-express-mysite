var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET home page. */
router.route('/user/checkemail').get( function(req, res, next) {
  User.findOne({
    email: req.query.email
  }, ["_id"], {

  }, function(err, user){
    if(err){
      next(err);
      return;
    }
    res.json({
      result: "success",
      data: (user == null) ? "not exists" : "exists"
    });
  });
});

module.exports = router;
