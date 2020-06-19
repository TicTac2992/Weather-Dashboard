
// global variables
var cityName = '';
var date = '';
var humidity = '';
var icon = ''; 
var temp = '';
var uvIndex = '';
var windSpeed = ''; 


var APIKey = "8a1accb502972b20f4e96b06ebea2973";
// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Tampa,Florida&appid=" + APIKey;





    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });