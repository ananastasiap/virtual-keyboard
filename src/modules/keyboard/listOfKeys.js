export const keyboardList = [
  [
    {
      key: { ru: 'ё', en: '`' },
      eventCode: 'Backquote',
    },
    {
      key: '1',
      changeWithShift: '!',
      eventCode: 'Digit1',
    },
    {
      key: '2',
      changeWithShift: { ru: '"', en: '@' },
      eventCode: 'Digit2',
    },
    {
      key: '3',
      changeWithShift: { ru: '№', en: '#' },
      eventCode: 'Digit3',
    },
    {
      key: '4',
      changeWithShift: { ru: ';', en: '$' },
      eventCode: 'Digit4',
    },
    {
      key: '5',
      changeWithShift: '%',
      eventCode: 'Digit5',
    },
    {
      key: '6',
      changeWithShift: { ru: ':', en: '^' },
      eventCode: 'Digit6',
    },
    {
      key: '7',
      changeWithShift: { ru: '?', en: '&' },
      eventCode: 'Digit7',
    },
    {
      key: '8',
      changeWithShift: '*',
      eventCode: 'Digit8',
    },
    {
      key: '9',
      changeWithShift: '(',
      eventCode: 'Digit9',
    },
    {
      key: '0',
      changeWithShift: ')',
      eventCode: 'Digit0',
    },
    {
      key: '-',
      changeWithShift: '_',
      eventCode: 'Minus',
    },
    {
      key: '=',
      changeWithShift: '+',
      eventCode: 'Equal',
    },
    {
      key: 'Backspace',
      eventCode: 'Backspace',
      keySize: 'small-big',
      isControlKey: true,
    },
  ],
  [
    {
      key: 'Tab',
      eventCode: 'Tab',
      isControlKey: true,
    },
    {
      key: { ru: 'й', en: 'q' },
      eventCode: 'KeyQ',
    },
    {
      key: { ru: 'ц', en: 'w' },
      eventCode: 'KeyW',
    },
    {
      key: { ru: 'у', en: 'e' },
      eventCode: 'KeyE',
    },
    {
      key: { ru: 'к', en: 'r' },
      eventCode: 'KeyR',
    },
    {
      key: { ru: 'е', en: 't' },
      eventCode: 'KeyT',
    },
    {
      key: { ru: 'н', en: 'y' },
      eventCode: 'KeyY',
    },
    {
      key: { ru: 'г', en: 'u' },
      eventCode: 'KeyU',
    },
    {
      key: { ru: 'ш', en: 'i' },
      eventCode: 'KeyI',
    },
    {
      key: { ru: 'щ', en: 'o' },
      eventCode: 'KeyO',
    },
    {
      key: { ru: 'з', en: 'p' },
      eventCode: 'KeyP',
    },
    {
      key: { ru: 'х', en: '[' },
      eventCode: 'BracketLeft',
    },
    {
      key: { ru: 'ъ', en: ']'},
      eventCode: 'BracketRight',
    },
    {
      key: '\\',
      changeWithShift: '/',
      eventCode: 'Backslash',
    },
    {
      key: 'Del',
      eventCode: 'Delete',
      isControlKey: true,
    },
  ],
  [
    {
      key: 'CapsLock',
      eventCode: 'CapsLock',
      keySize: 'small-big',
      isControlKey: true,
    },
    {
      key: { ru: 'ф', en: 'a' },
      eventCode: 'KeyA',
    },
    {
      key: { ru: 'ы', en: 's' },
      eventCode: 'KeyS',
    },
    {
      key: { ru: 'в', en: 'd' },
      eventCode: 'KeyD',
    },
    {
      key: { ru: 'а', en: 'f' },
      eventCode: 'KeyF',
    },
    {
      key: { ru: 'п', en: 'g' },
      eventCode: 'KeyG',
    },
    {
      key: { ru: 'р', en: 'h' },
      eventCode: 'KeyH',
    },
    {
      key: { ru: 'о', en: 'j' },
      eventCode: 'KeyJ',
    },
    {
      key: { ru: 'л', en: 'k' },
      eventCode: 'KeyK',
    },
    {
      key: { ru: 'д', en: 'l' },
      eventCode: 'KeyL',
    },
    {
      key: { ru: 'ж', en: ';' },
      eventCode: 'Semicolon',
    },
    {
      key: { ru: 'э', en: '\'' },
      eventCode: 'Quote',
    },
    {
      key: 'Enter',
      eventCode: 'Enter',
      keySize: 'small-big',
      isControlKey: true,
    },
  ],
  [
    {
      key: 'Shift',
      eventCode: 'ShiftLeft',
      keySize: 'big',
      isControlKey: true,
    },
    {
      key: { ru: 'я', en: 'z' },
      eventCode: 'KeyZ',
    },
    {
      key: { ru: 'ч', en: 'x' },
      eventCode: 'KeyX',
    },
    {
      key: { ru: 'с', en: 'c' },
      eventCode: 'KeyC',
    },
    {
      key: { ru: 'м', en: 'v' },
      eventCode: 'KeyV',
    },
    {
      key: { ru: 'и', en: 'b' },
      eventCode: 'KeyB',
    },
    {
      key: { ru: 'т', en: 'n' },
      eventCode: 'KeyN',
    },
    {
      key: { ru: 'ь', en: 'm' },
      eventCode: 'KeyM',
    },
    {
      key: { ru: 'б', en: ',' },
      eventCode: 'Comma',
    },
    {
      key: { ru: 'ю', en: '.' },
      eventCode: 'Period',
    },
    {
      key: { ru: '.', en: '/' },
      eventCode: 'Slash',
    },
    {
      key: 'Shift',
      eventCode: 'ShiftRight',
      keySize: 'big',
      isControlKey: true,
    },
  ],
  [
    {
      key: 'Ctrl',
      eventCode: 'ControlLeft',
      keySize: 'small',
      isControlKey: true,
    },
    {
      key: 'Win',
      eventCode: 'MetaLeft',
      keySize: 'small',
      isControlKey: true,
    },
    {
      key: 'Alt',
      eventCode: 'AltLeft',
      keySize: 'small',
      isControlKey: true,
    },
    { key: '',
      eventCode: 'Space',
      keySize: 'large',
    },
    {
      key: 'Alt',
      eventCode: 'AltRight',
      keySize: 'small',
      isControlKey: true,
    },
    {
      key: 'Win',
      eventCode: 'MetaRight',
      keySize: 'small',
      isControlKey: true,
    },
    {
      key: 'Ctrl',
      eventCode: 'ControlRight',
      keySize: 'small',
      isControlKey: true,
    },
  ],
];