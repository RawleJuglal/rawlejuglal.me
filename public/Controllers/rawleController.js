app.controller('rawleProfileController', ['$scope', function($scope){
    $scope.test = 'is working';
    
    $scope.notes = [
            {
                url:'codecademy/Shutterbugg',
                title:'Shutterbugg',
                faImg:' fa-bug',
                faSize:' fa-2x',
                desc:'Capture the moments that matter'
            },
            {
                url:'codecademy/RedEyePhotography',
                title:'Red Eye Photography',
                faImg:' fa-eye',
                faSize:' fa-3x',
                desc:'Photography by Matthew Wiebe'
            },
            {
                url:'codecademy/Pocketbook',
                title:'Pocketbook',
                faImg:' fa-book',
                faSize:' fa-4x',
                desc:'Ditch the pen & paper'
            }]
}]);