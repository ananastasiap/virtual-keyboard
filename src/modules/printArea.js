export class PrintArea {
  constructor() {
  }

  createTextArea() {
    const printArea = document.createElement('textarea');
    printArea.classList.add('textarea');
    document.body.appendChild(printArea);
    return printArea;
  }
}