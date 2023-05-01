export const createTextarea = () => {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.setAttribute("data-cursor-position", "0");
  textArea.placeholder = "Привет! Работа выполнена на WINDOWS 11 в VS CODE (1.77.3). К сожалению, не удалось выполнить изменение языка и применение клавиш shift с caps lock (вы можете даже найти отголоски попыток в коде:)) Всё остальное, не без огрехов, конечно, должно работать. В любом случае, спасибо за проверку!";
  document.body.appendChild(textArea);
};
