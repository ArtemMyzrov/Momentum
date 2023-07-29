const city_element = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')



async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_element.value}&lang=en&appid=64f150cdacfc00ff954032b907279985&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if(data.cod=="404"){
        alert(data.message)
        city_element.value = "";
        return
    }
    
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = Math.round(data.main.temp) +"°C";
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = "Wind speed: " + Math.round(data.wind.speed) + " m/s" ;
    humidity.textContent = "Humidity: " + Math.round(data.main.humidity) + " %" ;
    
}



function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city_element.blur();
    }
  }
  

city_element.addEventListener('keypress', setCity);



  function setLocalStorage() {
    localStorage.setItem('city', city_element.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)
  
  function getLocalStorage() {
    if (localStorage.getItem('city')) {
    
        city_element.value = localStorage.getItem('city');
    }else {
        city_element.value = "Minsk"
    }
    getWeather()
  }
  window.addEventListener('load', getLocalStorage);