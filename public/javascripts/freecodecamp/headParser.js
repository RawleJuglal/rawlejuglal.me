'use strict';

function headParser () {
  this.headObj = function(head){
      var obj = {};
      
      obj.ipaddress = getAddress(head['x-forwarded-for']);
      obj['language'] = getLanguage(head['accept-language']);
      obj['software'] = getSoftware(head['user-agent']);
    return obj;
  };
  
  function getAddress(ip){
      return ip;
  };
  
  function getLanguage(lang){
    var patt = new RegExp(/\w{2}-\w{2}/g);
    var match = patt.exec(lang);
    var result='';
    
    if(match.length<=1)
      {
        result+=match[0];
      }
    else
      {
        for(var i=0;i<match.length;i++)
          {
            result+=match[i]+','
          }
          result = result.slice(0,-1);
      }
      return result;
  };
  
  function getSoftware(agent){
    var patt = new RegExp(/\(([^()]+)\)/g);
    var match = patt.exec(agent);
      return match[1];
  };
  
}

module.exports = headParser;
