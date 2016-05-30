$( document ).ready(function() {
  var tabletHTML = '<div class=\'row\'><div class=\'col-sm-6\'><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p1.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p2.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p3.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p4.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p5.jpg\'/></div><!--End of col-sm-6--><div class=\'col-sm-6\'><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p6.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p7.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p8.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p9.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p10.jpg\'/></div><!--End of col-sm-6--></div><!--End of row-->'
  var standardHTML ='<div class=\'row\'><div class=\'col-xs-12 col-md-4\'><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p1.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p2.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p3.jpg\'/></div><!--End of col-xs-12--><div class=\'col-xs-12 col-md-4\'><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p4.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p5.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p6.jpg\'/></div><!--End of col-xs-12--><div class=\'col-xs-12 col-md-4\'><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p7.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p8.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p9.jpg\'/><img class=\'center-block\' src=\'https://s3.amazonaws.com/codecademy-content/projects/headlines/p10.jpg\'/></div><!--End of col-xs-12--></div><!--End of row--> '
    
    function checkWidth() {
        var windowsize = $(window).width();
        
        if ((windowsize > 425) && (windowsize < 769)) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $( "#card-section" ).empty();
            $( "#card-section" ).html(tabletHTML);
        }
        else
            {
               $( "#card-section" ).empty();
               $( "#card-section" ).html(standardHTML);
            }
    }
    
    checkWidth();
    // Bind event listener
    $( window ).resize(checkWidth);
    
});
