var circle = document.querySelector('#circle');
var upBtn = document.querySelector('#upBtn');
var downBtn = document.querySelector('#downBtn');

var rotateValue = circle.style.transform;
var rotateSum;


upBtn.addEventListener('click',function(){
    rotatesum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotateValue = rotatesum;
})

downBtn.addEventListener('click',function(){
    rotatesum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotateValue = rotatesum;
})


// upBtn.onclick = function(){
//     rotatesum = rotateValue + "rotate(-90deg)";
//     circle.style.transform = rotatesum;
//     rotateValue = rotatesum;
// }