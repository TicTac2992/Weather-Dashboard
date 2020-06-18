# hw-6-weather-dashboard
Server-Side-API's


My Psedo code
Homework 6 Pseudo coding

<header>
Links to bootstrap
Links to CSS
</header>

<body>
  Need to have a form that prompts the user to search for a city
	    
	<!-- GIVEN a weather dashboard with form inputs
	        
	    WHEN I search for a city 
		Area to input text and hit enter - need to prevent default of submitting page so it stays on the same page
		Make sure to have a header (can take up to sm-12 for column)
		HTML Content can all be placed within 2 columns
		
	    THEN I am presented with current and future conditions for that city and that city is added to the search history
		Needs to make a call to that API and pull the conditions of that location - check the docs to see what we need to add to our URL to GET the necessary info
		
		
	    WHEN I view current weather conditions for that city
	Need a button
	When the user hits enter or clicks the search button

	    THEN I am presented with the 
	This will be in it's own div
	These are my variables:
		
		city name, 
		the date, 
		an icon representation of weather conditions, 
		the temperature, 
		the humidity, 
		the wind speed, 
		and the UV index
	
	
	    WHEN I view the UV index
		This will be a value
		
	
	    THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe <-- These are additional variables
	
		Need to set a range of values to trigger when a certain condition is met
		
		Favorable = < Minimum Threshold 
		Moderate =  >= Minimum Threshold && < Maximum Threshold 
		Severe = >= Maximum Threshold
		
	
	    WHEN I view future weather conditions for that city
		New <Div>
		Need to set card areas in my HTML for this content
	
	    THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
		Need to add style to these cards using CSS
		Take in and place info into fields for:  Dates for the next 5 days, icons showing weather, Temperature, and Humidity
		
	
	    
		WHEN I click on a city in the search history
	
		Items that have been searched need to be added to local storage, aka browser storage in left column - (do columns as following:  left column sm-3, right colum sm09)
		Not only do they need to be added - they also need to be stored and then turned into buttons…this will require a function I am sure
	
	
	    THEN I am again presented with current and future conditions for that city
		A function needs to be run so it will populate to the screen - having a current variable assigned may be useful
			- Will need to circle back and explore this concept further
	
	    WHEN I open the weather dashboard
		The latest search needs to append to the screen
		If user does another search, this data needs to be cleared and only the name of the city should be sent to local storage
		Maybe this data just hides - will need to look into this further
	
	    THEN I am presented with the last searched city forecast -->
		It will be appended to current as mentioned above
	<script>
	</script>
<body>
