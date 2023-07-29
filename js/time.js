const time_element = document.querySelector('.time');
const date_element = document.querySelector('.date');

showTime()




function showTime() {
  let date = new Date();
  const currentTime = date.toLocaleTimeString();
  time_element.textContent = currentTime
  showDate()
  setTimeout(showTime, 1000);
}



function showDate() {
  let date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Europe/saratov' };
  const currentDate = date.toLocaleDateString('en-En', options);
  date_element.textContent = currentDate;


}

const greeting = document.querySelector('.greeting')
getTimeOfDay()


export function getTimeOfDay() {
  let text = '';
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    text = 'morning';
  } else if (hours >= 12 && hours < 18) {
    text = 'afternoon';
  }
  else if (hours >= 18 && hours < 24) {
    text = 'evening';
  }
  else if (hours >= 0 && hours < 6) {
    text = 'night';
  }

  greeting.textContent = 'Good ' + text;
  return text;
}



const name_element = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name_element.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name_element.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);

