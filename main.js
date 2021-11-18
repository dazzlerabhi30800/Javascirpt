
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("stay.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById('master-play');
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {songName : "Paris-in-Rain", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName : "One-Dance", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName : "Love-Never-Felt-so-good", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName : "Levitating", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName : "Kiss-me-more", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName : "One-Dance", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName : "Love-Never-Felt-so-good", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName : "Levitating", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName : "One-Dance", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  
];
songItems.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime  = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>8){
        songIndex = 0;

    }
    else {
        songIndex +=1; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime  = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0;

    }
    else {
        songIndex -=1; 
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime  = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})