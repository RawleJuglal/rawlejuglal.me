$(document).ready(function(){
    var apikey = '9575f3355ae129dc91424b5712a7695e';
    var units = 'imperial';
    
    function getWeather(lat, lon){
        var accessOWM = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units='+units+'&APPID='+apikey;
        console.log(accessOWM);
        $.getJSON(accessOWM, function(json){
            console.log('function called');
           console.log(json); 
        });
    }
/*       if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = Math.round(position.coords.latitude*100)/100;
            var longitude = Math.round(position.coords.longitude*100)/100;
            getWeather(latitude, longitude);
          });
        } else {
            console.log('Geolocation Not Available');
        }*/
        
        getWeather(35,-97);
});

