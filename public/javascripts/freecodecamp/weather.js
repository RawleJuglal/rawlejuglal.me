$(document).ready(function(){
    var apikey = '677d725847b668a26122a0be351c282c';
    
    if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = Math.round(position.coords.latitude*100)/100;
            var longitude = Math.round(position.coords.longitude*100)/100;
           getWeather(latitude, longitude);
          });
        } else {
           console.log('Geolocation Not Available');
        }
    
    function getWeather(lat, lon){
       var accessForecast = `https://api.forecast.io/forecast/`+apikey+`/${lat},${lon}`;
            $.getJSON(accessForecast, function(json){
                console.log(json);
            });
       }
});