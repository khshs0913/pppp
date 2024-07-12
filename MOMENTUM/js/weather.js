const API_KEY = "a6d33b8dfa695a2061a88de3f89fe8bb";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unites=metrics`  
   fetch(url)
   .then((response) => response.json())
   .then((data) => {
     const weather = document.querySelector("#weather span:first-child");
     const city = document.querySelector("#weather span:last-child");
     city.innerText = data.name;
     weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
   });
  }
    function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

