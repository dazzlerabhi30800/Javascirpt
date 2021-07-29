const logo = document.querySelectorAll('#logo path');
// console.log(logo);

for(let i = 1; i<logo.length;i++){
    console.log(`The ${i} is ${logo[i].getTotalLength()}`);
}

const path = document.querySelector('#path1');

console.log(path);