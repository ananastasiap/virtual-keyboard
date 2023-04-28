export const createKeys = (keyboard) => {
  // create an object of arrays for each row of keyboard
  const objectOfAllKeys = [
    {
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
      Backspace: ['Backspace', 'controlButton']
    },
    {
      Tab: ['    ', '    ', '    ', '    '],
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
    },
    {
      CapsLock: ['CapsLock', 'controlButton'],
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
      Enter: ['<br />', 'controlButton']
    },
    {
      ShiftLeft: ['⇧ Shift', 'controlButton'],
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
      ArrowUp: ['↑', 'controlButton'],
      ShiftRight: [' ⇧ Shift', 'controlButton']
    },
    {
      ControlLeft: ['Control', 'controlButton'],
      MetaLeft: ['Meta', 'controlButton'],
      AltLeft: ['Alt', 'controlButton'],
      Space: [' ', ' ', ' ', ' '],
      AltRight: ['Alt', 'controlButton'],
      ControlRight: ['Control', 'controlButton'],
      ArrowLeft: ['←', 'controlButton'],
      ArrowDown: ['↓', 'controlButton'],
      ArrowRight: ['→', 'controlButton']
    }
  ];

  const width = [
    20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 60,
    45, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 45,
    45, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 75,
    75, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 75,
    75, 30, 170, 30, 30, 30, 30, 30
  ];
};
