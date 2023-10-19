//! chapter 35-38------------

//* 1
const timeDisplay = () => {
  let date = new Date();
  document.getElementById(`div`).innerHTML = date;
};
setInterval(timeDisplay, 1000);

//* 2
const greet = (fname, lname) => {
  alert(`Welcome,${fname} ${lname}`);
};
greet(`basit`, `memon`);

//* 3
const add = (a, b) => a + b;
num1 = +prompt(`Enter first number`);
num2 = +prompt(`Enter second number`);
alert(add(num1, num2));

//* 4
const cal = (num1, num2, op) => {
  switch (op) {
    case `+`:
      return num1 + num2;
    case `-`:
      return num1 - num2;
    case `*`:
      return num1 * num2;
    case `/`:
      return num1 / num2;
    default:
      alert(`Invalid operation`);
  }
};
num1 = +prompt(`Enter first number`);
num2 = +prompt(`Enter second number`);
op = prompt(`Enter operation`);
document.write(cal(num1, num2, op));

// *5
const sqr = (a) => a * a;
const x = +prompt(`Enter the number you want to square`);
document.write(sqr(x));

//* 6
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
num = +prompt(`Enter the number you want to find factorial of`);
document.write(factorial(num));

// *7
const counting = (a, b) => {
  for (let i = a; i <= b; i++) {
    document.write(`${i}\n`);
  }
};
counting(1, 10);

// *8
const calculateSquare = (n) => {
  return n ** (1 / 2);
};
const calculateHypotenuse = (base, perpendicular) => {
  debugger;
  let hyp = base ** 2 + perpendicular ** 2;
  return calculateSquare(hyp);
};

alert(calculateHypotenuse(2, 6).toFixed(3));

//* 9
const Area = (width, height) => {
  return width * height;
};

alert(Area(2, 3));
let num1 = 2,
  num2 = 3;
alert(Area(num1, num2));

// *10
const palindromCheck = (str) => {
  let palindorm = false;
  let rev = str.split("").reverse().join("");
  let length = str.length;
  for (let i = 0; i < length; i++) {
    if (rev[i] === str[i]) {
      palindorm = true;
    }
  }
  if (palindorm) {
    alert(`${str} is a palindrom`);
  } else {
    alert(`${str} is not a palindrom`);
  }
};
palindromCheck(`madam`);

//* 11
const Func = (str) => {
  let split = str.split(` `);
  let updatedString = ``;

  for (let i = 0; i < split.length; i++) {
    updatedString +=
      split[i].slice(0, 1).toUpperCase() + split[i].slice(1) + ` `;
  }

  return updatedString;
};
alert(Func(`i am a student`));

//* 12
const longestWord = (str) => {
  let split = str.split(` `);
  let max = 0;
  let word;

  for (let i = 0; i < split.length; i++) {
    if (split[i].length > max) {
      max = split[i].length;
      word = split[i];
    }
  }
  return word;
};
alert(`${longestWord(prompt(`Enter any string`))} is the longest word.`);

//* 13
const occurrenceCounter = (str, letter) => {
  let exp = new RegExp(letter, `gi`);
  return str.match(exp).length;
};
alert(occurrenceCounter(`basssSit`, `s`));

//* 14
let PI = Math.PI;
const calCircumference = (radius) => {
  return (2 * PI * radius).toFixed(3);
};
const calcArea = (radius) => {
  return (PI * radius ** 2).toFixed(3);
};
let radius = +prompt(`Enter the radius of the circle.`);
let circumference = calCircumference(radius);
let area = calcArea(radius);
document.write(
  `The circumference of circle with radius ${radius} is ${circumference}<br> The area of circle with radius ${radius} is ${area}`
);
