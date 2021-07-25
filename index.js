
console.log('This is index.js');

window.addEventListener("load", ()=> {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        'rgb(195, 146, 240)',
        'rgb(103, 237, 247)',
        'rgb(228, 238, 88)',
        'chartreuse',
        'rgb(245, 101, 202)',
        'rgb(119, 245, 192)'

        // "#60d394",
        // "#d36060",
        // "#c060d3",
        // "#d3d160",
        // "#606bd3",
        // "#60c2d3"




    ];


    console.log(sounds[0]);

    // Let's get going to the sound here
    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    // Create a function that makes bubbles
    const createBubble = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
       bubble.addEventListener('animationend',function(){
           visual.removeChild(this);
       })
    };
});

