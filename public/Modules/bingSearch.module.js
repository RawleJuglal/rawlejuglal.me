'use strict';

var bingAPPID = 'fwHyQAoJMJYmK8L4a3dIV2GAEUfXAlFRjCnBx0YbfPE=';
var Search = require('bing.search');
var util = require('util');

var search = new Search(bingAPPID);

function bingSearchHandler () {

this.findImages = function(userInput,offset, callback){
    var keyword = userInput.keyword;
    search.images(keyword,
          {skip: offset},
          function(err, results) {
            if(err) callback(err)
            else
                {
                    var resArr = [];
                  (util.inspect(results,
                  {colors: true, depth: null}));

                  for(var i=0;i<results.length;i++)
                    {
                        var tempObj = {};
                        tempObj.url = results[i].url;
                        tempObj.snippet = results[i].title;
                        tempObj.thumbnail = results[i].thumbnail.url;
                        tempObj.context = results[i].sourceUrl;

                        resArr.push(tempObj);
                    }
                    return callback(null, resArr);
                }
          }
        );
  }

}

module.exports = bingSearchHandler;