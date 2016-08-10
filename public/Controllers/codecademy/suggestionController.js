app.controller('SuggestionsController',['$routeParams','suggestions',function( $routeParams, suggestions){
    var self = this;
    var swap = 1;
    self.post = suggestions.posts[$routeParams.id];
    
    self.addComment = function() {
         self.post.comments.push({
             body:$scope.body,
             upvotes:0
         });
        };
        
    self.upVote=function(index){
    if(swap)
        {
            self.post.comments[index].upvotes += 1;
            $('.thumbsUp .fa').eq(index).css('color','red');
            swap=0;
        }
    else
        {
            self.post.comments[index].upvotes -= 1;
            $('.thumbsUp .fa').eq(index).css('color', 'black');
            swap=1;
        }
        
  };
}]);