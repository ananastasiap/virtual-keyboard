export const withMouse = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.classList.add('active');
      const textarea = document.querySelector('.textarea');
      const symbol = button.textContent;

      if (button.dataset.code === 'Tab') {
        textarea.value += '  ';
      } else if (button.dataset.code === 'Backspace') {
        textarea.value = textarea.value.slice(0, -1);
      } else if (button.dataset.code === 'Enter') {
        textarea.value += '\n';
      } else if (button.dataset.code === 'ControlLeft' || button.dataset.code === 'ControlRight') {
        textarea.value += '';
      } else if (button.dataset.code === 'AltLeft' || button.dataset.code === 'AltRight') {
        textarea.value += '';
      } else if (button.dataset.code === 'MetaLeft') {
        textarea.value += '';
      } else {
        textarea.value += symbol;
      }
    });

    button.addEventListener('mouseup', () => {
      button.classList.remove('active');
    });

    button.addEventListener('mouseleave', () => {
      button.classList.remove('active');
    });
  });
};
