const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#bbacf6';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach(card => card.style.backgroundColor = greenColorHash);
});

const firstCard = document.querySelector('.first-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const pinkColorHash = '#f56cf1';

changeColorFirstCardButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = pinkColorHash;
})

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы хотите открыть страницу Google?');

  if (answer === true) {
    window.open('https://www.google.com');
  }
}

const outputConsoleLogButton = document.querySelector('#output-console-log');
outputConsoleLogButton.addEventListener('click',() => outputConsoleLog(не поняла))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}