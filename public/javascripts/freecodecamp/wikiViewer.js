function SearchResult(title, snippet){
	this.snippet=snippet;
	this.title=title;
	this.url='';
	this.setUrl = function(url){
		this.url=url;
	}
}

function displayResults(myResults){	
	for(var i=0; i<myResults.length; i++){
		var headerTag = "<span class='link-header'>"+myResults[i].title+"</span></br>";
		var bodyTag = "<span class='link-body'>..."+myResults[i].snippet+"</span>";
		var final = "<a class='list-group-item' href='"+myResults[i].url+"' target='_blank'>"+headerTag+bodyTag+"</a>";
		$("ul").append(final);
	}
}


function callApi(){
    console.log('Entered API call')
  //wiki query string using search module on searchbox value
  var apiCallOne ="https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+$(".search-bar").val()+"&format=json&callback=?";
  
  //Actual api call saving as json object called data
		  $.getJSON(apiCallOne, function(data){
        console.log(data);
			    var myResults = [];
			    var allTitles = "";
        //while i is less than data query search object length
			    for(var i=0; i<data.query.search.length; i++){
            //new result variable is a Searchresult object w/ title value and snippet
				    var result = new SearchResult(data.query.search[i].title, data.query.search[i].snippet);
            //push object to array
				    myResults.push(result);
            //add to string the title and pipe for a second call that will call all these pages between pipes
				    allTitles += data.query.search[i].title + "|";
            console.log(allTitles);
			    }
        //Second wiki query string using inprop=url for links and titles will get them for all the pages in the allTitles variable seperated w/ pipe
			var apiCallTwo = "https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&titles="+allTitles.substr(0, allTitles.length-1)+"&format=json&callback=?";
        //Second json call saving as json object called data2
        $.getJSON(apiCallTwo, function(data2){
          console.log("This is data2");
          console.log(data2);
          //creating a var pages that stores the object at data2.query.pages
          var pages = data2.query.pages;
          //a counter in order to set the url for each object at the myResults index specified
          var counter = 0;
          //for each key value in the pages object
           for (var single in pages) {
             //myResultIndex setURL function sets url to pages current Object fullurl
              myResults[counter].setUrl(pages[single].fullurl);	
             //up the counter
              counter++;
            }
          //call display results
            displayResults(myResults);
           });	
        });
}

$(document).ready(function(){
	var page_top = $(window).scrollTop();
	
	  $("#search-submit").submit(function(e){
		  e.preventDefault();
		
		  $("ul").empty();
		  callApi();
		});		
});