//CONTROLLER
app.controller('concacafController',['$scope', function($scope){
  $scope.matches=[
    {
      matchdate:new Date(2016,00,31,20,00,00),
      stadium:"St. Louis Soccer Park",
      city:"Fenton, Missouri",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      homeTeam:'United States',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
      awayTeam:'Trinidad & Tobago',
      awayCount:0
    },
    {
      matchdate:new Date(2016,01,02,20,00,00),
      stadium:"Estadio Nacional",
      city:"San José, Costa Rica",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
      homeTeam:'Costa Rica',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      awayTeam:'United States',
      awayCount:0
    },
    {
      matchdate:new Date(2016,01,21,20,00,00),
      stadium:"Estadio Azteca",
      city:"Mexico City, Mexico",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
      homeTeam:'Mexico',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      awayTeam:'United States',
      awayCount:0
    },
    {
      matchdate:new Date(2016,01,23,20,00,00),
      stadium:"Stanford Stadium",
      city:"Stanford, California",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      homeTeam:'United States',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
      awayTeam:'Canada',
      awayCount:0
    },
    {
      matchdate:new Date(2016,02,13,20,00,00),
      stadium:"	CenturyLink Field",
      city:"Seattle, Washington",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      homeTeam:'United States',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
      awayTeam:'Panama',
      awayCount:0
    },
    {
      matchdate:new Date(2016,02,15,20,00,00),
      stadium:"Hasely Crawford Stadium",
      city:"Port Of Spain, Trinidad",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
      homeTeam:'Trinidad & Tobago',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      awayTeam:'United States',
      awayCount:0
    },
    {
      matchdate:new Date(2016,03,03,20,00,00),
      stadium:"Rice-Eccles Stadium",
      city:"Salt Lake City, Utah",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      homeTeam:'United States',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
      awayTeam:'Costa Rica',
      awayCount:0
    },
    {
      matchdate:new Date(2016,03,05,20,00,00),
      stadium:"Alamodome",
      city:"San Antonio, Texas",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      homeTeam:'United States',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
      awayTeam:'Mexico',
      awayCount:0
    },
    {
      matchdate:new Date(2016,03,24,20,00,00),
      stadium:"BMO Field",
      city:"Toronto, Ontario, Canada",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
      homeTeam:'Canada',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      awayTeam:'United States',
      awayCount:0
    },
    {
      matchdate:new Date(2016,03,26,20,00,00),
      stadium:"Estadio Rommel Fernández",
      city:"Panama City, Panama",
      homeFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
      homeTeam:'Panama',
      homeCount:0,
      awayFlag_img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      awayTeam:'United States',
      awayCount:0
    }
  ]
  $scope.addHome = function(index){
    $scope.matches[index].homeCount+=1;
  }
  $scope.minusHome = function(index){
    if($scope.matches[index].homeCount>0)
       {
         $scope.matches[index].homeCount-=1;
       }   
  }
  $scope.addAway=function(index){
    $scope.matches[index].awayCount+=1;
  }
$scope.minusAway=function(index){
  if($scope.matches[index].awayCount>0)
       {
         $scope.matches[index].awayCount-=1;
       }
}
}]);