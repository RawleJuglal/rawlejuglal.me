var express = require('express');
var router = express.Router();

//using the express object with get function which works like the http requires(path, callback)
//Notice the use of the res.send function to actually generate the server's response. This replace the use of
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end("Unable to read file index.html\n");
//that we saw with the http module.
router.get('/',function(req,res){
    res.render('heartbeat',{ title : "heartbeat"});
});
//Notice that we are using the same url twice, once for the get and once for the post. 
//A request is identified by its action and its path together.
router.post('/', function(req,res){
    res.send("Cannot post to heartbeat");
});

router.put('/', function(req, res) {
    res.send("Cannot put to heartbeat");
});

router.delete('/', function(req, res) {
    res.send("Cannot delete heartbeat");
});

router.get('/format/index.html',function(req,res){
    res.send("HTML:Application heartbeat.");
});


module.exports = router;