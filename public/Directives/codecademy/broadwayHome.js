app.directive('broadwayHome', function(){
   return {
       restrict:"E",
       scope:{
           listing:'='
       },
       templateUrl:'/Directives/codecademy/broadwayHome.html'
   }; 
});