var compArray = [];

   
   function startGame(){
      $('.btn-success, .btn-danger').prop('disabled', true);
      var strict = checkStrict(createCompSequence(0,20));
      console.log('This is strict: '+ strict);
      var sequence = compArray;
      console.log(sequence);
   }
   
   function reset(){
      
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
   
