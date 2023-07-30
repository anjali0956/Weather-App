let weather =
{
    "apiKey": "22305b1989cafbe2c91bce383b1cb2c3" ,
    fetchWeather: function (city)
    {
      fetch("https://api.openweathermap.org/data/2.5/weather?name=" +city+ "&appid=" +this.apiKey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
  displayWeather: function(data)
  {
    const{ name }=data;
    const{icon,description}=data.weather[0];
    const{ temp,humidity}=data.main;
    const{speed}=data.wind;
    document.querySelector(".name").innerText="Weather in "+name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp;
    document.querySelector(".humidity").innerText="Humidity"+humidity+"%";
    document.querySelector(".wind").innerText="Wind Speed "+speed+"km/hr";
    document.querySelector(".weather").classList.remove("loading");
    //document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ name +"')"
  },
}; 
