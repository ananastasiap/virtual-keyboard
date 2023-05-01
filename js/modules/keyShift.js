import { keyboard } from './createKeys.js';

export const keyShift = () => {
  document.addEventListener('keydown', event => {
   event.preventDefault();
   const key = event.key;

   const buttons = keyboard.querySelectorAll('.button');

   buttons.forEach(button => {
     if (key === 'CapsLock') {
       if (key.lang && key.lang.en) {
         const upperCaseEn = key.lang.en.toUpperCase();
         button.textContent = upperCaseEn;
       } else if (key.lang && key.lang.ru) {
         const upperCaseRu = key.lang.ru.toUpperCase();
         button.textContent = upperCaseRu;
       }
     }
   });
  });
 };