var compArray = [],userArray = [], tempo = 3000;

var audioArray = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3','https://s3.amazonaws.com/freecodecamp/simonSound2.mp3','https://s3.amazonaws.com/freecodecamp/simonSound3.mp3','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'];
   
   function startGame(){
      $('.btn-success, .btn-danger').prop('disabled', true);
      var strict = checkStrict(createCompSequence(0,20));
      var sequence = compArray;
      console.log(sequence);
      playComputerSequence(sequence, tempo);
   }
   
   function reset(){
      compArray = [];
      userArray = [];
      $('.count span').text('1');
      $('.btn-success, .btn-danger').prop('disabled', false);
   }
   
   function toggleStrict(){
      var cList = getClassList();
      if(cList[2]=='fa-lock')
         {
            $('.fa').removeClass('fa-lock').addClass('fa-unlock-alt');
         }
      else
         {
            $('.fa').removeClass('fa-unlock-alt').addClass('fa-lock');
         }
   }

/*INTERFACE FUNCTIONS ABOVE THIS LINE -------------------------*/

   function getClassList(){
      return document.getElementById('lock').className.split(/\s+/);
   }
   
   function checkStrict(callback){
      var lock = getClassList();
       if(lock[2] == 'fa-lock')
         {
            callback;
            return true;
         }
       else
         {
            callback;
            return false;
         }
   }
   
   function createCompSequence(start, end){
      if(start === end)
         {
            return compArray;
         }
      else if(start>end)
         {
            console.log('Error in createCompSequence');
         }
      else
         {
           compArray.push(getRandomInt(1,5));
           createCompSequence(start+1,end);
         }
   }
   
   function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
   }
   
   function playComputerSequence(seq,speed){
      //Preventing pressing not working
      /*$('.field').each(function(){
         $(this).on().off('click',function(e){
            e.preventDefault();
         });
      });*/
      var count = Number($('.count span').text());
      var i = 0;
      var interval = setInterval(function(){
         $('#'+seq[i]).addClass('on');
         var audio = new Audio(audioArray[seq[i]-1]);
         setTimeout(function(){
            audio.play();
            $('#'+seq[i]).removeClass('on');
            i++;
         },500)
         setTimeout(function(){
            if(i == count)
            {
               clearInterval(interval);
            }
         },500);
      },speed);
      $('.field').each(function(){
         $(this).off().on('click',recordUserChoice);
      });
   }
   
   function recordUserChoice(){
      userArray.push(this.id);
      var audio = new Audio(audioArray[this.id-1]);
      setTimeout(function(){
         audio.play();
      },500);
      checkSequence(userArray);
      
      
   }

   function checkSequence(uArray){
      var count = Number($('.count span').text());
      if(Number(uArray[uArray.length-1]) != compArray[uArray.length-1])
         {
            if(checkStrict())
               {
                  reset();
               }
            else
               {
                  userArray = [];
                  alert('Incorrect Choice, try sequence again');
               }
         }
      else
         {
            if(uArray.length == 20)
               {
                  setTimeout(function(){
                     alert("You are a winner");
                  },800)
               }
            else if(uArray.length == count)
               {
                  $('.count span').text(count+1);
                  if(count == 8)
                     {  
                        userArray = [];
                        tempo = 2000;
                        setTimeout(function(){
                           playComputerSequence(compArray, tempo);
                        },500);
                     }
                  else if(count == 15)
                     {
                        userArray = [];
                        tempo = 1200;
                        setTimeout(function(){
                           playComputerSequence(compArray, tempo);
                        },500);
                     }
                  else
                     {
                        userArray = [];
                        setTimeout(function(){
                           playComputerSequence(compArray, tempo);
                        },500);
                     }
               }
            else
               {
                  console.log('waiting for more selections');
               }
         }
   }