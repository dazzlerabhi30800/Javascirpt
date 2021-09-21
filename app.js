
let colors = ['red','green','yellow','blue','pink','purple','violet'];

let button = document.querySelector('#button');

button.addEventListener('click',function() {
    let index = parseInt((Math.random()*colors.length)+1);
    console.log(index);

    let canvas = document.querySelector('.canvas');
    canvas.style.background = `${colors[index]}`;
})