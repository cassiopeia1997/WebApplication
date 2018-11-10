var express = require('express');
var router = express.Router();
var db = require('../db');
var jwt = require('jsonwebtoken');


router.put('/:username/:postid', function(req, res){
  var token =req.cookies.jwt;
  let username = req.params.username;
  let postid =req.params.postid;
  let t = req.body.title;
  let b = req.body.body;
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

 
    if (username==null || postid == null || t ==null ||b ==null|| isNaN(postid) ) {
      res.status(400).json(); 
      return;
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
                  collection.updateOne({"username": username, "postid": parseInt(postid)},{$set:{"title":t,"body":b,"modified":time}},function(err,result1){
                    res.status(200).json();
                    return;
                  });

                  
                }

        });
    });} 

}); 


module.exports = router;