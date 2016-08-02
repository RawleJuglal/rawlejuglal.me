app.controller('SuggestionsController',['$scope','$routeParams','suggestions',function($scope, $routeParams, suggestions){
    var swap = 1;
    $scope.post = suggestions.posts[$routeParams.id];
    
    $scope.addComment = function() {
         $scope.post.comments.push({
             body:$scope.body,
             upvotes:0
         });
        };
        
    $scope.upVote=function(index){
    if(swap)
        {
            $scope.post.comments[index].upvotes += 1;
            $('.thumbsUp .fa').eq(index).css('color','red');
            swap=0;
        }
    else
        {
            $scope.post.comments[index].upvotes -= 1;
            $('.thumbsUp .fa').eq(index).css('color', 'black');
            swap=1;
        }
        
  };
}]);