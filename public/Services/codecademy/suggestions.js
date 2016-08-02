app.factory('suggestions', [function(){
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
comments: ['Seriously, not cost effective'],
},
{
title: 'Become more isolationist and bring our troops back home.',
avatar:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Bunker_hill_2009.JPG',
upvotes: 3,
comments: [{body:'sounds a little grim',upvotes:0}],
}
]
};
return demoSuggestions;
}]);