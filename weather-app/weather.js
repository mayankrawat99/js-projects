 let temp = document.querySelector(".temp") 
 let tempicon = document.querySelector("#weatherIcon") 
 let temptext = document.querySelector("#weather") 
 let humidity = document.querySelector("#humidity")
 let windspeed = document.querySelector("#windSpeed ") 

async function fetchData() {
    let city = search.value
    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7480a0ccd2msh1261ac88123318dp1fe5b6jsnaec9860ba2bc',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };


  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
   
   const tem= (5/9)*(result.main.temp-32)
    temp.innerHTML= Math.floor(tem)+"<sup>o</sup>c"
    humidity.innerHTML = result.main.humidity+"%"
    windspeed.innerHTML = result.wind.speed+"km/h"
    temptext.innerHTML=result.weather[0].main;
    switch (result.weather[0].main) {
        case 'Clouds':
        case 'Smoke':
            weatherIcon.src = "images/Clouds.png";
            break;
        case 'Clear':
            weatherIcon.src = "images/sun.png";
            break;
        case 'Rain':
            weatherIcon.src = "images/rainy.png";
            break;
        case 'Mist':
            weatherIcon.src = "images/mist.png";
            break;
        case 'Snow':
            weatherIcon.src = "images/snow.png";
            break;
        case 'Haze':
            weatherIcon.src = "images/haze.png";
            break;
            

    }
  } catch (error) {
   alert("please enter valid city");
  }
 
}


// Call the async function
// function getdata(result){
//  temp.innerHTML=result.temperature


// }
