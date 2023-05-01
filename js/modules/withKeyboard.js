import { keyboard } from './createKeys.js';

export const withKeyboard = () => {
  document.addEventListener('keydown', event => {
    event.preventDefault();
    const key = event.code;
    const button = keyboard.querySelector(`[data-code="${key}"]`);
    const textarea = document.querySelector('.textarea');

    if (event.key === 'Tab') {
      textarea.value += '  ';
    } else if (event.key === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (event.key === 'Enter') {
      textarea.value += '\n';
    } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
      textarea.value += '';
    } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
      textarea.value += '';
    } else if (event.code === 'MetaLeft') {
      textarea.value += '';
    } else if (event.key === 'ArrowRight') {
      const cursorPosition = textarea.selectionStart;
      textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    } else if (event.key === 'ArrowLeft') {
      const cursorPosition = textarea.selectionStart;
      textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    } else if (event.key === 'ArrowDown') {
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    } else if (event.key === 'ArrowUp') {
      textarea.setSelectionRange(0, 0);
    } else {
      textarea.value += event.key;
    }

    if (button) {
      button.classList.add('active');
    }
  });

  document.addEventListener('keyup', event => {
    const key = event.code;

    const button = keyboard.querySelector(`[data-code="${key}"]`);

    if (button) {
      button.classList.remove('active');
    }
  });
};
