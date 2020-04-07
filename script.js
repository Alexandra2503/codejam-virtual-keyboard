const RussianKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl '];
const RussianKeyboardShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', ','];

const EnglishKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift ',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'];
const EnglishKeyboardShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];

const CodesOfAllButtons = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const CodesOfSpecialButtons = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const arrayOfButtons = [];
let CapsLockCounter = 0;
const LayoutMouthKeyboatd = [];
const Document = this.document;

class Button {
  constructor(nameOfBut) {
    this.type = Document.createElement('div');
    this.type.style.cssText = 'height: 40px; background: #444444; color: white; display: flex; justify-content: center; align-items: center;  border-radius: 10%; margin-left: 5px; margin-bottom: 5px;';
    switch (nameOfBut) {
      case 'BackSpace':
        this.cssStyleForButton('100px', 'button different BackSpace');
        break;
      case 'Del':
        this.cssStyleForButton('45px', 'button different Del');
        break;
      case 'Tab':
        this.cssStyleForButton('50px', 'button different Tab');
        break;
      case 'Caps Lock':
        this.cssStyleForButton('100px', 'button different CapsLock');
        break;
      case 'Enter': case 'Shift ':
        this.cssStyleForButton('85px', 'button different Enter');
        break;
      case 'Shift':
        this.cssStyleForButton('100px', 'button different Shift');
        break;
      case 'Ctrl': case 'Ctrl ':
        this.cssStyleForButton('40px', 'button different Ctrl');
        break;
      case 'Win':
        this.cssStyleForButton('40px', 'button different Win');
        break;
      case 'Alt':
        this.cssStyleForButton('40px', 'button different Alt');
        break;
      case '←':
        this.cssStyleForButton('40px', 'button different left');
        break;
      case '→':
        this.cssStyleForButton('40px', 'button different right');
        break;
      case '↑':
        this.cssStyleForButton('40px', 'button different top');
        break;
      case '↓':
        this.cssStyleForButton('40px', 'button different down');
        break;
      case ' ':
        this.cssStyleForButton('325px', 'button different Space');
        this.type.style.borderRadius = '5px';
        break;
      default:
        this.type.style.width = '40px';
        this.className('button simple');
        break;
    }
    this.innerDiv(nameOfBut);
    arrayOfButtons.push(this.type);
  }

  cssStyleForButton(width, cls) {
    this.type.style.width = width;
    this.type.style.backgroundColor = '#222222';
    this.className(cls);
  }

  innerDiv(value) {
    this.type.innerText = value;
  }

  className(value) {
    this.type.className = value;
  }

  appendButton(value) {
    this.type.append(value.getType);
  }

  get getType() {
    return this.type;
  }
}

/* Add containers */
const container = Document.createElement('div');
Document.body.append(container);
container.style.cssText = 'width: 700px; margin: 0 auto;';
const title = Document.createElement('p');
container.append(title);
title.innerHTML = 'Виртуальная клавиатура';
title.style.cssText = 'width: 700px; text-align: center; color: #F3B7B6; margin: 5px auto; font-size: 24px';
const textarea = Document.createElement('textarea');
container.append(textarea);
textarea.value = '';
textarea.style.cssText = 'width: 690px; height: 300px; margin-bottom: 7px';
const keyboard = Document.createElement('div');
textarea.after(keyboard);
keyboard.style.cssText = 'background-color: #888888; padding-right:5px; padding-top:5px; width:691px';

/* Add rows */
const rows = [Document.createElement('div'), Document.createElement('div'), Document.createElement('div'), Document.createElement('div'), Document.createElement('div')];
for (let i = 0; i < rows.length; i += 1) {
  keyboard.append(rows[i]);
  rows[i].style.cssText = 'display: flex; flex-derection:row';
}
/* Add text after keyboard */
const text = Document.createElement('p');
container.append(text);
text.innerHTML = 'Виртуальная клавиатура создана в операционной системе Windows \n Для переключения языка: комбинация ctrl + alt';
text.style.cssText = 'width: 600px; text-align: center; color: #CD72D1; margin: 5px auto; font-size: 20px';

/* Add buttons to the screen */
const ruOrEng = this.localStorage.getItem('languige');
let activeLanguage;
if (ruOrEng === 'eng') activeLanguage = EnglishKeyboard;
else activeLanguage = RussianKeyboard;
for (let i = 0; i < activeLanguage.length; i += 1) {
  const temp = new Button(activeLanguage[i]);
  if (i < 14) rows[0].append(temp.getType);
  else if (i < 29) rows[1].append(temp.getType);
  else if (i < 42) rows[2].append(temp.getType);
  else if (i < 55) rows[3].append(temp.getType);
  else rows[4].append(temp.getType);
}

