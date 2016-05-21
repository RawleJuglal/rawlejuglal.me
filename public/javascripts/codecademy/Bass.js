$( document ).ready(function() {
  var contentHTML = '<h1 class=\'text-center\'>Listen Everywhere</h1><p class=\'text-center\'>Take your music with you everywhere you go. Listen for free for free on any device - mobile, tablet, and your computer.</p>'
  var imgHTML ='<img class=\'img-responsive\' src=\'https://s3.amazonaws.com/codecademy-content/projects/bass/everywhere.svg\'>'
  var singleHTML = '<div class=\'row\'><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>BLOG</li><li><a href=\'#\'>Install</a></li><li><a href=\'#\'>Mobile</a></li></ul></div><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>ABOUT</li><li><a href=\'#\'>Blog</a></li><li><a href=\'#\'>Team</a></li><li><a href=\'#\'>Jobs</a></li></ul></div><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>SUPPORT</li><li><a href=\'#\'>Help Center</a></li><li><a href=\'#\'>Get Started</a></li><li><a href=\'#\'>Contact Us</a></li></ul></div><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>COMMUNITY</li><li><a href=\'#\'>Facebook</a></li><li><a href=\'#\'>Twitter</a></li><li><a href=\'#\'>Google+</a></li></ul></div><!--End of col-md-3--></div><!--End of row-->';
  var splitHTML = '<div class=\'row\'><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>BLOG</li><li><a href=\'#\'>Install</a></li><li><a href=\'#\'>Mobile</a></li></ul></div><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>ABOUT</li><li><a href=\'#\'>Blog</a></li><li><a href=\'#\'>Team</a></li><li><a href=\'#\'>Jobs</a></li></ul></div></div><!--End of row--><div class=\'row\'><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>SUPPORT</li><li><a href=\'#\'>Help Center</a></li><li><a href=\'#\'>Get Started</a></li><li><a href=\'#\'>Contact Us</a></li></ul></div><div class=\'col-xs-6 col-sm-3\'><ul class=\'no-pad\'><li>COMMUNITY</li><li><a href=\'#\'>Facebook</a></li><li><a href=\'#\'>Twitter</a></li><li><a href=\'#\'>Google+</a></li></ul></div><!--End of col-md-3--></div><!--End of row-->';
    function checkWidth() {
        var windowsize = $(window).width();
        
        if (windowsize < 426) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $( "#alternate","aImg" ).empty();
            $( "#alternate" ).html(imgHTML);
            $( "#aImg").html(contentHTML);
            $('#footContainer').empty();
            $('#footContainer').html(splitHTML);
        }
        else
            {
                $( "#alternate","aImg" ).empty();
                $( "#alternate" ).html(contentHTML);
                $( "#aImg").html(imgHTML);
                $('#footContainer').empty();
                $('#footContainer').html(singleHTML);
                $('.footer ul li:first-child').css('padding-bottom','8px');
            }
    }
    
    checkWidth();
    // Bind event listener
    $( window ).resize(checkWidth);
});
