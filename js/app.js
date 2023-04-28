import { createTextarea, createKeys, withKeyboard } from './modules/index.js';

window.addEventListener('DOMContentLoaded', () => {
  createTextarea();
  createKeys();
  withKeyboard();
});
