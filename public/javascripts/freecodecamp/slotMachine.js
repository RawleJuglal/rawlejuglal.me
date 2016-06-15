//Rawle JavaScript Document

  function runSlots(){
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["https://i.imgur.com/9H17QFk.png", "https://i.imgur.com/9RmpXTy.png", "https://i.imgur.com/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    $('.logger').html('');
    $('.logger').html('<p class=\'text-center\'>Not A Win</p>');
    
    // Only change code below this line.
    $('.slot').empty();
    $($('.slot')[0]).html('<img class=\'center-block\' src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img class=\'center-block\' src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img class=\'center-block\' src = "' + images[slotThree-1] + '">');
    
    
    // Only change code above this line.
    
    if(slotOne !== slotTwo || slotTwo !== slotThree){
      return null;
    }
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $('.logger').html('<p class=\'text-center\'>'+slotOne+' '+slotTwo+' '+slotThree+'</p>');

    }
    
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function(){
     $('.btn-slot').click(function(){
       runSlots();
     });
   });