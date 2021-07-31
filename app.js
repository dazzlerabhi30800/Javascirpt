function parallex(element,distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;

}

window.addEventListener('scroll',() => {
    parallex("header",window.scrollY,1);
    parallex(".small-rose",window.scrollY,0.5);
    parallex(".big-rose",window.scrollY,0.5);
})