const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']

const date=new Date();
const day=date.getDay();
const month=date.getMonth();
const year=date.getFullYear();
let minute=date.getMinutes();
let hour=date.getHours();

if(minute<10){
    minute='0'+minute;
}
let time=`${hour}:${minute}AM`;
if(hour>12){
    time=`${hour}:${minute}PM`
}
const weather='{%weather%}';
console.log(weather);
// let box=document.getElementById('weather-icon')
// if(weather==='Clear'){
//     box.innerHTML=`<i class="fa-solid fa-sun" style="color:#FDB813"></i>`
// }else if(weather==='Clouds'){
//     box.innerHTML=`<i class="fa-duotone fa-cloud" style="color:#c7c4bf"></i>`
// }else{
//     box.innerHTML=`<i class="fa-solid fa-sun" style="color:#FDB813"></i>`
// }
// const today=document.getElementById('today');
// today.innerHTML=`${days[day]}|${months[month]}|${year}|${time}`

