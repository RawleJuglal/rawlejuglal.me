app.directive('redeyePhotography', function(){
   return {
       restrict:"E",
       scope:{
           listing:'='
       },
       templateUrl:'/Directives/codecademy/redeyePhotography.html'
   }; 
});