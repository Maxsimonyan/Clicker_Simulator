let multiplier = 1;
let number = 0;

const counter = document.getElementById('counter');
counter.innerHTML = number;

function updateDisplay() {
  if (number >= 999999999999999) {
    counter.innerHTML = Infinity;
  } else {
    // Math.floor keeps the display clean when using the 1.5x multiplier
    counter.innerHTML = Math.floor(number);
  }
}

function Add() {
  if (number === 0) {
    number = 1;
  } else {
    number = (number * multiplier) + 1;
  }
  updateDisplay();
}

function Restart() {
  number = 0;
  multiplier = 1;
  updateDisplay();
}

function X1_5() {
  if (number >= 150) {
    alert('Purchase successful!');
    number -= 150;
    multiplier = 1.5;
    updateDisplay();
  } else {
    alert('Not enough points!');
  }
}

function X2() {
  if (number >= 200) {
    alert('Purchase successful!');
    number -= 200;
    multiplier = 2;
    updateDisplay();
  } else {
    alert('Not enough points!');
  }
}
