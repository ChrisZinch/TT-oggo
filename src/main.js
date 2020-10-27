'use strict';

const squere = document.querySelector('.squere');

const rotate = () => {
  squere.classList.toggle('rotate');
};

squere.addEventListener('click', rotate);
