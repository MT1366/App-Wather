// const form = document.querySelector('form')
// import axios from "https://unpkg.com/axios/dist/axios.min.js"

import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const form = document.getElementById("form");
const btn = document.getElementById("button");
let formData = {};

btn
  .addEventListener("click", () => {
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;

    // axios
    //   .post("https://64735fded784bccb4a3c8436.mockapi.io/WeatherAppLoginpage", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((data) => {
    //     formData = {
    //       email: email,
    //       password: password,
    //       Response: data,
    //     };

    console.log(formData);

    window.location.href =
      "http://127.0.0.1:5500/Weather-App-master/weather.html";
  })
  .catch((error) => {
    console.error(error);
    // Handle errors here
  });

// export default { formData };
