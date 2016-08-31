'use strict';

function LatestSearchHandler () {
    var searchArray = [];
    
	this.addSearchTerm = function (keyword) {
		var tempObj ={};
		tempObj.term = keyword;
		tempObj.when = new Date();
		
		searchArray.push(tempObj);
	};

    this.latestSearches = function(){
        return searchArray;
    };
	

}

module.exports = LatestSearchHandler;
