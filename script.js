"use strict"

let container = document.querySelector(".container")
let weather_container = document.querySelector("#weatherInfo");
let temperature = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let city = document.querySelector("#cityname");
let main_div = document.querySelector(".maincontainer")
var cityName = document.getElementById('cityInput');

function getWeather() 
{
   
    let apikey = "1ac41d822f470089588e62f6ac6cbdce";
    let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    if(cityName.value)
    {
        checkWeather(cityName.value)
    }

    function checkWeather(city)
    {
        fetch(apiurl+`&appid=${apikey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            temperature.innerHTML = data.main.temp +'&#8451';
            
            humidity.innerHTML = `<i class="fa-solid fa-droplet icon"></i> `+`<br>`+data.main.humidity +" %";
            windSpeed.innerHTML =` <i class="fa-solid fa-cloud-bolt icon"></i> `+`<br>`+data.wind.speed + "m/s" ;
            updateBackground(data.main.temp)
        })
    }
    city.innerText = cityName.value
    cityName.value=''
}

function updateBackground(temp) {

    if (temp > 26) {
        main_div.style.backgroundImage = 'url("Bg-1.png")';
    } else if (temp >= 20 && temp <= 25) {
        main_div.style.backgroundImage = 'url("Bg-2.webp")';
    } else {
        main_div.style.backgroundImage = 'url("Bg-3.webp")';
    }
}

