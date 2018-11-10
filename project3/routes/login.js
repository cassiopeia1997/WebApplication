var express = require('express');
var router = express.Router();
var db = require('../db')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res){
    let redirect=req.query.redirect?req.query.redirect:"";
    console.log(redirect);
    res.render("login",{"redirect":redirect});
});
router.post('/',function(req,res1){
    let username = req.body.username;
    let password = req.body.password;
    let redirect=req.body.redirect;
    console.log(username);
    console.log(password);
    if(username==""||password==""){
        res1.status(401);
        res1.render("login",{redirect:""});
        return;
    }
    db.get().collection('Users',function(err,collection){
        collection.find({username:username}).toArray(function (err,result) {
            if (err) {
                //res.status(404);
                console.log('Error:' + err);
                return;
            }
            if(result.length==0){
                res1.status(401);
                res1.render("login",{redirect:""});
                //res.render('error',{"message":"cannot fine this user","error":{"status":"404","stack":""}});
            }else{
               let hash=result[0].password;
                bcrypt.compare(password, hash, function(err, res) {
                    if(res==true){
                        console.log("matched!");
                        let expiration=Math.floor(Date.now() / 1000) + (2*60 * 60);

                        var token = jwt.sign({
                            "exp": expiration,
                            "usr": username
                        }, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c',{algorithm:'HS256',header:{"alg": "HS256",
                                "typ": "JWT"}},function(err, token) {
                                    if(err){
                                        console.log("Error:"+err);
                                        return;
                                    }
                                    console.log("token:"+token);
                                    res1.cookie('jwt', token);
                                   if(redirect==""||redirect==null){
                                    res1.status(200).json("successful authentication");}
                                    else{
                                        res1.redirect(redirect);
                                   }

                            }
                            );


                    }
                    else{

                        res1.status(401);
                        res1.render("login",{redirect:""});

                    }
                });
            }
        });

    });

});





module.exports = router;