/* Mouse hover */
Document.addEventListener('mouseover', (event) => {
  const backgroundOfButton = this.getComputedStyle(event.target).backgroundColor;
  if (event.target.classList.contains('button')) this.event.target.style.backgroundColor = '#F3B7B6';
  Document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('button')) {
      if (backgroundOfButton === 'rgb(68, 68, 68)') {
        e.target.style.backgroundColor = '#444444';
      } else e.target.style.backgroundColor = '#222222';
      if (e.target.classList.contains('Space')) e.target.style.borderRadius = '5px';
      else e.target.style.borderRadius = '10%';
    }
    if (e.target.classList.contains('CapsLock')) {
      if (CapsLockCounter === 1) {
        arrayOfButtons[29].style.backgroundColor = '#F3B7B6';
      } else {
        e.target.style.backgroundColor = '#222222';
      }
    }
  });
});

/* functions for changing the value of buttons */

function toUppercaseLowercase(val1, val2, upcase) {
  for (let i = val1; i < val2; i += 1) {
    if (upcase === 'toUpperCase') arrayOfButtons[i].innerText = arrayOfButtons[i].innerText.toUpperCase();
    else arrayOfButtons[i].innerText = arrayOfButtons[i].innerText.toLowerCase();
  }
}
function capsLockFunction(upLowCase) {
  let temp;
  if (upLowCase === 'Upp') temp = 'toUpperCase';
  else temp = 'roLowerCase';
  if (arrayOfButtons[0].innerText === 'ё' || arrayOfButtons[0].innerText === 'Ё') {
    toUppercaseLowercase(0, 1, temp);
    toUppercaseLowercase(15, 27, temp);
    toUppercaseLowercase(30, 41, temp);
    toUppercaseLowercase(43, 52, temp);
  } else {
    toUppercaseLowercase(15, 25, temp);
    toUppercaseLowercase(30, 39, temp);
    toUppercaseLowercase(43, 50, temp);
  }
}
function changeColorOfButtons(val1, val2, color) {
  for (let i = val1; i < val2; i += 1) {
    if (this.event.code === CodesOfAllButtons[i]) {
      if (color === 'down') {
        arrayOfButtons[i].style.backgroundColor = '#E49CB2';
        arrayOfButtons[i].style.borderRadius = '50%';
        textarea.value += arrayOfButtons[i].innerText;
        return true;
      }
      arrayOfButtons[i].style.backgroundColor = '#444444';
      arrayOfButtons[i].style.borderRadius = '5px';
      return true;
    }
  }
  return false;
}

function uppOnShift(val1, val2, uplowcase, count) {
  let temp = count;
  for (let i = val1; i < val2; i += 1) {
    if (uplowcase === 'down') arrayOfButtons[i].innerText = EnglishKeyboardShift[temp];
    else arrayOfButtons[i].innerText = EnglishKeyboard[i];
    temp += 1;
  }
  return temp;
}


function cyclyForChangingColorOfButtons(color) {
  uppOnShift(50, 53, color,
    uppOnShift(39, 41, color,
      uppOnShift(25, 28, color,
        uppOnShift(0, 13, color, 0))));
}

function handlerOfShift(color) {
  if (arrayOfButtons[0].innerText === 'ё' || arrayOfButtons[0].innerText === 'Ё') {
    for (let i = 0; i < 13; i += 1) {
      if (color === 'down') arrayOfButtons[i].innerText = RussianKeyboardShift[i];
      else arrayOfButtons[i].innerText = RussianKeyboard[i];
    }
    if (color === 'down') {
      arrayOfButtons[27].innerText = RussianKeyboardShift.slice(13, 14);
      arrayOfButtons[52].innerText = RussianKeyboardShift.slice(14, 15);
    } else {
      arrayOfButtons[27].innerText = RussianKeyboard.slice(27, 28);
      arrayOfButtons[52].innerText = RussianKeyboard.slice(52, 53);
    }
  } else {
    cyclyForChangingColorOfButtons(color);
  }
  if (color === 'down') capsLockFunction('Upp');
  else capsLockFunction('Low');
}

function handlerOfCapsLock() {
  if (CapsLockCounter === 0) {
    arrayOfButtons[29].style.backgroundColor = '#F3B7B6';
    capsLockFunction('Upp');
    CapsLockCounter = 1;
  } else {
    arrayOfButtons[29].style.backgroundColor = '#222222';
    arrayOfButtons[29].style.transition = '1s';
    arrayOfButtons[29].style.borderRadius = '5px';
    capsLockFunction('Low');
    CapsLockCounter = 0;
  }
}

