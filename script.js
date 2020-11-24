//Start page
fetch(`http://api.openweathermap.org/data/2.5/forecast?id=703447&units=metric&appid=733041e2d9d81b3dff2fc47177db6c73`)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        
        //Title
        let cardTitle = document.querySelectorAll('.card__title');
        for (let i = 0; i < cardTitle.length; i++) {
            cardTitle[i].innerHTML = data.city.name + '<br>' + data.list[i].dt_txt;
        }
        //temperature
        let cardTemp = document.querySelectorAll('.card__temperature');
        for (let j = 0; j < cardTemp.length; j++) {
            cardTemp[j].innerHTML = Math.round(data.list[j].main.temp) + '&deg;';
        }
        //wind
        let cardWind = document.querySelectorAll('.card__wind');
        for(let k = 0; k < cardWind.length; k++) {
            cardWind[k].textContent = data.list[k].wind.speed + ' m/s';
        }
        //humidity
        let cardHumidity = document.querySelectorAll('.card__humidity');
        for ( let h = 0; h < cardHumidity.length; h++) {
            cardHumidity[h].textContent = data.list[h].main.humidity + ' %';
            
        }
        
        //https://openweathermap.org/img/wn/04d@2x.png
        //clouds
        let clouds = document.querySelectorAll('.card__clouds');
        for ( let m = 0; m < clouds.length; m++) {
            clouds[m].innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[m].weather[0]['icon']}@2x.png"> `;
        }
        
        
    })
    .catch(function() {
        // catch any errors
    });

//Cities
let cityList = [
    {"name" : "Severodonetsk",
    "id" : 691999},

    {"name" : "Kharkov",
    "id" : 706483},

    {"name" : "Kiev",
    "id" : 703447},

    {"name" : "Dnepr",
    "id" : 709930}, 

    {"name" : "Lvov",
    "id" : 702550}
]
//get id selected city
document.querySelector('.form__list-cities').onchange = () => {
let citySelect = document.querySelectorAll('.list__choose');
let nameCity = '';
    for (let i = 0; i < citySelect.length; i++ ) {
        if (citySelect[i].selected) {
          nameCity = citySelect[i].value;
        }
    }


let cityId = '';

    for (let i = 0; i < cityList.length; i++) {
        for (key in cityList[i]) {
            if (cityList[i][key] == nameCity) {
                cityId = cityList[i].id;
            }
        }
    }

    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=733041e2d9d81b3dff2fc47177db6c73`)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        // console.log(data);
        
        //Title
        let cardTitle = document.querySelectorAll('.card__title');
        for (let i = 0; i < cardTitle.length; i++) {
            cardTitle[i].innerHTML = data.city.name + '<br>' + data.list[i].dt_txt;
        }
        //temperature
        let cardTemp = document.querySelectorAll('.card__temperature');
        for (let j = 0; j < cardTemp.length; j++) {
            cardTemp[j].innerHTML = Math.round(data.list[j].main.temp) + '&deg;';
        }
        //wind
        let cardWind = document.querySelectorAll('.card__wind');
        for(let k = 0; k < cardWind.length; k++) {
            cardWind[k].textContent = data.list[k].wind.speed + ' m/s';
        }
        //humidity
        let cardHumidity = document.querySelectorAll('.card__humidity');
        for ( let h = 0; h < cardHumidity.length; h++) {
            cardHumidity[h].textContent = data.list[h].main.humidity + ' %';
            
        }
        
        //https://openweathermap.org/img/wn/04d@2x.png
        //clouds
        let clouds = document.querySelectorAll('.card__clouds');
        for ( let m = 0; m < clouds.length; m++) {
            clouds[m].innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[m].weather[0]['icon']}@2x.png"> `;
        }
        
        
    })
    .catch(function() {
        // catch any errors
    });
    
    }    


    
       

