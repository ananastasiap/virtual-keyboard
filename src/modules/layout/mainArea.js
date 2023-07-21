export class MainArea {
  constructor() {
  }

  createMainArea() {
    const mainArea = document.createElement('main');
    mainArea.classList.add('main');
    document.body.appendChild(mainArea);
    return mainArea;
  }
}