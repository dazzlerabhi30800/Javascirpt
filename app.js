
const moonPath = "M18 28.5C18 43.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 13.3122 18 28.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.querySelector('#darkMode');
let toggle = false;

// We need to click on the sun
darkMode.addEventListener('click',()=> {
    // Here we need to use anime.js
    // Here we need to setup the timeline
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo",
    });
    // ADD DIFFERENT ANIMATION TO THE TIMELINE
    timeline.add({
        targets : ".sun",
        d : [
            {value : toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets : "#darkMode",
        rotate : 320,
    }, '-= 200')
    .add({
        targets : "section",
        backgroundColor : toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color : toggle ?  "rgb(22,22,22)" :  "rgb(255,255,255)"
    }, "-= 100");

    // Everytime we click on the sun i want the toggle to be switch
    if(!toggle){
        toggle = true;
    }
    else{
        toggle = false;
    }


});