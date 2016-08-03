app.controller('bplScoreController',['$scope',function($scope){
    $scope.test = 'is working';
    $scope.scores = [
    {
        period:'Final',
        homeTeam:{
            home_score:'00',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Norwich_City.svg/150px-Norwich_City.svg.png',
            home_city:'Norwich City',
            home_mascot:'Canaries'
        },
        visitorTeam:{
           visitor_score:'03',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/125px-Tottenham_Hotspur.svg.png',
            visitor_city:'Tottenham',
            visitor_mascot:'Spurs' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'00',
            home_logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Arsenal_Crest_1994-1995.svg/340px-Arsenal_Crest_1994-1995.svg.png',
            home_city:'Arsenal',
            home_mascot:'Gunners'
        },
        visitorTeam:{
           visitor_score:'00',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/200px-FC_Southampton.svg.png',
            visitor_city:'Southampton',
            visitor_mascot:'Saints' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'02',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/West_Ham_United_FC.svg/200px-West_Ham_United_FC.svg.png',
            home_city:'West Ham United',
            home_mascot:'Irons'
        },
        visitorTeam:{
           visitor_score:'00',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Aston_Villa.svg/121px-Aston_Villa.svg.png',
            visitor_city:'Aston Villa',
            visitor_mascot:'Lions' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'00',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Logo_Sunderland.svg/200px-Logo_Sunderland.svg.png',
            home_city:'Sunderland',
            home_mascot:'Black Cats'
        },
        visitorTeam:{
           visitor_score:'01',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/410px-Manchester_City_FC_badge.svg.png',
            visitor_city:'Manchester City',
            visitor_mascot:'The Sky Blues' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'02',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/220px-Leicester_City_crest.svg.png',
            home_city:'Leicester City',
            home_mascot:'Foxes'
        },
        visitorTeam:{
           visitor_score:'00',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/222px-Liverpool_FC.svg.png',
            visitor_city:'Liverpool',
            visitor_mascot:'Reds' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'03',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/220px-Manchester_United_FC_crest.svg.png',
            home_city:'Manchester United',
            home_mascot:'Red Devils'
        },
        visitorTeam:{
           visitor_score:'00',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stoke_City_FC.svg/220px-Stoke_City_FC.svg.png',
            visitor_city:'Stoke City',
            visitor_mascot:'Potters' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'01',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/150px-Crystal_Palace_FC_logo.svg.png',
            home_city:'Crystal Palace',
            home_mascot:'Eagles'
        },
        visitorTeam:{
           visitor_score:'02',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/150px-AFC_Bournemouth_%282013%29.svg.png',
            visitor_city:'Bournemouth',
            visitor_mascot:'Cherries' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'01',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/West_Bromwich_Albion.svg/150px-West_Bromwich_Albion.svg.png',
            home_city:'West Brom Albion',
            home_mascot:'Baggies'
        },
        visitorTeam:{
           visitor_score:'01',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Swansea-City-Logo.png/200px-Swansea-City-Logo.png',
            visitor_city:'Swansea City',
            visitor_mascot:'Swans' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'00',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Watford.svg/175px-Watford.svg.png',
            home_city:'Watford',
            home_mascot:'Golden Boys'
        },
        visitorTeam:{
           visitor_score:'00',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png',
            visitor_city:'Chelsea',
            visitor_mascot:'Blues' 
        }
    },
    {
        period:'Final',
        homeTeam:{
            home_score:'03',
            home_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/220px-Everton_FC_logo.svg.png',
            home_city:'Everton',
            home_mascot:'Blues'
        },
        visitorTeam:{
           visitor_score:'00',
            visitor_logo:'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/230px-Newcastle_United_Logo.svg.png',
            visitor_city:'Newcastle United',
            visitor_mascot:'Magpies' 
        }
    }
  ]  
}]);