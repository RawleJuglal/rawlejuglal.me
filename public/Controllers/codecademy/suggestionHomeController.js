app.controller('suggestionHomeController', [ '$scope', 'suggestions', function($scope, suggestions) {
    var swap=1;
    var picArray = ['https://upload.wikimedia.org/wikipedia/commons/f/fb/Jefferson_Pier_and_Washington_Monument.jpg','http://www.torange.us/photo/14/13/War-Monuments-1353592543_19.jpg','https://upload.wikimedia.org/wikipedia/commons/c/cb/U.S._Navy_Memorial_in_Washington,_D.C..JPG','https://upload.wikimedia.org/wikipedia/commons/4/48/Verdun_-_Montfaucon_-_American_Monument_-_Cemetery_-_WW1.JPG','https://upload.wikimedia.org/wikipedia/commons/b/b0/Monument_Ave_Robert_E._Lee.jpg','https://upload.wikimedia.org/wikipedia/commons/0/05/Canada_US_border.JPG','https://upload.wikimedia.org/wikipedia/commons/c/c6/Defense.gov_photo_essay_071108-F-6655M-338.jpg','http://res.freestockphotos.biz/pictures/11/11579-silhouette-of-the-statue-of-liberty-monument-at-night-pv.jpg','https://upload.wikimedia.org/wikipedia/commons/f/f0/Henry_Clay\'s_grave_in_Lexington_-_DSC09049.JPG','https://upload.wikimedia.org/wikipedia/commons/3/37/Sculpture_pont_de_l\'alma_Paris_FRA.jpg']
    $scope.posts = suggestions.posts;
    
    $scope.addSuggestion = function() {
         
        //if input empty, don't submit
        if(!$scope.title || $scope.title === "") {
        return;
        }
         
        $scope.avatar =picArray[Math.floor(Math.random() * (9 - 0 + 1)) + 0];
        //push suggestion posts in suggestions.js
        $scope.posts.push({
        title: $scope.title,
        avatar:$scope.avatar,
        upvotes: 0,
        comments:[]
        });
         
        //after submit, clear input
        $scope.title = '';
        };
        
        $scope.upVote=function(index){ 
            if(swap) 
            { 
                $('.interfaceBox .fa').eq(index).removeClass('fa-heart-o').addClass('fa-heart'); 
                $scope.posts[index].upvotes += 1; 
                swap = 0; 
            } 
            else 
            { 
                $('.interfaceBox .fa').eq(index).removeClass('fa-heart').addClass('fa-heart-o'); 
                $scope.posts[index].upvotes -= 1; 
                swap = 1; 
            } 
            };
}]);