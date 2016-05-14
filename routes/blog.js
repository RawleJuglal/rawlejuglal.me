var express = require('express');
var router = express.Router();

//POST ROUTES
router.get('/', function(req,res){
    res.send('You\'ve requested a list of all blog posts');    
});

router.post('/', function(req,res){
   res.send('Posting a new post to the database'); 
});

router.get('/new', function(req,res){
    res.send('Return a form to create a new post');
});

router.get('/:id', function(req, res) {
    var postID = req.params.id;
    res.send("You requested blog post " + postID);
});

router.post('/:id', function(req,res){
   var postID = req.params.id;
   res.send('You\'ve edited post #'+postID);
});


router.get('/:id/edit',function(req,res){
  var postID = req.params.id;
  res.send("Return an html form to edit post #"+ postID);
});

router.get('/:id/delete',function(req,res){
    var postID = req.params.id;
    res.send('You would like to delete blog post '+ postID);
});

//COMMENT ROUTES
router.get('/:id/comments',function(req,res){
    var postID = req.params.id;
    res.send('You want to view the blog post\'s commments '+ postID);
});

router.post('/:id/comments', function(req,res){
    var postID = req.params.id;
    res.send('Create a new comment for post #'+ postID);
});

router.get('/:id/comments/new', function(req,res){
   var postID = req.params.id;
   res.send('Return an HTML form for creating a new comment for post #'+ postID);
});

router.get('/:id/comments/:cid',function(req,res){
    var postID = req.params.id;
    var commentID = req.params.cid;
    res.send('You want to view the comment #'+ commentID + " for post #"+ postID);
});

router.put('/:id/comments/:cid', function(req,res){
    var postID = req.params.id;
    var commentID = req.params.cid;
    res.send('Edited comment #'+commentID+ ' for post #'+ postID);
});

router.delete('/:id/comments/:cid', function(req,res){
    var postID = req.params.id;
    var commentID = req.params.cid;
    res.send('Deleted comment #'+ commentID+ ' for post #'+ postID);
});

router.get('/:id/comments/:cid/edit', function(req,res){
    var postID = req.params.id;
    var commentID = req.params.cid;
    res.send('Return an HTML form for editing comment #'+commentID+ ' for post #'+postID);
});

module.exports = router;