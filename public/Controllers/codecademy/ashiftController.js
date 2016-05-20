app.controller('ashiftController', ['$scope', function($scope){
    $scope.test = 'is working';
    
    $scope.articles = [
        {
                source:'Flight',
                title:'Embraer adds third Legacy 500 prototype to flight test campaign',
                pubdate:'Mar 23',
                descHead:'Embraer adds third Legacy 500 prototype to flight test campaign',
                descContent:'The third Legacy 500 has joined Embraer\'s flight test programme aimed at delivering the midsize business jet in 2014. The airtcraft, serial number 003...'
            },
            {
                source:'AW Commercial Aviation',
                title:'CSeries Supplier Scramble',
                pubdate:'Mar 22',
                descHead:'CSeries Supplier Scramble',
                descContent:'Three months before the planned first flight of its CSeries, Bombardier is grappling with supplier issues crucial to meeting its production cost...'
            },
            {
                source:'AW business aviation',
                title:'Flying the Gulfstream G650',
                pubdate:'Mar 22',
                descHead:'Flying the Gulfstream G650',
                descContent:'Gulfstream is turning up the heat in the large-cabin business aircraft competition with its new G650 flagship, the largest, fastest, farthest-ranging...'
            },
            {
                source:'FLIGHT',
                title:'New retirements cut RAF VC10 fleet to four',
                pubdate:'Mar 22',
                descHead:'New retirements cut RAF VC10 fleet to four',
                descContent:'The UK Royal Air Force has retired another two of its Vickers VC10 tankers, with the pair\'s departure reducing its inventory of the Rolls-Royce...'
            },
            {
                source:'FLIGHT',
                title:'Virgin can deliver more value for Delta than for SIA: Bastian',
                pubdate:'Jul 17',
                descHead:'Virgin can deliver more value for Delta than for SIA: Bastian',
                descContent:'Delta Air Lines president Ed Bastian is confident that the carrier can extract far more value from its shareholding in Virgin Atlantic compared with...'
            },
            {
                source:'AW Defense',
                title:'Freedom Experiences Two More Power Outages',
                pubdate:'Mar 22',
                descHead:'Freedom Experiences Two More Power Outages',
                descContent:'The Littoral Combat Ship (LCS-1) USS Freedom’s first overseas deployment to Southeast Asia has been marred by two more power outages...'
            },
            {
                source:'FLIGHT',
                title:'FedEx to acquire up to 30 United 757s',
                pubdate:'Mar 22',
                descHead:'FedEx to acquire up to 30 United 757s',
                descContent:'United Airlines is to sell up to 30 Boeing 757s to freight operator FedEx Express, with deliveries of the twinjets set to start this year.'
            }]
}]);