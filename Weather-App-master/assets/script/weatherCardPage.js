// import axios from "axios"
// import formData from "./logInPage";

const input = document.querySelector(".input-city");
const weatherIcon = document.querySelector(".weather-icon");
const logOut = document.getElementById("log-out");

logOut.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/Weather-App-master/index.html";
});

const weather = document.querySelector(".weather");
const err = document.querySelector(".error-message");
const mainCard = document.getElementById("main-card");
const wellcomText = document.querySelector(".Welcom-text");

// console.log(formData);

const getUser = async function (user) {
  const userUrl = await fetch(
    "https://64735fded784bccb4a3c8436.mockapi.io/WeatherAppLoginpage"
  );
  const data = await userUrl.json();
  console.log(data);
};

const getCity = async function (cityName) {
  try {
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cc22f8277ff25439908eaf210aac9132&units=metric`
    );
    const data = await url.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " c";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src =
        "assets/image/partly_cloudy_day_FILL0_wght400_GRAD0_opsz24.svg";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "assets/image/rainy_FILL0_wght400_GRAD0_opsz24.svg";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src =
        "assets/image/light_mode_FILL0_wght400_GRAD0_opsz24.svg";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "assets/image/foggy_FILL0_wght400_GRAD0_opsz24.svg";
    }
    err.style.opacity = 0;
    weather.style.opacity = 1;
  } catch (error) {
    weather.style.opacity = 0;

    err.style.opacity = 1;
    err.classList.add("scale-up");
  }
};

input.addEventListener("input", (event) => {
  event.preventDefault();

  setTimeout(() => {
    getCity(input.value);
  }, 2000);
});
