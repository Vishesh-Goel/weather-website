const container = document.querySelector(".cont")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const moreWeather = document.querySelector(".more-weather")
const error = document.querySelector(".not-found")


search.addEventListener("click", ()=>{
    const APIkey = 'e32c23b0e3c1621acfeb80877366bf26';
    const city = document.querySelector(".search-box input").value
    if (city == '') return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
    .then(response => response.json()).then(json => {

        if (json.cod == '404'){
            weatherBox.classList.remove('active')
            moreWeather.classList.remove('active')
            error.classList.add('active')
            return
        }

        weatherBox.classList.add('active')
        moreWeather.classList.add('active')
        error.classList.remove('active')

        const image = document.querySelector(".weather-box img")
        const temp = document.querySelector(".weather-box .temp")
        const desc = document.querySelector(".weather-box .desc")
        const humidity = document.querySelector(".more-weather .humidity span")
        const wind = document.querySelector(".more-weather .wind span")

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = "assets/clear.webp"
                break

            case 'Clouds':
                image.src = "assets/cloudy.webp"
                break

            case 'Rain':
                image.src = "assets/rainy.png"
                break

            case 'Mist':
                image.src = "assets/misty.png"
                break

            case 'Haze':
                image.src = "assets/misty.png"
                break

            case 'Snow':
                image.src = "assets/snowy.png"
                break

            default:
                image.src = "assets/cloudy.webp"
        }

        temp.innerHTML = `${parseInt(json.main.temp)}°C`;
        desc.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

    })
})

search.addEventListener("click", animation_function)