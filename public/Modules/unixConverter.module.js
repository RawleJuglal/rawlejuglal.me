'use strict'

module.exports.unixHandler = function(input){
    var obj = {};
    if(Date.parse(input))
        {
            obj.unix = Date.parse(input)/1000;
            obj.natural = input;
        }
    else if(!isNaN(input))
        {
            obj.unix = input;
            obj.natural = timeConverter(input);
        }
      else
        {
            obj.unix = null;
            obj.natural = null;
        }
    return obj;
}

function timeConverter(timestamp) {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(timestamp*1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // Hours part from the timestamp
        var year = date.getFullYear();
        // Minutes part from the timestamp
        var day = date.getDate();
        // Seconds part from the timestamp
        var month = months[date.getMonth()];
        
        // Will display time in 10:30:23 format
        var formattedTime = month + ' ' + day + ', ' + year;
        return formattedTime;
    }