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
let isCapsLockActive = 0;
const arrayOfButtons = [];
const LayoutMouthKeyboatd = [];
const Document = this.document;
const colorForButtons = '#444444';
const colorForSpecialButtons = '#222222';
const changingElementNumber = [0, 13, 15, 28, 30, 41, 43, 54];

class Button {
  constructor(nameOfBut) {
    this.elem = Document.createElement('div');
    this.elem.classList.add('button');
    switch (nameOfBut) {
      case 'BackSpace':
        this.setButtonStyle('100px', 'button different BackSpace');
        break;
      case 'Del':
        this.setButtonStyle('45px', 'button different Del');
        break;
      case 'Tab':
        this.setButtonStyle('50px', 'button different Tab');
        break;
      case 'Caps Lock':
        this.setButtonStyle('100px', 'button different CapsLock');
        break;
      case 'Enter': case 'Shift ':
        this.setButtonStyle('85px', 'button different Enter');
        break;
      case 'Shift':
        this.setButtonStyle('100px', 'button different Shift');
        break;
      case 'Ctrl': case 'Ctrl ':
        this.setButtonStyle('40px', 'button different Ctrl');
        break;
      case 'Win':
        this.setButtonStyle('40px', 'button different Win');
        break;
      case 'Alt':
        this.setButtonStyle('40px', 'button different Alt');
        break;
      case '←':
        this.setButtonStyle('40px', 'button different left');
        break;
      case '→':
        this.setButtonStyle('40px', 'button different right');
        break;
      case '↑':
        this.setButtonStyle('40px', 'button different top');
        break;
      case '↓':
        this.setButtonStyle('40px', 'button different down');
        break;
      case ' ':
        this.setButtonStyle('325px', 'button different Space');
        this.elem.style.borderRadius = '5px';
        break;
      default:
        this.elem.style.width = '40px';
        this.elem.className = 'button simple';
        break;
    }
    this.setDisplayValue(nameOfBut);
    arrayOfButtons.push(this.elem);
  }

  setButtonStyle(width, cls) {
    this.elem.style.width = width;
    this.elem.style.backgroundColor = colorForSpecialButtons;
    this.elem.className = cls;
  }

  setDisplayValue(value) {
    this.elem.innerText = value;
  }
}

/* Add containers */
const container = Document.createElement('div');
Document.body.append(container);
container.classList.add('container');
const title = Document.createElement('p');
container.append(title);
title.innerHTML = 'Виртуальная клавиатура';
title.classList.add('title');
const textarea = Document.createElement('textarea');
container.append(textarea);
textarea.value = '';
textarea.classList.add('textarea');
const keyboard = Document.createElement('div');
textarea.after(keyboard);
keyboard.classList.add('keyboard');

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
text.classList.add('text');

/* Add buttons to the screen */
const currentLanguage = this.localStorage.getItem('languige');
let activeLanguage;
if (currentLanguage === 'eng') activeLanguage = EnglishKeyboard;
else activeLanguage = RussianKeyboard;
for (let i = 0; i < activeLanguage.length; i += 1) {
  const temp = new Button(activeLanguage[i]);
  if (i < 14) rows[0].append(temp.elem);
  else if (i < 29) rows[1].append(temp.elem);
  else if (i < 42) rows[2].append(temp.elem);
  else if (i < 55) rows[3].append(temp.elem);
  else rows[4].append(temp.elem);
}

/* Mouse hover */
Document.addEventListener('mouseover', (event) => {
  const backgroundOfButton = this.getComputedStyle(event.target).backgroundColor;
  if (event.target.classList.contains('button')) this.event.target.style.backgroundColor = '#F3B7B6';
  Document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('button')) {
      if (backgroundOfButton === 'rgb(68, 68, 68)') {
        e.target.style.backgroundColor = colorForButtons;
      } else e.target.style.backgroundColor = colorForSpecialButtons;
      if (e.target.classList.contains('Space')) e.target.style.borderRadius = '5px';
      else e.target.style.borderRadius = '10%';
    }
    if (e.target.classList.contains('CapsLock')) {
      if (isCapsLockActive === 1) {
        arrayOfButtons[29].style.backgroundColor = '#F3B7B6';
      } else {
        e.target.style.backgroundColor = colorForSpecialButtons;
      }
    }
  });
});

/* functions for changing the value of buttons */

function isLanguigeRussian() {
  if (arrayOfButtons[0].innerText === 'ё' || arrayOfButtons[0].innerText === 'Ё') return true;
  return false;
}
function toUppercaseLowercase(from, to, caseType) {
  for (let i = from; i < to; i += 1) {
    if (caseType === 'toUpperCase') {
      arrayOfButtons[i].innerText = arrayOfButtons[i].innerText.toUpperCase();
    } else arrayOfButtons[i].innerText = arrayOfButtons[i].innerText.toLowerCase();
  }
}
function capsLockHandler(buttonRegistor) {
  let caseType;
  if (buttonRegistor === 'Upp') caseType = 'toUpperCase';
  else caseType = 'toLowerCase';
  if (isLanguigeRussian()) {
    toUppercaseLowercase(0, 1, caseType);
    toUppercaseLowercase(15, 27, caseType);
    toUppercaseLowercase(30, 41, caseType);
    toUppercaseLowercase(43, 52, caseType);
  } else {
    toUppercaseLowercase(15, 25, caseType);
    toUppercaseLowercase(30, 39, caseType);
    toUppercaseLowercase(43, 50, caseType);
  }
}
function changeColorOfButtons(from, to, keyType) {
  for (let i = from; i < to; i += 1) {
    if (this.event.code === CodesOfAllButtons[i]) {
      if (keyType === 'down') {
        arrayOfButtons[i].style.backgroundColor = '#E49CB2';
        arrayOfButtons[i].style.borderRadius = '50%';
        textarea.value += arrayOfButtons[i].innerText;
        return true;
      }
      arrayOfButtons[i].style.backgroundColor = colorForButtons;
      arrayOfButtons[i].style.borderRadius = '5px';
      return true;
    }
  }
  return false;
}

