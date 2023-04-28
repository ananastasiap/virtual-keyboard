export const createKeys = () => {
  const row1 = {
    Backquote: ['`', '~', 'ё', 'Ё'],
    Digit1: ['1', '!', '1', '!'],
    Digit2: ['2', '@', '2', '"'],
    Digit3: ['3', '#', '3', '№'],
    Digit4: ['4', '$', '4', ';'],
    Digit5: ['5', '%', '5', '%'],
    Digit6: ['6', '^', '6', ':'],
    Digit7: ['7', '&', '7', '?'],
    Digit8: ['8', '*', '8', '*'],
    Digit9: ['9', '(', '9', '('],
    Digit0: ['0', ')', '0', ')'],
    Minus: ['-', '_', '-', '_'],
    Equal: ['=', '+', '=', '+'],
    Backspace: ['Backspace', 'forFunctions']
  };

  const row2 = {
    Tab: ['Tab', 'Tab', 'Tab', 'Tab'],
    KeyQ: ['q', 'Q', 'й', 'Й'],
    KeyW: ['w', 'W', 'ц', 'Ц'],
    KeyE: ['e', 'E', 'у', 'У'],
    KeyR: ['r', 'R', 'к', 'К'],
    KeyT: ['t', 'T', 'е', 'Е'],
    KeyY: ['y', 'Y', 'н', 'Н'],
    KeyU: ['u', 'U', 'г', 'Г'],
    KeyI: ['i', 'I', 'ш', 'Ш'],
    KeyO: ['o', 'O', 'щ', 'Щ'],
    KeyP: ['p', 'P', 'з', 'З'],
    BracketLeft: ['[', '{', 'х', 'Х'],
    BracketRight: [']', '}', 'ъ', 'Ъ'],
    Backslash: ['\\', '|', '\\', '/']
  };

  const row3 = {
    CapsLock: ['CapsLock', 'forFunctions'],
    KeyA: ['a', 'A', 'ф', 'Ф'],
    KeyS: ['s', 'S', 'ы', 'Ы'],
    KeyD: ['d', 'D', 'в', 'В'],
    KeyF: ['f', 'F', 'а', 'А'],
    KeyG: ['g', 'G', 'п', 'П'],
    KeyH: ['h', 'H', 'р', 'Р'],
    KeyJ: ['j', 'J', 'о', 'О'],
    KeyK: ['k', 'K', 'л', 'Л'],
    KeyL: ['l', 'L', 'д', 'Д'],
    Semicolon: [';', ':', 'ж', 'Ж'],
    Quote: ['\'', '"', 'э', 'Э'],
    Enter: ['Enter', 'forFunctions']
  };

  const row4 = {
    ShiftLeft: ['⇧ Shift', 'forFunctions'],
    KeyZ: ['z', 'Z', 'я', 'Я'],
    KeyX: ['x', 'X', 'ч', 'Ч'],
    KeyC: ['c', 'C', 'с', 'С'],
    KeyV: ['v', 'V', 'м', 'М'],
    KeyB: ['b', 'B', 'и', 'И'],
    KeyN: ['n', 'N', 'т', 'Т'],
    KeyM: ['m', 'M', 'ь', 'Ь'],
    Comma: [',', '<', 'б', 'Б'],
    Period: ['.', '>', 'ю', 'Ю'],
    Slash: ['/', '?', '.', ','],
    ArrowUp: ['↑', 'forFunctions'],
    ShiftRight: [' ⇧ Shift', 'forFunctions']
  };

  const row5 = {
    ControlLeft: ['CTRL', 'forFunctions'],
    MetaLeft: ['Meta', 'forFunctions'],
    AltLeft: ['Alt', 'forFunctions'],
    Space: [' ', ' ', ' ', ' '],
    AltRight: ['Alt', 'forFunctions'],
    ControlRight: ['CTRL', 'forFunctions'],
    ArrowLeft: ['←', 'forFunctions'],
    ArrowDown: ['↓', 'forFunctions'],
    ArrowRight: ['→', 'forFunctions']
  };

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const createKeys = (row) => {
    for (const key in row) {
      const button = document.createElement('button');

      button.setAttribute('type', 'button');
      button.setAttribute('class', 'button');
      button.setAttribute('data-key', key);

      const keyWidth = {
        Backquote: '40px',
        Backspace: '150px',
        Tab: '100px',
        Backslash: '82px',
        CapsLock: '130px',
        Enter: '130px',
        ShiftLeft: '130px',
        ShiftRight: '130px',
        ControlLeft: '130px',
        Space: '245px'
      };

      if (keyWidth[key]) {
        button.style.width = keyWidth[key];
      }

      const label = document.createTextNode(row[key][0]);
      button.appendChild(label);
      keyboard.appendChild(button);
    }

    document.body.appendChild(keyboard);
  };

  createKeys(row1);
  createKeys(row2);
  createKeys(row3);
  createKeys(row4);
  createKeys(row5);
};
