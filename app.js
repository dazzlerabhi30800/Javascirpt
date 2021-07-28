
const hero = document.querySelector('.hero');
const logo = document.querySelector('#logo');
const slider = document.querySelector('.slider');
const burger = document.querySelector('.burger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height : "0%"} , {height : "85%" , ease : Power2.easeInOut})
.fromTo(hero,1.2, {width : "119%"}, {width : "50%" , ease : Power2.easeInOut})
.fromTo(slider,1.2,{x: "-100%"}, {x : "0%" , ease: Power2.easeInOut}, "-=1.2")
.fromTo(burger, 1.2 ,{opacity : 0 , x :30},{opacity : 1, x : 0}, "-=0.5")
.fromTo(headline, 1.2 ,{opacity : 0 , x :30},{opacity : 1, x : 0}, "-=0.5")
.fromTo(logo, 1.2 ,{opacity : 0 , x :30},{opacity : 1, x : 0}, "-=0.5")