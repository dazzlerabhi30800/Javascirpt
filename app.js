const countDown = () => {
    const countDate = new Date("August 05,2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // How the fuck does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate the shit
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    // console.log(textDay);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;


    // console.log(gap);
}

setInterval(countDown,1000);