var express = require('express');
var router = express.Router();
var Logins = require('../models/logins');
var Tests = require('../models/test')
/* GET users listing. */
router.get('/', function(req, res, next){
    Logins
        .find()
        .limit(10)
        .exec((err,data)=>{
            if (err) 
                {
                    res.send('error!')
                } 
            else 
                {
                    res.json(data)
                }
        });
})
    .post('/:username/:password', function(req, res, next){
        var user = new Logins({username:req.params.username, password: req.params.password});
        user.save(function(err, data){
           if(err)
            {
                res.send('Error!');
            }
           else
            {
                res.json(data);
            }
        });
    })

router.get('/email/:sender', function(req, res, next){
    Tests
        .find({sender:req.params.sender})
        .limit(10)
        .exec((err, data)=>{
            if(err)
                {
                    console.log('error!');
                }
            else
                {
                    res.json(data);
                }
        })
})
    .post('/email/:sender/:cc', function(req, res, next){
        var text = 'a new set of text';
        var sender = new Tests({sender: req.params.sender, textBody: text, cc:req.params.cc });
        sender.save((err, data)=>{
            if(err)
                {
                    console.log('error!');
                }
            else
                {
                    res.json(data);
                }
        })
    });
    
module.exports = router;
