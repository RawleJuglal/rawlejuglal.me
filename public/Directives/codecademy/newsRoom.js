app.directive('newsRoom', function(){
   return {
       restrict:"E",
       scope:{
           listing:'='
       },
       templateUrl:'/Directives/codecademy/newsRoom.html'
   }; 
});