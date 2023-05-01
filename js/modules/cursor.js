export const saveCursor = () => {
  const textarea = document.querySelector('.textarea');

  function saveCursorPosition() {
    var cursorPosition = textarea.selectionStart;
    textarea.setAttribute("data-cursor-position", cursorPosition);
  }
  // Восстанавливаем позицию курсора
  function restoreCursorPosition() {
    var cursorPosition = parseInt(textarea.getAttribute("data-cursor-position"));
    textarea.setSelectionRange(cursorPosition, cursorPosition);
  }

  // Обновляем позицию курсора при вводе текста
  textarea.addEventListener("input", function() {
    saveCursorPosition();
    restoreCursorPosition();
  });

};