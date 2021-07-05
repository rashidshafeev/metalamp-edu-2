const adultsMinusButton = document.querySelector('.minus-adults');
const adultsPlusButton = document.querySelector('.plus-adults');
const adultsCounter = document.querySelector('.counter-adults');
const adultsInput = document.querySelector('.input-adults');
let adultsNumber = 0;

const childsMinusButton = document.querySelector('.minus-childs');
const childsPlusButton = document.querySelector('.plus-childs');
const childsCounter = document.querySelector('.counter-childs');
const childsInput = document.querySelector('.input-childs');
let childsNumber = 0;

const infantsMinusButton = document.querySelector('.minus-infants');
const infantsPlusButton = document.querySelector('.plus-infants');
const infantsCounter = document.querySelector('.counter-infants');
const infantsInput = document.querySelector('.input-infants');
let infantsNumber = 0;

const clearGuestsButton = document.querySelector('.guests-clear-button');
const applyGuestsButton = document.querySelector('.guests-apply-button');
const guestsDropdown = document.querySelector('.guests-dropdown');
const guestsDropdownText = document.querySelector('.guests-dropdown-text');
const guestsDropdownContent = document.querySelector('.dropdown-content');


adultsMinusButton.addEventListener('click', (e) => {
  e.preventDefault();
  adultsNumber -= 1;
  adultsCounter.innerText = adultsInput.value = adultsNumber;
  if (adultsNumber === 0) {
    adultsMinusButton.disabled = true;
    hideClearButton();
  }

  drawGuestsDropdownText();
})
adultsPlusButton.addEventListener('click', (e) => {
  e.preventDefault();
  adultsNumber += 1;
  adultsCounter.innerText = adultsInput.value = adultsNumber;
  if (adultsNumber > 0) {
    adultsMinusButton.disabled = false;
    clearGuestsButton.classList.remove('hidden');
  }

  drawGuestsDropdownText();
})

childsMinusButton.addEventListener('click', (e) => {
  e.preventDefault();
  childsNumber -= 1;
  childsCounter.innerText = childsInput.value = childsNumber;
  if (childsNumber === 0) {
    childsMinusButton.disabled = true;
    hideClearButton();
  }

  drawGuestsDropdownText();
})
childsPlusButton.addEventListener('click', (e) => {
  e.preventDefault();
  childsNumber += 1;
  childsCounter.innerText = childsInput.value = childsNumber;
  if (childsNumber > 0) {
    childsMinusButton.disabled = false;
    clearGuestsButton.classList.remove('hidden');
  }

  drawGuestsDropdownText();
})

infantsMinusButton.addEventListener('click', (e) => {
  e.preventDefault();
  infantsNumber -= 1;
  infantsCounter.innerText = infantsInput.value = infantsNumber;
  if (infantsNumber === 0) {
    infantsMinusButton.disabled = true;
    hideClearButton();
  }

  drawGuestsDropdownText();
})
infantsPlusButton.addEventListener('click', (e) => {
  e.preventDefault();
  infantsNumber += 1;
  infantsCounter.innerText = infantsInput.value = infantsNumber;
  if (infantsNumber > 0) {
    infantsMinusButton.disabled = false;
    clearGuestsButton.classList.remove('hidden');
  }

  drawGuestsDropdownText();
})

clearGuestsButton.addEventListener('click', (e) => {
  e.preventDefault();
  adultsNumber = 0;
  childsNumber = 0;
  infantsNumber = 0;

  adultsCounter.innerText = adultsNumber;
  childsCounter.innerText = childsNumber;
  infantsCounter.innerText = infantsNumber;

  adultsMinusButton.disabled = true;
  childsMinusButton.disabled = true;
  infantsMinusButton.disabled = true;
  clearGuestsButton.classList.add('hidden');

  drawGuestsDropdownText();
})

applyGuestsButton.addEventListener('click', (e) => {
  e.preventDefault();
  guestsDropdown.classList.remove('guests-dropdown__active');
  guestsDropdownContent.classList.remove('dropdown-content__active');
})

hideClearButton = () => {
  if (adultsNumber === 0 && childsNumber === 0 && infantsNumber === 0) {
    clearGuestsButton.classList.add('hidden');
  }
}

drawGuestsDropdownText = () => {
  const guestsNumber = adultsNumber + childsNumber + infantsNumber;
  let ending, text;
  const endingsList = ['ь', 'я', 'ей'];
  const lastDigits = guestsNumber % 100;

  if (lastDigits >= 11 && lastDigits <= 14) {
    ending = endingsList[2];
  } else if (lastDigits % 10 === 1) {
    ending = endingsList[0];
  } else if ((lastDigits % 10) >= 2 && (lastDigits % 10) <=4) {
    ending = endingsList[1];
  } else {
    ending = endingsList[2];
  }
  if (guestsNumber === 0) {
    text = `Сколько гостей`;
  } else {
    text = `${guestsNumber} гост${ending}`
  }

  guestsDropdownText.innerText = text;
}

guestsDropdown.addEventListener('click', (e) => {
  guestsDropdown.classList.toggle('guests-dropdown__active');
  guestsDropdownContent.classList.toggle('dropdown-content__active');
})

// const childs = {
//   number: 0;
//   postfix: 'childs',
//   minusButton: document.querySelector(`.minus-${this.postfix}`),
//   plusButton: document.querySelector(`.plus-${this.postfix}`),
//   counter: document.querySelector(`.counter-${this.postfix}`),
// }