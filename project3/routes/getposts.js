var express = require('express');
var router = express.Router();
var db = require('../db')
var common=require('commonmark');
var reader = new common.Parser();
var writer = new common.HtmlRenderer();

/* GET home page. */
router.get('/:username/:postid', function(req, res){

    db.get().collection('Posts',function (err, collection) {
        collection.find({username: req.params.username, postid: parseInt(req.params.postid)}).toArray(function (err, result) {
            if (err) {
                //res.status(404);
                console.log('Error:' + err);
                return;
            }
            console.log(result);
            if(result.length==0){
                res.status(404);
                res.render('error',{"message":"cannot find this post","error":{"status":"404","stack":""}});


            }else{
            let parsed = reader.parse(result[0].title); // parsed is a 'Node' tree
            // transform parsed if you like...
            let title = writer.render(parsed);
            let parsed1 = reader.parse(result[0].body); // parsed is a 'Node' tree
            // transform parsed if you like...
            let body = writer.render(parsed1);

            res.render('postlist', {"title": title, "body": body});
                res.status(200).json();
                }


        });
    });

});

let getFive = function(name, page,limit, callback) {
        db.get().collection('Posts', function (err, collection) {
            if(err){
                console.log('Error:' + err);
                return;
            }
            collection.count({username:"cs144",postid:{$gte:limit}}, function (err, total) {
                console.log("total:"+total);

                collection.find({username:name,postid:{$gte:limit}}).sort({postid:1}).limit(5).skip(
                    (page-1)*5
                ).toArray(function (err, docs) {
                    if (err) {
                        console.log(err);
                        return callback(err);
                    }
                    console.log(docs);

                    docs.forEach(function (doc) {
                        let parsed = reader.parse(doc.title); // parsed is a 'Node' tree
                        // transform parsed if you like...
                        doc.title = writer.render(parsed);
                        let parsed1 = reader.parse(doc.body); // parsed is a 'Node' tree
                        // transform parsed if you like...
                        doc.body = writer.render(parsed1);
                        //let dt=new Date(doc.created);
                        //doc.created=dt.setTime();
                        //doc.modified=dt.setTime(doc.modified);
                       // console.log(doc.created);
                        //console.log(doc.modified);

                    });
                    //console.log(docs);
                    callback(null, docs, total);
                });
            });
        });

};
router.get('/:username', function(req, res) {
    let limit = req.query.start ? parseInt(req.query.start) : 0;
    if(isNaN(limit)){
        res.status(404);
        res.render('error',{"message":"the start postid should be an integer","error":{"status":"404","stack":""}});
        return;}
    let page = req.query.p ? parseInt(req.query.p) : 1;
    let username=req.params.username;
    console.log("limit:"+limit+"page:"+page);
    if(limit<0){
        res.status(404);
        res.render('error',{"message":"the start postid should be larger than 0","error":{"status":"404","stack":""}});
        return;
    }
   getFive(username, page, limit,function (err, posts, total) {
        if (err) {
            posts = [];

        }
        if(posts.length==0){
            res.status(404);
            res.render('error',{"message":"cannot find any post","error":{"status":"404","stack":""}});
            return;
        }else {
            res.status(200);
            res.render('postEachUser', {
                //total:total.length,
                username: username,
                posts: posts,
                page: page,
                isFirstPage: (page - 1) == 0,
                isLastPage: ((page - 1) * 5 + posts.length) < total,
                user: username,
                start:limit
                //success: req.flash('success').toString(),
                // error: req.flash('error').toString()
            });

        }
    });


});



module.exports = router;
