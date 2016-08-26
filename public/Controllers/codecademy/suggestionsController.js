suggestionApp.controller('suggestionController',['suggestions', function(suggestions){
    var self = this;
    var swap=1;
    var picArray = ['https://upload.wikimedia.org/wikipedia/commons/f/fb/Jefferson_Pier_and_Washington_Monument.jpg','http://www.torange.us/photo/14/13/War-Monuments-1353592543_19.jpg','https://upload.wikimedia.org/wikipedia/commons/c/cb/U.S._Navy_Memorial_in_Washington,_D.C..JPG','https://upload.wikimedia.org/wikipedia/commons/4/48/Verdun_-_Montfaucon_-_American_Monument_-_Cemetery_-_WW1.JPG','https://upload.wikimedia.org/wikipedia/commons/b/b0/Monument_Ave_Robert_E._Lee.jpg','https://upload.wikimedia.org/wikipedia/commons/0/05/Canada_US_border.JPG','https://upload.wikimedia.org/wikipedia/commons/c/c6/Defense.gov_photo_essay_071108-F-6655M-338.jpg','http://res.freestockphotos.biz/pictures/11/11579-silhouette-of-the-statue-of-liberty-monument-at-night-pv.jpg','https://upload.wikimedia.org/wikipedia/commons/f/f0/Henry_Clay\'s_grave_in_Lexington_-_DSC09049.JPG','https://upload.wikimedia.org/wikipedia/commons/3/37/Sculpture_pont_de_l\'alma_Paris_FRA.jpg']
    self.posts = suggestions.posts;
    
    self.addSuggestion = function() {
         
        //if input empty, don't submit
        if(!self.title || self.title === "") {
        return;
        }
         
        self.avatar =picArray[Math.floor(Math.random() * (9 - 0 + 1)) + 0];
        //push suggestion posts in suggestions.js
        self.posts.push({
            title: self.title,
            avatar:self.avatar,
            upvotes: 0,
            comments:[]
        });
         
        //after submit, clear input
        self.title = '';
        };
        
        self.upVote=function(index){ 
            if(swap) 
                { 
                    $('.interfaceBox .fa').eq(index).removeClass('fa-heart-o').addClass('fa-heart'); 
                    self.posts[index].upvotes += 1; 
                    swap = 0; 
                } 
            else 
                { 
                    $('.interfaceBox .fa').eq(index).removeClass('fa-heart').addClass('fa-heart-o'); 
                    self.posts[index].upvotes -= 1; 
                    swap = 1; 
                } 
            };
}])
    .controller('commentsController',['$routeParams','suggestions', function($routeParams, suggestions){
        var self = this;
        var swap = 1;
        self.post = suggestions.posts[$routeParams.id];
        console.log(self.post)
        self.addComment = function() {
             self.post.comments.push({
                 body:self.body,
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
    }])
    .factory('suggestions', [function(){
        var demoSuggestions = {
        posts: [
            {
                title: 'Term limits on congress',
                avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7a/US_Navy_040521-N-9909C-006_Established_by_the_American_Battle_Monuments_Commission,_the_memorial_honors_all_military_veterans_of_World_War_II.jpg',
                upvotes: 15,
                comments: [
                    {body:'love the idea',upvotes:0},
                    {body:'let\'s make this happen', upvotes:0},
                          ]
            },
            {
                title: 'Every two years a popular vote on two issues that passes into law without Congress.',
                avatar:'https://upload.wikimedia.org/wikipedia/commons/3/3e/The_Marine_Corps_War_Memorial_in_Arlington,_Va.,_can_be_seen_prior_to_the_Sunset_Parade_June_4,_2013_130604-M-MM982-036.jpg',
                upvotes: 9,
                comments: [
                    {body:'Only if the judicial branch still rules on its constitutionality.', upvotes:0},
                    {body:'Do you really think people would come out to vote?', upvotes:0},
                    {body:'I\'d be down for this',upvotes:0}
                          ]
            },
            {
                title: 'Create a biometric scanner for all those entering the country.',
                avatar:'https://upload.wikimedia.org/wikipedia/commons/e/ea/Washington_Monument_-_01.jpg',
                upvotes: 7,
                comments:[
                            {body:'Seriously, not cost effective', upvotes:0},
                        ],
            },
            {
                title: 'Become more isolationist and bring our troops back home.',
                avatar:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Bunker_hill_2009.JPG',
                upvotes: 3,
                comments: [
                            {body:'sounds a little grim',upvotes:0}
                          ],
            }
        ]
    };
        return demoSuggestions;
        }]);