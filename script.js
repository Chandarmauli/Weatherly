async function showWeather(){

a = placeName.value    
    setTimeout(() => {


        placeName.value = ""
    
    }, 200)
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ a;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1ae028d50mshf398e2ee50cf46cp1c6bedjsn65b230330e99',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    cityName.innerHTML = a

    temp.innerHTML = "Temperature : "+ result.temp +" degree C"
    hum.innerHTML = "Humidity : "+ result.humidity +"%"
    feels.innerHTML = "Feels Like : "+ result.feels_like +" degree C"
} catch (error) {
	console.error(error);
}


}