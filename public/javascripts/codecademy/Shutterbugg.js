$( document ).ready(function() {
  var contentHTML = '<h1>Explore</h1><p>Explore moments from your friends and family. Shutterbugg makes it easy to see what\'s happening in the world and take in everything around you.</p>'
  var imgHTML ='<img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/shutterbugg/explore.png\'>'
    function checkWidth() {
        var windowsize = $(window).width();
        
        if (windowsize < 426) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $( "#alternate","aImg" ).empty();
            $( "#alternate" ).html(imgHTML);
            $( "#aImg").html(contentHTML);
        }
        else
            {
                $( "#alternate","aImg" ).empty();
                $( "#alternate" ).html(contentHTML);
                $( "#aImg").html(imgHTML);
            }
    }
    
    checkWidth();
    // Bind event listener
    $( window ).resize(checkWidth);
});
