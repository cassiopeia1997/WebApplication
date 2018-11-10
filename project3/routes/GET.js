var express = require('express');
var router = express.Router();
var db = require('../db');
var jwt = require('jsonwebtoken');


router.get('/:username', function(req, res){
   var token =req.cookies.jwt;
   let username = req.params.username;
   let date = new Date ();
   let time = date.getTime();

   if (token) {
      jwt.verify(token,'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', function(error,success) {
          if (error) {
            res.status(401).json();
            return;
          } else {
            if (username != success.usr) {
              res.status(401).json();
            }
          }
      }
     );
   } else {
      res.status(401).json();
      return;
   }

   
      if (username==null) {
      res.status(400).json(); 
      return;
      } 
      else 
      {
         db.get().collection('Posts',function (err, collection) {
        collection.find({"username":username}).toArray(function (err, result) {
            if (err) {
                //res.status(404);
                res.status(404).json();
                return;
               }
                         
              res.status(200).json(result);
		return;
                


        });
    });

      
       }

});

module.exports = router;
