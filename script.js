

//Start page
fetch(`http://api.openweathermap.org/data/2.5/forecast?id=703447&units=metric&appid=733041e2d9d81b3dff2fc47177db6c73`)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);

        //for one day
        //Title
        let cardTitle = document.querySelectorAll('.card__title');      
        for (let i = 0; i < cardTitle.length; i++) {
            cardTitle[i].innerHTML =  data.city.name + '-' + data.city.country  + '<br>' +  data.list[i].dt_txt ;
        }
        //temperature
        let cardTemp = document.querySelectorAll('.card__temperature');
        for (let j = 0; j < cardTemp.length; j++) {
            cardTemp[j].innerHTML = Math.round(data.list[j].main.temp) + '&deg;' ;
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

        //for five days
        
        
        
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
document.querySelector('.form__list-cities').onchange = function chooseCity()  {
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

//data for fetch
let dataFetch = {
    'url' : `http://api.openweathermap.org/`,
    'data' : `data/2.5/forecast?`,
    'id' : `id=`,
    'cityId' : cityId,
    'units' : `&units=metric`,
    'appid' : `&appid=733041e2d9d81b3dff2fc47177db6c73`
}

let fullRequestFetch = ``;
for (key in dataFetch) {
    fullRequestFetch += dataFetch[key];
}
console.log(fullRequestFetch);

// fetch request
    fetch(fullRequestFetch)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        // console.log(data);
        
        //Title
        let cardTitle = document.querySelectorAll('.card__title');
        for (let i = 0; i < cardTitle.length; i++) {
            cardTitle[i].innerHTML = data.city.name + '-' + data.city.country + '<br>' + data.list[i].dt_txt;
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
       

// Select amount of days
document.querySelector('.form__list-days').onchange = () => {
let amountDays = document.querySelectorAll('.day__choose');
let fewDays = document.querySelector('.fewDays');
let fiveDays = document.querySelector('.fiveDays');
   for (let i = 0; i < amountDays.length; i++) {
        if (amountDays[0].selected) {
            fewDays.classList.toggle('display-none');
            fewDays.classList.add('display-flex');      
        }
        else if (amountDays[1].selected) {
            fiveDays.classList.toggle('display-none');
            fiveDays.classList.add('display-flex');  
        }
   } 
}


 
