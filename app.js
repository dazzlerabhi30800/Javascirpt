
const carouselSlider = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Buttons Listeners
nextBtn.addEventListener('click', ()=> {
    if(counter >= carouselImage.length - 1) return; 
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlider.addEventListener('transitionend', ()=> {
    // console.log(carouselImage[counter]);
    // console.log(counter);
    if(carouselImage[counter].id == 'lastClone'){
        carouselSlider.style.transition = "none";
        counter = carouselImage.length - 2;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(carouselImage[counter].id == 'firstClone'){
        carouselSlider.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
