const texts = ['websites', 'illustrations', 'animations'];
let count = 0;  // Counts for words in texts
let index = 0;  // Index is for individual letters in texts
let currentText = '';
let letter = '';

(function typeOf(){
    if(count >= texts.length){
        count = 0;

    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length == currentText.length){
        count++;
        index = 0;

    }

    setTimeout(typeOf,200)

}())