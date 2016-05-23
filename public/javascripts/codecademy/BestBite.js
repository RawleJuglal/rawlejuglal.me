$(document).ready(function(){
    $('#navigation').on('click','li',function(e){
      var previous = $(this).closest(".nav").children(".active");
      previous.removeClass('active'); // previous list-item
      $(e.target).closest('li').addClass('active'); // activated list-item
    });
});