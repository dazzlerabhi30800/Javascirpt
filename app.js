setInterval(currentTime,1000);

function currentTime(){
    let time = new Date();
    let dayName = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    var am_pm = "AM";

    if(hour == 12){
        am_pm = "PM";
    }
    if(hour > 12){
        hour -= 12;
        am_pm = "PM";
    }
    if(hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    hour = hour<10 ? "0" + hour : hour;
    minute = minute<10 ? "0" + minute : minute;
    second = second<10 ? "0" + second : second;


    // value of current time
    let currentTime = hour + ":" + minute + ":" + second +" "+ am_pm;


    // value of present day(Day,Month,Year)

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    var presentDay = week[dayName]+", "+months[month]+" "+date+", "+year;

    const clock = document.getElementById("time");
    const dayIntro = document.getElementById("dayName");

    clock.innerHTML = currentTime;
    dayIntro.innerHTML = presentDay;

}

currentTime();