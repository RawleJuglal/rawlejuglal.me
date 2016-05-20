//Rawle JavaScript Document

var main = function(){
  $('.article','article-Shift').addClass('current');
    
  /*$('article-Shift .article').click(function(){
        $('.article').removeClass('current');
          $('.description').hide();
          });
  $('article-Shift .article').click(function(){
      $(this).addClass('current');
      $(this).children('.description').show();
      });  
    $(document).keypress(function(event){
        if(event.which === 111)
            {
                $('.current').children('.description').toggle();
            }
        else if(event.which === 110)
            {
                var currentArticle = $('.current');
                var nextArticle = currentArticle.next();
                
                currentArticle.removeClass('current');
                nextArticle.addClass('current');
            }
        });*/
}


$(document).ready(main);