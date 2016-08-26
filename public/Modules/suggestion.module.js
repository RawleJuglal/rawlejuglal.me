var suggestionApp = angular.module('suggestionBox', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/home.html',
        })
        .when('/suggestion/:id',{
          templateUrl:'/suggestions.html'
        })
        .otherwise({
            redirectTo:'/'
        });
    }]);

