var express = require('express');
var router = express.Router();
var db = require('../db');
var jwt = require('jsonwebtoken');


router.delete('/:username/:postid', function(req, res){
  var token =req.cookies.jwt;
  let username = req.params.username;
  let postid =req.params.postid;
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

   
    if (username==null || postid == null || isNaN(postid)) {
      res.status(400).json(); 
      } 
    else {
 
    db.get().collection('Posts',function (err, collection) {
        collection.find({"username": username, "postid": parseInt(postid)}).toArray(function (err, result) {
            if (err) {
                res.status(404).json();
                return;
            }
            if (result.length==0){
                res.status(400).json();
                return;
                } else {
                      collection.deleteOne({"username": username, "postid": parseInt(postid)}, function (err,result1){
                         res.status(204).json();
                         return;
                      });
                      
                }


        });
    });} 

}); 

module.exports = router;
