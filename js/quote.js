function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (8 - 0)) + 1
}

const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const change = document.querySelector('.change-quote')

async function getQuotes() {
  const quotes = 'quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();

  let num = getRandomNum(0, 8);


  quote.textContent = data[num].text;
  author.textContent = data[num].author;


}
getQuotes();

change.addEventListener('click', getQuotes)

