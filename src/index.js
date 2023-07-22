import './index.html';
import './index.scss';
import "@babel/polyfill";

import { PrintArea, MainArea } from './modules/import.js';

window.addEventListener('DOMContentLoaded', () => {
  const mainArea = new MainArea();
  const printArea = new PrintArea();

  mainArea.createMainArea();
  printArea.createPrintArea();
});