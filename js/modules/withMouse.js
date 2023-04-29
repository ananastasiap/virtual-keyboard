import { buttons } from './createKeys.js';

export const withMouse = () => {
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.classList.add('active');
      const textarea = document.querySelector('.textarea');
      const symbol = button.textContent;
      textarea.value += symbol;
    });

    button.addEventListener('mouseup', () => {
      button.classList.remove('active');
    });

    button.addEventListener('mouseleave', () => {
      button.classList.remove('active');
    });
  });
};
