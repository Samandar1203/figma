let data = document.querySelector('.date');
let body = document.querySelector('body');


let getDate = new Date()
let day = getDate.getDate()
let weekDay = getDate.getDay()
let year = getDate.getFullYear()
let hours = getDate.getHours()
let minutes = getDate.getMinutes()
let month = getDate.getMonth() +1;

data.innerHTML =`${day}.0${month}.${year}  ${hours}:${minutes}`


