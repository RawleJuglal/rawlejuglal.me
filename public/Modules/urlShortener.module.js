'use strict'

module.exports.checkValidUrl = function(url){
    var pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
    return pattern.test(url);
}

module.exports.assignRanNbr = function(){
    var randNbr = Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
    return randNbr;
}

module.exports.createUrlObj = function(url, num){
    var urlObj = {};
    urlObj.original_url = url;
    urlObj.short_url = 'https://rawlejuglal-me-rawlejuglal-1.c9users.io/freecodecamp/'+num;
    return urlObj;
}