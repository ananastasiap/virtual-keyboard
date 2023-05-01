import { createKeys, createTextarea, withKeyboard, withMouse, saveCursor } from './modules/index.js';

window.addEventListener('DOMContentLoaded', () => {
  createTextarea();
  createKeys();
  withKeyboard();
  withMouse();
  saveCursor();
});
