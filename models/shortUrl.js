var mongoose = require('mongoose')
var Schema = mongoose.Schema

var shortUrlSchema = new Schema({
  long_url:String,
  short_id:Number
}, {collection: 'shortUrl'});

module.exports = mongoose.model('shortUrl', shortUrlSchema);