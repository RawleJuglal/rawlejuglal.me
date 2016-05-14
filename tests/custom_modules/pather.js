var path = require('path');

module.exports = {
    parse: function(url){
        var parsedPath = path.parse(url);
        console.log(parsedPath);
    },
    normalize:function(url){
        var normalized = path.normalize(url);
        console.log(normalized);
    },
    join:function(){
        var temp = '';
        for(var i = 0;i<arguments.length;i++)
            {
                temp = path.join(temp,arguments[i]);
            }
            return temp;
    }
};