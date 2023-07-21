export class PrintArea {
  constructor() {
  }

  createPrintArea() {
    const printArea = document.createElement('textarea');
    printArea.classList.add('textarea');
    document.body.appendChild(printArea);
    return printArea;
  }
}