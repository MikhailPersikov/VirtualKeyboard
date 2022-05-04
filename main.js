const output = document.querySelector('.output');

let area = '';

const removeWord = () => {
  console.log('work')
  area = area.slice(0, -1)
  console.log(area)
  output.innerHTML = area;
}

// const atherButtons = {
//   alt:"Alt",
//   backspace:"Backspace",
//   ctrl:"Control",
//   tab:"Tab"
// }

const atherButtons = ["Alt", "Backspace", "Control", "Tab", "CapsLock", "Shift"];

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

buildEntry();
window.addEventListener('keydown',showFunction);


