import { keyboard } from './createKeys.js';

export const withKeyboard = () => {
  document.addEventListener('keydown', event => {
    const key = event.code;
    const button = keyboard.querySelector(`[data-code="${key}"]`);
    const textarea = document.querySelector('.textarea');
    textarea.value += event.key;

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
