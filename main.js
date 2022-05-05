import {english} from './languages.js';

const output = document.querySelector('.output');

let area = '';

const atherButtons = ["Alt", "Backspace", "Control", "Tab", "CapsLock", "Shift"];

const removeWord = () => {
  console.log('work')
  area = area.slice(0, -1)
  console.log(area)
  output.innerHTML = area;
}

const showFunction = (e) => {
  const isButton = atherButtons.includes(e.key);
  if(isButton){
    console.log(`Don't show ${e.key}`)
    if(e.key == 'Backspace'){
      removeWord();
    }
  } else {
    area += e.key
    output.innerHTML = area;
    if(e.key == 'Backspace'){
      removeWord();
    }
  }
}

const buildEntry = () => {
  const div = document.createElement('div');
  div.className = 'entry';
  document.body.appendChild(div);
}

const createButtons = (letter) => {
  const entry = document.querySelector('.entry');
  const div = document.createElement('div');
  div.className = 'buttons';
  entry.appendChild(div);
  div.textContent = letter;
}

const choseLenguage = (languages) => {
  languages.forEach(el => {
    createButtons(el)
  })
}

buildEntry();
choseLenguage(english[0]);
window.addEventListener('keydown',showFunction);
