app.directive('adoptlyAbout', function(){
   return {
       restrict:"E",
       scope:{
           listing:'='
       },
       templateUrl:'/Directives/codecademy/adoptlyAbout.html'
   }; 
});