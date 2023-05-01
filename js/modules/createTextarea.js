export const createTextarea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.setAttribute("data-cursor-position", "0");
  document.body.appendChild(textArea);
};
