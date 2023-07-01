
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherimg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkweather(city){
    const api_key="3746601e3f5c702120cecbe69120dd1c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then(response =>response.json());
  
    if(weather_data.cod ==='404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
      weather_body.style.display = "flex";

    temperature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML =`${weather_data.weather[0].description}`;

    humidity.innerHTML =`${weather_data.main.humidity}%`;
    windspeed.innerHTML =`${weather_data.wind.speed}Km/H`;

     switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherimg.src="./images/icons8-cloud-94.png";
            break;
            
        case 'Clear':
            weatherimg.src="./images/icons8-clear-sky-64.png";    
            break;

        case 'Rain':
            weatherimg.src="./images/icons8-rain-48.png";    
            break;

        case 'Mist':
            weatherimg.src="./images/icons8-mist-100.png";    
            break;

        case 'Snow':
            weatherimg.src="./images/icons8-snow-96.png";        
            break;
     }
}

searchBtn.addEventListener('click',()=>{
    checkweather(inputBox.value);
});





