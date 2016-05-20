app.directive('articleShift', function(){
   return {
       restrict:"E",
       scope:{
           listing:'='
       },
       templateUrl:'/Directives/codecademy/articleShift.html'
   }; 
});