app.controller('redeyePhotographyController', ['$scope', function($scope){
    $scope.test = 'is working';
    
    $scope.photos = [
        {
                img:'https://s3.amazonaws.com/codecademy-content/projects/red-eye-photography/p1.jpg',
            },
            {
                img:'https://s3.amazonaws.com/codecademy-content/projects/red-eye-photography/p2.jpg',
            },
            {
                img:'https://s3.amazonaws.com/codecademy-content/projects/red-eye-photography/p3.jpg',
            },
            {
                img:'https://s3.amazonaws.com/codecademy-content/projects/red-eye-photography/p4.jpg',
            },
            {
                img:'https://s3.amazonaws.com/codecademy-content/projects/red-eye-photography/p5.jpg',
            },
            {
                img:'https://s3.amazonaws.com/codecademy-content/projects/red-eye-photography/p6.jpg',
            }]
}]);