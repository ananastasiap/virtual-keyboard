import { createKeys, createTextarea, withKeyboard, withMouse } from './modules/index.js';

window.addEventListener('DOMContentLoaded', () => {
  createTextarea();
  createKeys();
  withKeyboard();
  withMouse();
});
