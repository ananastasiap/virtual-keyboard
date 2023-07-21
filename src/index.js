import './index.html';
import './index.scss';
import "@babel/polyfill";

import { PrintArea } from './modules/import.js';

window.addEventListener('DOMContentLoaded', () => {
  new PrintArea.createTextArea();
});