var mongoose = require('mongoose')
var Schema = mongoose.Schema

var testsSchema = new Schema({
  sender:String,
  textBody:String,
  cc:[String]
}, {collection: 'tests'});

module.exports = mongoose.model('tests', testsSchema);