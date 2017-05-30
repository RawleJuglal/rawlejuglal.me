app.controller('rawleProfileController', ['$scope', function($scope){
    $scope.test = 'is working';
    
    $scope.notes = [
            {
                url:'http://lychee-sundae-59213.herokuapp.com/',
                title:'ATTOKC',
                faImg:' fa-hand-lizard-o',
                faSize:' fa-3x',
                desc:'Teaching OKC BJJ and more'
            },
            {
                url:'https://mighty-ocean-59261.herokuapp.com/',
                title:'Spiel',
                faImg:' fa-comment',
                faSize:' fa-3x',
                desc:'Get it off your chest'
            },
            /*{
                url:'freecodecamp/isal',
                title:'Image Search Abstraction Layer',
                faImg:' fa-search',
                faSize:' fa-3x',
                desc:'Using Bing to find images'
            },*/
            {
                url:'freecodecamp/unixTimeStamp',
                title:'Unix Time Stamp Converter',
                faImg:' fa-clock-o',
                faSize:' fa-3x',
                desc:'It\'s just a number'
            },
            {
                url:'freecodecamp/fileMetaData',
                title:'File Meta Data Microservice',
                faImg:' fa-upload',
                faSize:' fa-3x',
                desc:'How many bytes in your file'
            },
            {
                url:'freecodecamp/urlShortener',
                title:'Url Shortener',
                faImg:' fa-compress',
                faSize:' fa-3x',
                desc:'Less can be more'
            },
            {
                url:'freecodecamp/headerParser',
                title:'Request dot headers',
                faImg:' fa-server',
                faSize:' fa-3x',
                desc:'A few of your headers'
            },
            {
                url:'codecademy/suggestionBox',
                title:'Political Suggestion Box',
                faImg:' fa-flag',
                faSize:' fa-3x',
                desc:'Have an idea the people should vote on'
            },
            {
                url:'codecademy/jlProfiles',
                title:'Justice League Profiles',
                faImg:' fa-balance-scale',
                faSize:' fa-3x',
                desc:'Original Justice League'
            },
            {
                url:'codecademy/bplScores',
                title:'Bpl Scores Week 24',
                faImg:' fa-futbol-o',
                faSize:' fa-3x',
                desc:'English Premier League'
            },
            {
                url:'codecademy/favWrestlemania',
                title:'Rate your favorite Wrestlemania',
                faImg:' fa-star',
                faSize:' fa-3x',
                desc:'It\'s Wrestlemania Time!'
            },
            {
                url:'codecademy/concacafr5',
                title:'CONCACAF Roud 5',
                faImg:' fa-futbol-o',
                faSize:' fa-4x',
                desc:'I believe..'
            },
            {
                url:'codecademy/luchaUnderground',
                title:'Lucha Underground Plug',
                faImg:' fa-television',
                faSize:' fa-3x',
                desc:'A much darker place'
            },
            {
                url:'codecademy/sunnyMenu',
                title:'Sunny Side Up Menu',
                faImg:' fa-bars',
                faSize:' fa-3x',
                desc:'The most important meal'
            },
            {
                url:'freecodecamp/wikiViewer',
                title:'Wiki Viewer',
                faImg:' fa-wikipedia-w',
                faSize:' fa-3x',
                desc:'The free encyclopedia'
            },
            {
                url:'freecodecamp/ticTacToe',
                title:'Unbeatable Tic Tac Toe',
                faImg:' fa-table',
                faSize:' fa-3x',
                desc:'Do the impossible'
            },
            {
                url:'freecodecamp/simon',
                title:'Simon Says',
                faImg:' fa-gamepad',
                faSize:' fa-4x',
                desc:'Can you follow directions'
            },
            {
                url:'freecodecamp/pomodoroClock',
                title:'Pomodoro Clock',
                faImg:' fa-clock-o',
                faSize:' fa-3x',
                desc:'Everyone needs a break'
            },
            {
                url:'freecodecamp/calculator',
                title:'Calculator',
                faImg:' fa-calculator',
                faSize:' fa-5x',
                desc:'Math made easier'
            },
            {
                url:'freecodecamp/randomQuoteMachine',
                title:'Random Quote Machine',
                faImg:' fa-quote-right',
                faSize:' fa-2x',
                desc:'Best quotes in WWE history'
            },
            {
                url:'freecodecamp/slotMachine',
                title:'Slot Machine',
                faImg:' fa-money',
                faSize:' fa-3x',
                desc:'You gotta spin to win'
            },
            {
                url:'codecademy/statusPost',
                title:'Status Post',
                faImg:' fa-tag',
                faSize:' fa-4x',
                desc:'What\'s on your mind'
            },
            {
                url:'codecademy/flipBoard',
                title:'Flipboard',
                faImg:' fa-map',
                faSize:' fa-3x',
                desc:'Your personal magazine'
            },
            {
                url:'codecademy/ArticleShift',
                title:'Article Shift',
                faImg:' fa-expand',
                faSize:' fa-2x',
                desc:'Never miss a flight change'
            },
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
            },
            {
                url:'codecademy/Newsroom',
                title:'Newsroom',
                faImg:' fa-newspaper-o',
                faSize:' fa-5x',
                desc:'Real news, real time'
            },
            {
                url:'codecademy/Move',
                title:'Move',
                faImg:' fa-arrows',
                faSize:' fa-2x',
                desc:'Form healthy habits to take your fitness to the next level'
            },
            {
                url:'codecademy/Junction',
                title:'Junction',
                faImg:' fa-rss',
                faSize:' fa-4x',
                desc:'Reading is more social than you think'
            },
            {
                url:'codecademy/Innovation',
                title:'Innovation',
                faImg:' fa-lightbulb-o',
                faSize:' fa-3x',
                desc:'Connect your ideas globally'
            },
            {
                url:'codecademy/Headlines',
                title:'Headlines',
                faImg:' fa-header',
                faSize:' fa-3x',
                desc:'News that\'s relevant to you'
            },
            {
                url:'codecademy/Excursion',
                title:'Excursion',
                faImg:' fa-globe',
                faSize:' fa-2x',
                desc:'Discover the hidden places in the world around you'
            },
            {
                url:'codecademy/Broadway',
                title:'Broadway',
                faImg:' fa-ticket',
                faSize:' fa-5x',
                desc:'Simple as 1-2-3'
            },
            {
                url:'codecademy/Bolt',
                title:'Bolt',
                faImg:' fa-bolt',
                faSize:' fa-3x',
                desc:'A world of movies at your fingertips'
            },
            {
                url:'codecademy/BestBite',
                title:'Best Bite',
                faImg:' fa-cutlery',
                faSize:' fa-2x',
                desc:'Always have the answer to "what\'s for dinner"'
            },
            {
                url:'codecademy/Bass',
                title:'Bass',
                faImg:' fa-music',
                faSize:' fa-5x',
                desc:'Turn up the bass'
            },
            {
                url:'codecademy/Armando',
                title:'Armando',
                faImg:' fa-camera-retro',
                faSize:' fa-4x',
                desc:'My own lens'
            },
            {
                url:'codecademy/AirBnB',
                title:'AirBnB',
                faImg:' fa-home',
                faSize:' fa-3x',
                desc:'A place like home'
            },
            {
                url:'codecademy/Adoptly',
                title:'Adoptly',
                faImg:' fa-paw',
                faSize:' fa-4x',
                desc:'Meet your new best friend'
            }]
}]);