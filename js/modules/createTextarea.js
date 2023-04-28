export const createTextarea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  document.body.appendChild(textArea);
};