function uppOnShift(from, to, caseType, count) {
  let temp = count;
  for (let i = from; i < to; i += 1) {
    if (caseType === 'down') arrayOfButtons[i].innerText = EnglishKeyboardShift[temp];
    else arrayOfButtons[i].innerText = EnglishKeyboard[i];
    temp += 1;
  }
  return temp;
}


function cyclyForChangingColorOfButtons(caseType) {
  uppOnShift(50, 53, caseType,
    uppOnShift(39, 41, caseType,
      uppOnShift(25, 28, caseType,
        uppOnShift(0, 13, caseType, 0))));
}

function handlerOfShift(caseType) {
  if (isLanguigeRussian()) {
    for (let i = 0; i < 13; i += 1) {
      if (caseType === 'down') arrayOfButtons[i].innerText = RussianKeyboardShift[i];
      else arrayOfButtons[i].innerText = RussianKeyboard[i];
    }
    if (caseType === 'down') {
      arrayOfButtons[27].innerText = RussianKeyboardShift.slice(13, 14);
      arrayOfButtons[52].innerText = RussianKeyboardShift.slice(14, 15);
    } else {
      arrayOfButtons[27].innerText = RussianKeyboard.slice(27, 28);
      arrayOfButtons[52].innerText = RussianKeyboard.slice(52, 53);
    }
  } else {
    cyclyForChangingColorOfButtons(caseType);
  }
  if (caseType === 'down') capsLockHandler('Upp');
  else capsLockHandler('Low');
}

function handlerOfCapsLock() {
  if (isCapsLockActive === 0) {
    arrayOfButtons[29].style.backgroundColor = '#F3B7B6';
    capsLockHandler('Upp');
    isCapsLockActive = 1;
  } else {
    arrayOfButtons[29].style.backgroundColor = colorForSpecialButtons;
    arrayOfButtons[29].style.transition = '1s';
    arrayOfButtons[29].style.borderRadius = '5px';
    capsLockHandler('Low');
    isCapsLockActive = 0;
  }
}

function changeColorOfSpecialButtons(caseType) {
  const temp = CodesOfAllButtons.indexOf(this.event.code, 0);
  const isSpecialButton = CodesOfSpecialButtons.includes(this.event.code);
  if (temp !== -1 && isSpecialButton) {
    if (caseType === 'down') {
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
        arrayOfButtons[temp].style.backgroundColor = colorForSpecialButtons;
        arrayOfButtons[temp].style.borderRadius = '5px';
      }
    }
    if (temp === 54 || temp === 42) { /* Shift */
      textarea.value += '';
      handlerOfShift(caseType);
    }
  }
}


/* Chenge layout */
function switchLayout() {
  if (LayoutMouthKeyboatd.includes('Alt', 0) && LayoutMouthKeyboatd.includes('Ctrl')) {
    if (isLanguigeRussian()) {
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
/* Chenging the value of buttons */

Document.addEventListener('keydown', (event) => {
  /* changing fo color and input */
  if (!CodesOfSpecialButtons.includes(event.code)) {
    if (!changeColorOfButtons(changingElementNumber[0], changingElementNumber[1], 'down')) {
      if (!changeColorOfButtons(changingElementNumber[2], changingElementNumber[3], 'down')) {
        if (!changeColorOfButtons(changingElementNumber[4], changingElementNumber[5], 'down')) {
          changeColorOfButtons(changingElementNumber[6], changingElementNumber[7], 'down');
        }
      }
    }
  }
  changeColorOfSpecialButtons('down');
  switchLayout();
});
Document.addEventListener('keyup', () => {
  if (!changeColorOfButtons(changingElementNumber[0], changingElementNumber[1], 'up')) {
    if (!changeColorOfButtons(changingElementNumber[2], changingElementNumber[3], 'up')) {
      if (!changeColorOfButtons(changingElementNumber[4], changingElementNumber[5], 'up')) {
        changeColorOfButtons(changingElementNumber[6], changingElementNumber[7], 'up');
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
  switchLayout();
});
Document.addEventListener('mouseup', (event) => {
  this.event.target.style.borderRadius = '5px';
  if (event.target.classList.contains('button')) {
    if (event.target.innerText === 'Shift' || event.target.innerText === 'Shift ') handlerOfShift('up');
    if (event.target.innerText === 'Alt' || event.target.innerText === 'Ctrl') LayoutMouthKeyboatd.pop();
  }
});
