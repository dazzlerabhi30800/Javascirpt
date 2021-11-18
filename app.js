let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".girl", 3, { y: -300 })
  .to(".rock", 3, { y: -300 }, "-=3")
  .fromTo(".bg1",  { y: 10 },{y : 0}, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo('.content-images',{opacity : 0},{opacity : 1,duration : 3})
  .fromTo('.text',{opacity : 0},{opacity : 1,duration : 3})
  ;

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
