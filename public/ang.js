var app= angular.module('codecademy',['ngRoute']);

app.config(function ($routeProvider){
    console.log('Entered app config');
	$routeProvider.when('/#',{
  	controller:'codecademy/suggestionHomeController',
    templateUrl:'views/suggestionBoxRoutes/suggestionHome.html'
  }).when('#/suggestion/:id',{
      controller:'codecademy/SuggestionsController',
      templateUrl:'views/suggestionBoxRoutes/suggestionsInput.html'
  }).otherwise({
    redirectTo:'views/error.ejs'
  });
  console.log('Exited app config')
});