//Rawle JavaScript Document

function checkPostLimit(){
    var postLength = $('.status-box').val().length;
    var charactersLeft = 140 -postLength;
    
    if(charactersLeft < 0)
        {
            return false;
        }
    else
        {
            return true;
        }
}

var main = function(){
  $('.btn').click(function(){
      var post = $('.status-box').val();
      postLimit = checkPostLimit();
      if(postLimit && (post !== ''))
        {
            $('<li>').text(post).prependTo('#posts');
            $('.status-box').val('');
            $('.counter').text('140');
        }
      $('.btn').addClass('disabled');
    });
      
    $('.status-box').keyup(function(){
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
        if(charactersLeft < 0)
            {
                $('.btn').addClass('disabled');    
            }
        else if(charactersLeft === 140)
            {
                $('.btn').addClass('disabled');    
            }
        else
            {
                $('.btn').removeClass('disabled');    
            }
        });
        
    $('.btn').addClass('disabled');
}

$(document).ready(main);