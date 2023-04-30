export const withMouse = () => {
  const buttons = document.querySelectorAll('.button');
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
