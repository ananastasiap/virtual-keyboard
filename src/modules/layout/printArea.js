export class PrintArea {
  constructor() {
  }

  createPrintArea() {
    const printArea = document.createElement('textarea');
    printArea.classList.add('printArea');

    const mainArea = document.querySelector('.main');
    mainArea.appendChild(printArea);
    return printArea;
  }
}