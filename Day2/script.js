let startTime={
    'hour':0,
    'minute':0,
    'second':0
}
setInterval(() => {
    setClockTime();
    setTimeInAnalogClock();
}, 1000);














function setTimeInAnalogClock(){
    let hour=startTime['hour'];
    let minute=startTime['minute'];
    let second=startTime['second'];
    let second_hand=document.getElementById('second_hand');
    let minute_hand=document.getElementById('minute_hand');
    let hour_hand=document.getElementById('hour_hand');
    second_hand.style.transform=`rotate(${second*6}deg)`;
    minute_hand.style.transform=`rotate(${minute*6}deg)`;
    hour_hand.style.transform=`rotate(${hour*30}deg)`;
}

function setClockTime(){
    let hour= new Date().getHours()%12;
    let minute= new Date().getMinutes();
    let second= new Date().getSeconds();
    startTime['hour']=hour;
    startTime['minute']=minute;
    startTime['second']=second;
    console.log(startTime)
}
