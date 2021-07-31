// Need to make a function that can get rid of the preloader

window.addEventListener('load',() => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})