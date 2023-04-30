export const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

export const createKeys = () => {
  // an object has 5 sub-object, each sub-object have buttons in a form of array
  const keyboardRows = [
    [
      {
        eventCode: 'Backquote',
        lang: { en: '`', ru: 'ё' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit1',
        lang: { en: '1', ru: '1' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit2',
        lang: { en: '2', ru: '2' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit3',
        lang: { en: '3', ru: '3' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit4',
        lang: { en: '4', ru: '4' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit5',
        lang: { en: '5', ru: '5' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit6',
        lang: { en: '6', ru: '6' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit7',
        lang: { en: '7', ru: '7' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit8',
        lang: { en: '8', ru: '8' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit9',
        lang: { en: '9', ru: '9' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Digit0',
        lang: { en: '0', ru: '0' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Minus',
        lang: { en: '-', ru: '-' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Equal',
        lang: { en: '=', ru: '=' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Backspace',
        lang: { en: '⥪ Backspace', ru: '⥪ Backspace' },
        canControl: true,
        width: '150'
      }
    ],

    [
      {
        eventCode: 'Tab',
        lang: { en: 'Tab', ru: 'Tab' },
        canControl: true,
        width: '100'
      },
      {
        eventCode: 'KeyQ',
        lang: { en: 'q', ru: 'й' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyW',
        lang: { en: 'w', ru: 'ц' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyE',
        lang: { en: 'e', ru: 'у' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyR',
        lang: { en: 'r', ru: 'к' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyT',
        lang: { en: 't', ru: 'е' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyY',
        lang: { en: 'y', ru: 'н' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyU',
        lang: { en: 'u', ru: 'г' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyI',
        lang: { en: 'i', ru: 'ш' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyO',
        lang: { en: 'o', ru: 'щ' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyP',
        lang: { en: 'p', ru: 'з' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'BracketLeft',
        lang: { en: '[', ru: 'х' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'BracketRight',
        lang: { en: ']', ru: 'ъ' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Backslash',
        lang: { en: '\\', ru: '\\' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Delete',
        lang: { en: 'Del', ru: 'Del' },
        canControl: true,
        width: '60'
      }
    ],

    [
      {
        eventCode: 'CapsLock',
        lang: { en: 'Caps Lock', ru: 'Caps Lock' },
        canControl: true,
        width: '130'
      },
      {
        eventCode: 'KeyA',
        lang: { en: 'a', ru: 'ф' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyS',
        lang: { en: 's', ru: 'ы' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyD',
        lang: { en: 'd', ru: 'в' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyF',
        lang: { en: 'f', ru: 'а' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyG',
        lang: { en: 'g', ru: 'п' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyH',
        lang: { en: 'h', ru: 'р' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyJ',
        lang: { en: 'j', ru: 'о' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyK',
        lang: { en: 'k', ru: 'л' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyL',
        lang: { en: 'l', ru: 'д' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Semicolon',
        lang: { en: ';', ru: 'ж' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Quote',
        lang: { en: "'", ru: 'э' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Enter',
        lang: { en: '⥪ Enter', ru: '⥪ Enter' },
        canControl: true,
        width: '130'
      }
    ],

    [
      {
        eventCode: 'ShiftLeft',
        lang: { en: '⥣ Shift', ru: '⥣ Shift' },
        canControl: true,
        width: '130'
      },
      {
        eventCode: 'KeyZ',
        lang: { en: 'z', ru: 'я' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyX',
        lang: { en: 'x', ru: 'ч' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyC',
        lang: { en: 'c', ru: 'с' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyV',
        lang: { en: 'v', ru: 'м' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyB',
        lang: { en: 'b', ru: 'и' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyN',
        lang: { en: 'n', ru: 'т' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'KeyM',
        lang: { en: 'm', ru: 'ь' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Comma',
        lang: { en: ',', ru: 'б' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Period',
        lang: { en: '.', ru: 'ю' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'Slash',
        lang: { en: '/', ru: '.' },
        canControl: false,
        width: '60'
      },
      {
        eventCode: 'ArrowUp',
        lang: { en: '↑', ru: '↑' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'ShiftRight',
        lang: { en: '⥣ Shift', ru: '⥣ Shift' },
        canControl: true,
        width: '130'
      }
    ],

    [
      {
        eventCode: 'ControlLeft',
        lang: { en: 'CTRL', ru: 'CTRL' },
        canControl: true,
        width: '130'
      },
      {
        eventCode: 'MetaLeft',
        lang: { en: '⊞', ru: '⊞' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'AltLeft',
        lang: { en: 'ALT', ru: 'ALT' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'Space',
        lang: { en: ' ', ru: ' ' },
        canControl: false,
        width: '245'
      },
      {
        eventCode: 'AltRight',
        lang: { en: 'ALT', ru: 'ALT' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'ControlRight',
        lang: { en: 'CTRL', ru: 'CTRL' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'ArrowLeft',
        lang: { en: '←', ru: '←' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'ArrowDown',
        lang: { en: '↓', ru: '↓' },
        canControl: true,
        width: '60'
      },
      {
        eventCode: 'ArrowRight',
        lang: { en: '→', ru: '→' },
        canControl: true,
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

  keys.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard__row');
    rowElement.append(...row);
    keyboard.append(rowElement);
    body.appendChild(keyboard);
  });
};
