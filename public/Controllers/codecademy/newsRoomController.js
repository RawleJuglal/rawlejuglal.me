app.controller('newsRoomController', ['$scope', function($scope){
    $scope.test = 'is working';
    
    $scope.articles = [
            {
                date:'November 5, 2014',
                title:'Move Launches in London'
            },
            {
                date:'November 5, 2014',
                title:'Introducing Excursion'
            },
            {
                date:'November 5, 2014',
                title:'Improvements to Shutterbugg arrive'
            }]
            
    $scope.events = [
            {
                date:'November 8-12,2014',
                title:'Innovation Cloud 2014'
            },
            {
                date:'November 21,2014',
                title:'LL Retrospective'
            },
            {
                date:'December 5,2014',
                title:'M.O.N.E.Y. Launch Event'
            }]
}]);