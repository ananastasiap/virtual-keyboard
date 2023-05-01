export const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

export const buttons = [];
let isSwitchLang = true;

export const createKeys = () => {
  const keyboardRows = [
    [
      {
        eventCode: 'Backquote',
        lang: { en: '`', ru: 'ё' },
        width: '60'
      },
      {
        eventCode: 'Digit1',
        lang: { en: '1', ru: '1' },
        width: '60'
      },
      {
        eventCode: 'Digit2',
        lang: { en: '2', ru: '2' },
        width: '60'
      },
      {
        eventCode: 'Digit3',
        lang: { en: '3', ru: '3' },
        width: '60'
      },
      {
        eventCode: 'Digit4',
        lang: { en: '4', ru: '4' },
        width: '60'
      },
      {
        eventCode: 'Digit5',
        lang: { en: '5', ru: '5' },
        width: '60'
      },
      {
        eventCode: 'Digit6',
        lang: { en: '6', ru: '6' },
        width: '60'
      },
      {
        eventCode: 'Digit7',
        lang: { en: '7', ru: '7' },
        width: '60'
      },
      {
        eventCode: 'Digit8',
        lang: { en: '8', ru: '8' },
        width: '60'
      },
      {
        eventCode: 'Digit9',
        lang: { en: '9', ru: '9' },
        width: '60'
      },
      {
        eventCode: 'Digit0',
        lang: { en: '0', ru: '0' },
        width: '60'
      },
      {
        eventCode: 'Minus',
        lang: { en: '-', ru: '-' },
        width: '60'
      },
      {
        eventCode: 'Equal',
        lang: { en: '=', ru: '=' },
        width: '60'
      },
      {
        eventCode: 'Backspace',
        lang: { en: '⥪ Backspace', ru: '⥪ Backspace' },
        width: '150'
      }
    ],

    [
      {
        eventCode: 'Tab',
        lang: { en: 'Tab', ru: 'Tab' },
        width: '100'
      },
      {
        eventCode: 'KeyQ',
        lang: { en: 'q', ru: 'й' },
        width: '60'
      },
      {
        eventCode: 'KeyW',
        lang: { en: 'w', ru: 'ц' },
        width: '60'
      },
      {
        eventCode: 'KeyE',
        lang: { en: 'e', ru: 'у' },
        width: '60'
      },
      {
        eventCode: 'KeyR',
        lang: { en: 'r', ru: 'к' },
        width: '60'
      },
      {
        eventCode: 'KeyT',
        lang: { en: 't', ru: 'е' },
        width: '60'
      },
      {
        eventCode: 'KeyY',
        lang: { en: 'y', ru: 'н' },
        width: '60'
      },
      {
        eventCode: 'KeyU',
        lang: { en: 'u', ru: 'г' },
        width: '60'
      },
      {
        eventCode: 'KeyI',
        lang: { en: 'i', ru: 'ш' },
        width: '60'
      },
      {
        eventCode: 'KeyO',
        lang: { en: 'o', ru: 'щ' },
        width: '60'
      },
      {
        eventCode: 'KeyP',
        lang: { en: 'p', ru: 'з' },
        width: '60'
      },
      {
        eventCode: 'BracketLeft',
        lang: { en: '[', ru: 'х' },

        width: '60'
      },
      {
        eventCode: 'BracketRight',
        lang: { en: ']', ru: 'ъ' },
        width: '60'
      },
      {
        eventCode: 'Backslash',
        lang: { en: '\\', ru: '\\' },
        width: '120'
      },
    ],

    [
      {
        eventCode: 'CapsLock',
        lang: { en: 'Caps Lock', ru: 'Caps Lock' },
        width: '130'
      },
      {
        eventCode: 'KeyA',
        lang: { en: 'a', ru: 'ф' },
        width: '60'
      },
      {
        eventCode: 'KeyS',
        lang: { en: 's', ru: 'ы' },
        width: '60'
      },
      {
        eventCode: 'KeyD',
        lang: { en: 'd', ru: 'в' },
        width: '60'
      },
      {
        eventCode: 'KeyF',
        lang: { en: 'f', ru: 'а' },
        width: '60'
      },
      {
        eventCode: 'KeyG',
        lang: { en: 'g', ru: 'п' },
        width: '60'
      },
      {
        eventCode: 'KeyH',
        lang: { en: 'h', ru: 'р' },
        width: '60'
      },
      {
        eventCode: 'KeyJ',
        lang: { en: 'j', ru: 'о' },
        width: '60'
      },
      {
        eventCode: 'KeyK',
        lang: { en: 'k', ru: 'л' },
        width: '60'
      },
      {
        eventCode: 'KeyL',
        lang: { en: 'l', ru: 'д' },
        width: '60'
      },
      {
        eventCode: 'Semicolon',
        lang: { en: ';', ru: 'ж' },
        width: '60'
      },
      {
        eventCode: 'Quote',
        lang: { en: "'", ru: 'э' },
        width: '60'
      },
      {
        eventCode: 'Enter',
        lang: { en: '⥪ Enter', ru: '⥪ Enter' },
        width: '130'
      }
    ],

    [
      {
        eventCode: 'ShiftLeft',
        lang: { en: '⥣ Shift', ru: '⥣ Shift' },
        width: '130'
      },
      {
        eventCode: 'KeyZ',
        lang: { en: 'z', ru: 'я' },
        width: '60'
      },
      {
        eventCode: 'KeyX',
        lang: { en: 'x', ru: 'ч' },
        width: '60'
      },
      {
        eventCode: 'KeyC',
        lang: { en: 'c', ru: 'с' },
        width: '60'
      },
      {
        eventCode: 'KeyV',
        lang: { en: 'v', ru: 'м' },
        width: '60'
      },
      {
        eventCode: 'KeyB',
        lang: { en: 'b', ru: 'и' },
        width: '60'
      },
      {
        eventCode: 'KeyN',
        lang: { en: 'n', ru: 'т' },
        width: '60'
      },
      {
        eventCode: 'KeyM',
        lang: { en: 'm', ru: 'ь' },
        width: '60'
      },
      {
        eventCode: 'Comma',
        lang: { en: ',', ru: 'б' },
        width: '60'
      },
      {
        eventCode: 'Period',
        lang: { en: '.', ru: 'ю' },
        width: '60'
      },
      {
        eventCode: 'Slash',
        lang: { en: '/', ru: '.' },
        width: '60'
      },
      {
        eventCode: 'ArrowUp',
        lang: { en: '↑', ru: '↑' },
        width: '60'
      },
      {
        eventCode: 'ShiftRight',
        lang: { en: '⥣ Shift', ru: '⥣ Shift' },
        width: '130'
      }
    ],

    [
      {
        eventCode: 'ControlLeft',
        lang: { en: 'CTRL', ru: 'CTRL' },
        width: '130'
      },
      {
        eventCode: 'MetaLeft',
        lang: { en: '⊞', ru: '⊞' },
        width: '60'
      },
      {
        eventCode: 'AltLeft',
        lang: { en: 'ALT', ru: 'ALT' },
        width: '60'
      },
      {
        eventCode: 'Space',
        lang: { en: ' ', ru: ' ' },
        width: '245'
      },
      {
        eventCode: 'AltRight',
        lang: { en: 'ALT', ru: 'ALT' },

        width: '60'
      },
      {
        eventCode: 'ControlRight',
        lang: { en: 'CTRL', ru: 'CTRL' },

        width: '60'
      },
      {
        eventCode: 'ArrowLeft',
        lang: { en: '←', ru: '←' },

        width: '60'
      },
      {
        eventCode: 'ArrowDown',
        lang: { en: '↓', ru: '↓' },
        width: '60'
      },
      {
        eventCode: 'ArrowRight',
        lang: { en: '→', ru: '→' },
        width: '60'
      }
    ]
  ];

  const body = document.querySelector('body');

  const keys = keyboardRows.map(row =>
    row.map(key => {
      const keyElement = document.createElement('button');
      keyElement.setAttribute('type', 'button');
      keyElement.setAttribute('data-code', key);
      keyElement.classList.add('button');
      keyElement.dataset.code = key.eventCode;
      keyElement.style.width = `${key.width}px`;
      keyElement.textContent = key.lang.en;
      return keyElement;
    })
  );

  buttons.push(keys);

  keys.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard__row');
    rowElement.append(...row);
    keyboard.append(rowElement);
    body.appendChild(keyboard);
  });
};

export const switchLang = () => {
  document.addEventListener('keydown', (event) => {
    const key = event.code;
    if (key === 'AltLeft' && key === 'ShiftLeft') {
      isSwitchLang = false;
    }
  });

  document.addEventListener('keyup', event => {
    const key = event.code;
    if (key === 'AltLeft' && key === 'ShiftLeft') {
      isSwitchLang = true;
    }
  });

  return isSwitchLang;
};

