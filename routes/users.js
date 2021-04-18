var express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var router = express.Router();

const User = require('../models/User');

/* POST user register. */
router.post('/register', function(req, res, next) {
  const { mail, password, fullname } = req.body;

  bcryptjs.hash(password, 10).then((hash) => {
    const user = new User({
      mail,
      password:hash,
      fullname
    });
  
    const promise = user.save();
    promise.then((data) =>{
      res.status(200).json({'status' : 'succes', 'message' : 'Registration is successfully', 'code' : ''});
    }).catch((err) => {
      res.status(400).json({'status' : 'error', 'message' : 'Registration failed.', 'code' : '0990'});
    });

  });


});

/* POST user login. */
router.post('/login', function(req, res, next) {
  const { mail , password } = req.body;

  User.findOne(
    {
      mail
    },
      (err,user) => {
          if(err){
            res.status(400).json({'status':'error','message' : 'Authentication failed, wrong password.','code':'09977'});
          }

          if(!user){
            res.status(401).json({'status':'error','message' : 'Authentication failed, wrong password.','code':'09975'});
          }  
          
          bcryptjs.compare(password, user.password).then((result) => {

              if(!result){
                res.status(400).json({'status':'error','message' : 'Authentication failed, wrong password.','code':'09976'});
              }else{
                
                const payload = {
                  mail
                };
                
                const API_SECRET_KEY = process.env.API_SECRET_KEY;
                const token = jwt.sign(payload, API_SECRET_KEY, {
                  expiresIn: 720 // 12 saat
                });

                res.status(200).json({'status' :  'success' , token});

              }
          }); 
      }
    );

});

module.exports = router;
