$( document ).ready(function() {
  var listHTML = '<div class="list-group"><a id="About" href="#" class="list-group-item active">About</a><a id="Animals" href="#" class="list-group-item">Animals</a><a id="Adoptly" href="#" class="list-group-item">Adoptly</a><a id="Blog" href="#" class="list-group-item">Blog</a><a id="Events" href="#" class="list-group-item">Events</a></div>'
  var pillsHTML ='<ul id="navigation" class="nav nav-pills"><li id="About" role="presentation" class="active"><a href="#">About</a></li><li id="Animals" role="presentation"><a href="#">Animals</a></li><li id="Adoptly" role="presentation"><a href="#">Adoptly</a></li><li id="Blog" role="presentation"><a href="#">Blog</a></li><li id="Events" role="presentation"><a href="#">Events</a></li></ul>'
    
    function checkWidth() {
        var windowsize = $(window).width();
        var current = document.getElementsByClassName('active');
        var displayText = current[0].textContent;
        
        if (windowsize > 425) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $( "#navigation" ).empty();
            $( "#navigation" ).html(pillsHTML);
            checkActive(displayText,true);
        }
        else
            {
               $( "#navigation" ).empty();
               $( "#navigation" ).html(listHTML);
               checkActive(displayText,false);
            }
    }
    
    function checkActive(currentTab, bool){
        console.log(bool);
        if(bool)
            {
               $('li').removeClass('active');
               var element = document.getElementById(currentTab);
               $(element).addClass('active');
            }
        else
            {
                $('.list-group-item').removeClass('active');
                var element = document.getElementById(currentTab);
                $(element).addClass('active');
            }
    }
    
    checkWidth();
    // Bind event listener
    $( window ).resize(checkWidth);
      
  $('#navigation').on('click','.list-group-item',function(e){
    var previous = $(this).closest(".list-group").children(".active");
    previous.removeClass('active'); // previous list-item
    $(e.target).addClass('active'); // activated list-item
  });
  
  $('#navigation').on('click','li',function(e){
      var previous = $(this).closest(".nav").children(".active");
      previous.removeClass('active'); // previous list-item
      $(e.target).closest('li').addClass('active'); // activated list-item
    });
});
