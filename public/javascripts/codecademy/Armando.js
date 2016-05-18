$( document ).ready(function(){
   $('.navDiv').on('click','li',function(e){
      var previous = $(this).closest(".nav").children(".target");
      previous.removeClass('target'); // previous list-item
      $(e.target).closest('li').addClass('target'); // activated list-item
    }); 
});