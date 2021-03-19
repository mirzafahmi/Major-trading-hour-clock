const rotationDeg = 6;
//malaysia gmt +8


const hour = document.querySelector('#hr');
const minute = document.querySelector('#min');
const second = document.querySelector('#sec');


setInterval(()=>
    {let day = new Date();
    let hr = day.getHours()*30;
    let min = day.getMinutes()*rotationDeg; 
    let sec = day.getSeconds()*rotationDeg;
    
    hour.style.transform = `rotateZ(${(hr)+ (min/12)}deg)`;
    minute.style.transform = `rotateZ(${min}deg)`;
    second.style.transform = `rotateZ(${sec}deg)`;})

//asia session
const hour1 = document.querySelector('#hr1');
const minute1 = document.querySelector('#min1');
const second1 = document.querySelector('#sec1');


setInterval(()=>
    {let day = new Date();
    let hr = (day.getHours() +3)*30;
    let min = day.getMinutes()*rotationDeg; 
    let sec = day.getSeconds()*rotationDeg;
    
    hour1.style.transform = `rotateZ(${(hr)+ (min/12)}deg)`;
    minute1.style.transform = `rotateZ(${min}deg)`;
    second1.style.transform = `rotateZ(${sec}deg)`;})

//london session

const hour2 = document.querySelector('#hr2');
const minute2 = document.querySelector('#min2');
const second2 = document.querySelector('#sec2');


setInterval(()=>
    {let day = new Date();
    let hr = (day.getHours() - 8)*30;
    let min = day.getMinutes()*rotationDeg; 
    let sec = day.getSeconds()*rotationDeg;
    
    hour2.style.transform = `rotateZ(${(hr)+ (min/12)}deg)`;
    minute2.style.transform = `rotateZ(${min}deg)`;
    second2.style.transform = `rotateZ(${sec}deg)`;})

//us session

const hour3 = document.querySelector('#hr3');
const minute3 = document.querySelector('#min3');
const second3 = document.querySelector('#sec3');


setInterval(()=>
    {let day = new Date();
    let hr = (day.getHours() - 12)*30;
    let min = day.getMinutes()*rotationDeg; 
    let sec = day.getSeconds()*rotationDeg;
    
    hour3.style.transform = `rotateZ(${(hr)+ (min/12)}deg)`;
    minute3.style.transform = `rotateZ(${min}deg)`;
    second3.style.transform = `rotateZ(${sec}deg)`;})

