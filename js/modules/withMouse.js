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
      } else if (button.dataset.code === 'ShiftLeft' || button.dataset.code === 'ShiftRight') {
        textarea.value += '';
      } else if (button.dataset.code === 'AltLeft' || button.dataset.code === 'AltRight') {
        textarea.value += '';
      } else if (button.dataset.code === 'MetaLeft' || button.dataset.code === 'CapsLock') {
        textarea.value += '';
      } else if (button.dataset.code === 'ArrowRight') {
      const cursorPosition = textarea.selectionStart;
      textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    } else if (button.dataset.code === 'ArrowLeft') {
      const cursorPosition = textarea.selectionStart;
      textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    } else if (button.dataset.code === 'ArrowDown') {
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    } else if (button.dataset.codey === 'ArrowUp') {
      textarea.setSelectionRange(0, 0);
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
