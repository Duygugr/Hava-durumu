const input = document.querySelector("#input");
const button = document.querySelector("#button");
const icon = document.querySelector("#icon");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const city2 = document.querySelector("#city");

button.addEventListener("click", () => {
    const city = input.value.trim();
    input.value = ""
    city2.textContent = city

  

    const apiKey = "cadd5c0276d327603aa2502205dab103";
   

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},TR&appid=${apiKey}&units=metric&lang=tr`)
  .then(res => res.json())
  .then(data => {
    if(data.cod === 200){
    console.log(data)

  
  temp.textContent = `${Math.round(data.main.temp)}°`;
  desc.textContent = data.weather[0].description;

  const main = data.weather[0].main;
  icon.style.display = "block"; 
  desc.style.display= "block";
  temp.style.display = "block";
 
  switch(main){
    case "Rain":
      icon.src= "img/yagmurlu-removebg-preview.png"
      break;
    case "Clouds":
      icon.src = "img/bulutlu-removebg-preview.png"
      break;
    case "Clear":
      icon.src = "img/güneşli-removebg-preview.png"
      break;
    case "Snow":
      icon.src = "img/karlı-removebg-preview.png"
      break;

  }
}


 })
  .catch(err => console.error(err));
}); 

