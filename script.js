const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3229622dd9msh884ac8c91b2ecb3p14545ejsn73f59400bf3e',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

function getWeather(city){
    fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        main_temp.innerHTML = response.current_observation.condition.temperature;
        max_temp.innerHTML = response.forecasts[0].high;
        min_temp.innerHTML = response.forecasts[0].low;
        humidity.innerHTML = response.current_observation.atmosphere.humidity;
        visibility.innerHTML = response.current_observation.atmosphere.visibility;
        pressure.innerHTML = response.current_observation.atmosphere.pressure;
        wind.innerHTML = response.current_observation.wind.speed;
        wind_dir.innerHTML = response.current_observation.wind.direction;
        chill.innerHTML = response.current_observation.wind.chill;
        day1.innerHTML = response.forecasts[1].day;
        day2.innerHTML = response.forecasts[2].day;
        day3.innerHTML = response.forecasts[3].day;
        day4.innerHTML = response.forecasts[4].day;
        day5.innerHTML = response.forecasts[5].day;
        day6.innerHTML = response.forecasts[6].day;
        day1_high.innerHTML = response.forecasts[1].high;
        day2_high.innerHTML = response.forecasts[2].high;
        day3_high.innerHTML = response.forecasts[3].high;
        day4_high.innerHTML = response.forecasts[4].high;
        day5_high.innerHTML = response.forecasts[5].high;
        day6_high.innerHTML = response.forecasts[6].high;
        day1_low.innerHTML = response.forecasts[1].low;
        day2_low.innerHTML = response.forecasts[2].low;
        day3_low.innerHTML = response.forecasts[3].low;
        day4_low.innerHTML = response.forecasts[4].low;
        day5_low.innerHTML = response.forecasts[5].low;
        day6_low.innerHTML = response.forecasts[6].low;
        day1_text.innerHTML = response.forecasts[1].text;
        day2_text.innerHTML = response.forecasts[2].text;
        day3_text.innerHTML = response.forecasts[3].text;
        day4_text.innerHTML = response.forecasts[4].text;
        day5_text.innerHTML = response.forecasts[5].text;
        day6_text.innerHTML = response.forecasts[6].text;
        document.getElementById('location1').innerHTML = response.location.city;
        document.getElementById('location2').innerHTML = response.location.city;
    })
	.catch(err => console.error(err))};

document.getElementById('submit').addEventListener('click',(e) => {
    // console.log(e);
    e.preventDefault();
    getWeather(city.value);
});
