import { getTimeOfDay } from './time.js';

const body = document.querySelector('body');
let randomNum = getRandomNum(1, 20);
let timeOfDay = getTimeOfDay();
setBg();


 function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1
}

function setBg() {
  const timeOfDay = getTimeOfDay();

  const bgNum = (randomNum + '').padStart(2, '0');
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/ArtemMyzrov/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  }
}

const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')


function getSlideNext() {
  timeOfDay=getTimeOfDay();
  if (randomNum < 20) {
    randomNum++;
  } else if (randomNum===20){
    randomNum=1
    
  }
  setBg();
}
function getSlidePrev() {
   if (randomNum >1) {
    randomNum--;
  }else if (randomNum===1){
    randomNum=20
  }
  return setBg()
  
}


slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)