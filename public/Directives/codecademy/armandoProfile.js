app.directive('armandoProfile', function(){
   return {
       restrict:"E",
       scope:{
           listing:'='
       },
       templateUrl:'/Directives/codecademy/armandoProfile.html'
   }; 
});