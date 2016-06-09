app.controller('ashiftController', ['$scope', function($scope){
    $scope.test = 'is working';
    
    $scope.articles = [
        {
                headingID:'headingZero',
                headingHREF:'#collapseZero',
                headingControls:'collapseZero',
                headingSource:'Flight',
                title:'Embraer adds third Legacy 500 prototype to flight test campaign',
                pubdate:'Mar 23',
                descContent:'The third Legacy 500 has joined Embraer\'s flight test programme aimed at delivering the midsize business jet in 2014. The airtcraft, serial number 003...'
            },
            {
                headingID:'headingOne',
                headingHREF:'#collapseOne',
                headingControls:'collapseOne',
                headingSource:'AW Commercial Aviation',
                title:'CSeries Supplier Scramble',
                pubdate:'Mar 22',
                descContent:'Three months before the planned first flight of its CSeries, Bombardier is grappling with supplier issues crucial to meeting its production cost...'
            },
            {
                headingID:'headingTwo',
                headingHREF:'#collapseTwo',
                headingControls:'collapseTwo',
                headingSource:'AW business aviation',
                title:'Flying the Gulfstream G650',
                pubdate:'Mar 22',
                descContent:'Gulfstream is turning up the heat in the large-cabin business aircraft competition with its new G650 flagship, the largest, fastest, farthest-ranging...'
            },
            {
                headingID:'headingThree',
                headingHREF:'#collapseThree',
                headingControls:'collapseThree',
                headingSource:'FLIGHT',
                title:'New retirements cut RAF VC10 fleet to four',
                pubdate:'Mar 22',
                descContent:'The UK Royal Air Force has retired another two of its Vickers VC10 tankers, with the pair\'s departure reducing its inventory of the Rolls-Royce...'
            },
            {
                headingID:'headingFour',
                headingHREF:'#collapseFour',
                headingControls:'collapseFour',
                headingSource:'FLIGHT',
                title:'Virgin can deliver more value for Delta than for SIA: Bastian',
                pubdate:'Jul 17',
                descContent:'Delta Air Lines president Ed Bastian is confident that the carrier can extract far more value from its shareholding in Virgin Atlantic compared with...'
            },
            {
                headingID:'headingFive',
                headingHREF:'#collapseFive',
                headingControls:'collapseFive',
                headingSource:'AW Defense',
                title:'Freedom Experiences Two More Power Outages',
                pubdate:'Mar 22',
                descContent:'The Littoral Combat Ship (LCS-1) USS Freedom’s first overseas deployment to Southeast Asia has been marred by two more power outages...'
            },
            {
                headingID:'headingSix',
                headingHREF:'#collapseSix',
                headingControls:'collapseSix',
                headingSource:'FLIGHT',
                title:'FedEx to acquire up to 30 United 757s',
                pubdate:'Mar 22',
                descContent:'United Airlines is to sell up to 30 Boeing 757s to freight operator FedEx Express, with deliveries of the twinjets set to start this year.'
            }]
            
    $scope.updateCurrent=function(){
        $('.panel-ashift').on('show.bs.collapse', function () {
             $(this).addClass('active');
        });
    
        $('.panel-ashift').on('hide.bs.collapse', function () {
             $(this).removeClass('active');
        });
    }
}]);