function changeColorOfSpecialButtons(color) {
  const temp = CodesOfAllButtons.indexOf(this.event.code, 0);
  const buttonInSpecialArray = CodesOfSpecialButtons.includes(this.event.code, 0);
  if (temp !== -1 && buttonInSpecialArray === true) {
    if (color === 'down') {
      arrayOfButtons[temp].style.backgroundColor = '#E49CB2';
      arrayOfButtons[temp].style.borderRadius = '40%';
      switch (temp) {
        case 13: textarea.value = textarea.value.slice(0, textarea.value.length - 1);
          break;
        case 14:
          this.event.preventDefault();
          textarea.value += '    ';
          break;
        case 29: handlerOfCapsLock();
          break;
        case 41: textarea.value += '\n';
          break;
        case 53: textarea.value += '↑';
          break;
        case 58: textarea.value += ' ';
          break;
        case 62: textarea.value += '→';
          break;
        case 61: textarea.value += '↓';
          break;
        case 60: textarea.value += '←';
          break;
        case 57: case 59: this.event.preventDefault();
          LayoutMouthKeyboatd.push('Alt');
          textarea.value += '';
          break;
        case 55: case 63:
          LayoutMouthKeyboatd.push('Ctrl');
          textarea.value += '';
          break;
        case 28: case 56: textarea.value += '';
          break;
        default:
          break;
      }
    } else {
      if (temp === 55 || temp === 63 || temp === 57 || temp === 59) LayoutMouthKeyboatd.pop();
      if (temp !== 29) {
        arrayOfButtons[temp].style.backgroundColor = '#222222';
        arrayOfButtons[temp].style.borderRadius = '5px';
      }
    }
    if (temp === 54 || temp === 42) { /* Shift */
      textarea.value += '';
      handlerOfShift(color);
    }
  }
}


/* Chenge layout */
function layoutSwitching() {
  if (LayoutMouthKeyboatd.includes('Alt', 0) && LayoutMouthKeyboatd.includes('Ctrl', 0)) {
    if (arrayOfButtons[0].innerText === 'ё' || arrayOfButtons[0].innerText === 'Ё') {
      for (let i = 0; i < EnglishKeyboard.length; i += 1) {
        arrayOfButtons[i].innerText = EnglishKeyboard[i];
      }
      this.localStorage.setItem('languige', 'eng');
    } else {
      for (let i = 0; i < RussianKeyboard.length; i += 1) {
        arrayOfButtons[i].innerText = RussianKeyboard[i];
      }
      this.localStorage.setItem('languige', 'rus');
    }
  }
}
/* Изменение значения кнопок */

Document.addEventListener('keydown', (event) => {
  /* Иземенение цвета и вывод в input */
  if (!CodesOfSpecialButtons.includes(event.code, 0)) {
    if (!changeColorOfButtons(0, 13, 'down')) {
      if (!changeColorOfButtons(15, 28, 'down')) {
        if (!changeColorOfButtons(30, 41, 'down')) {
          changeColorOfButtons(43, 53, 'down');
        }
      }
    }
  }
  changeColorOfSpecialButtons('down');
  /* Переключение раскладки */
  layoutSwitching();
});
Document.addEventListener('keyup', () => {
  if (!changeColorOfButtons(0, 13, 'up')) {
    if (!changeColorOfButtons(15, 28, 'up')) {
      if (!changeColorOfButtons(30, 41, 'up')) {
        changeColorOfButtons(43, 54, 'up');
      }
    }
  }
  changeColorOfSpecialButtons('up');
});


container.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('button')) {
    this.event.target.style.backgroundColor = '#E49CB2';
  }
  if (event.target.classList.contains('simple')) {
    textarea.value += event.target.innerText;
    this.event.target.style.borderRadius = '50%';
  }
  if (event.target.classList.contains('different')) {
    this.event.target.style.borderRadius = '30%';
    if (event.target.classList.contains('Space')) textarea.value += ' ';
    switch (event.target.innerText) {
      case '↑': textarea.value += '↑';
        break;
      case '↓': textarea.value += '↓';
        break;
      case '→': textarea.value += '→';
        break;
      case '←': textarea.value += '←';
        break;
      case 'Enter': textarea.value += '\n';
        break;
      case 'BackSpace': textarea.value = textarea.value.slice(0, textarea.value.length - 1);
        break;
      case 'Tab': textarea.value += '    ';
        break;
      case 'Alt':
        LayoutMouthKeyboatd.push('Alt');
        textarea.value += '';
        break;
      case 'Ctrl':
        LayoutMouthKeyboatd.push('Ctrl');
        textarea.value += '';
        break;
      case 'Win': case 'Del': case 'Shift': case 'Shift ':
        textarea.value += '';
        break;
      default: break;
    }
    if (event.target.innerText === 'Caps Lock') handlerOfCapsLock();
    if (event.target.innerText === 'Shift' || event.target.innerText === 'Shift ') {
      textarea.value += '';
      handlerOfShift('down');
    }
  }
  layoutSwitching();
});
Document.addEventListener('mouseup', (event) => {
  this.event.target.style.borderRadius = '5px';
  if (event.target.classList.contains('button')) {
    if (event.target.innerText === 'Shift' || event.target.innerText === 'Shift ') handlerOfShift('up');
    if (event.target.innerText === 'Alt' || event.target.innerText === 'Ctrl') LayoutMouthKeyboatd.pop();
  }
});
