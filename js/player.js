import playList from './playList.js';

const audio = document.querySelector('audio');
let btnPlay = document.querySelector(".play");
let btnPrev = document.querySelector(".play-prev");
let btnNext = document.querySelector(".play-next");
let playItem = document.querySelectorAll('.play-item')

let track;
let isPlay = false;

window.onload = function () {
    track = 0;

}
audio.onended = function (){
    playNext() ;
}

function switchTrack() {
    audio.src = playList[track].src;
    audio.currentTime = 0;
    audio.muted = false;
    if (isPlay===true) {
        audio.pause();
        isPlay=false;
        
    } else {
        playItem[track].classList.add('item-active')
       audio.play();
       isPlay=true;
    }
    console.log(track)
   
}


function playNext(){
    playItem[track].classList.remove('item-active')
    audio.src = playList[track].src;
    if(track < 3){
        track++;
    }else if (track >= 3){
        track=0;
    }
    switchTrack()
    audio.play()
    playItem[track].classList.add('item-active')
    
}
function playPrev(){
    playItem[track].classList.remove('item-active')
    audio.src = playList[track].src;
    if(track >0){
        track--;
    }else if (track === 0){
        track=3;
    }
    switchTrack()
    audio.play()
    playItem[track].classList.add('item-active')
}

function toggleBtn() {
    btnPlay.classList.toggle('pause');
  }
  btnPlay.addEventListener('click', toggleBtn);




btnPlay.addEventListener('click', switchTrack)
btnNext.addEventListener('click', playNext)
btnPrev.addEventListener('click', playPrev)







