// TASK 01
const userAge = prompt("Enter your age!");
alert("Your age is: " + userAge);
if (userAge <= 2) {
  alert("You are a baby");
} else if (userAge >= 12 && userAge < 18) {
  alert("You are teeneger");
} else if (userAge >= 18 && userAge < 60) {
  alert("You are adalt");
} else {
  alert("You are retiared");
}

// TASK 02
const number = parseFloat(prompt("Введіть число від 0 до 9"));

switch (number) {
  case 1:
    alert("!");
    break;
  case 2:
    alert("@");
    break;
  case 3:
    alert("#");
    break;
  case 4:
    alert("$");
    break;
  case 5:
    alert("%");
    break;
  case 6:
    alert("^");
    break;
  case 7:
    alert("&");
    break;
  case 8:
    alert("*");
    break;
  case 9:
    alert("(");
    break;
}

// TASK 04
const enterYear = parseFloat(prompt("Введіть рік"));

if (enterYear % 400 === 0 || enterYear % 4 === 0) {
  alert("Це високосний рік");
} else {
  alert("Це не високосний рік");
}

//  TASK 05

const enterNumber = prompt("Введіть число від 10000 до 99999");

if (enterNumber.split("").reverse().join("") === enterNumber) {
  alert("Це паліндром");
} else {
  alert("Це не паліндром");
}

// TASK 06

let hawMuch = prompt("Введіть суму USD");
let currencyType = prompt("EUR=1, UAN=2, AZN=3");

switch (currencyType) {
  case "1":
    alert(hawMuch * 0.85 + "EUR");
    break;
  case "2":
    alert(hawMuch * 28.28 + "UAN");
    break;
  case "3":
    alert(hawMuch * 1.7 + "AZN");
    break;
}

// TASK 07

const amount = parseFloat(prompt("Введіть суму покупки"));

if (amount >= 200 && amount < 300) {
  alert(amount - amount * 0.03 + "$ з знижкою 3%");
} else if (amount >= 300 && amount < 500) {
  alert(amount - amount * 0.05 + "$ з знижкою 5%");
} else if (amount >= 500) {
  alert(amount - amount * 0.07 + "$ з знижкою 7%");
}

// TASK 08

let lenghtOfCircle = parseFloat(prompt("Введіть довжину окружності"));
let perimeterOfSquare = parseFloat(prompt("Введіть периметр квадрата"));

if (2 * Math.PI * lenghtOfCircle < perimeterOfSquare) {
  alert("Така окружність поміщається");
} else {
  alert("Така окружність не поміститься");
}

// TASK 09
let question1 = parseFloat(
  prompt(
    "Назвіть речовину, яка горить голубим полум'ям\n 1=етан 2=етилен 3=етанол"
  )
);
let question2 = parseFloat(
  prompt(
    "Назвіть речовину, яка пришвидшує достигання плодів\n 1=етан 2=етилен 3=етанол"
  )
);
let question3 = parseFloat(
  prompt(
    "Назвіть речовину, яка використовується у харчовій промисловості\n 1=етан 2=етилен 3=етанол"
  )
);
let result = 0;

if (question1 === 1) {
  result += 2;
}
if (question2 === 2) {
  result += 2;
}
if (question3 === 3) {
  result += 2;
}
alert("Ваш результат " + result + " бали");

// FUNCTION

// TASK 01

function getNumber(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
}

// TASK 02

const factorial = (n) => {
  return n * (n - 1);
};

// TASK 03
const addNumbers = (a, b, c) => {
  return "" + a + b + c;
};

//  TASK 04
function area(a, b) {
  if (b !== undefined) {
    return a * b;
  } else {
    return a * a;
  }
}

// TASK 07

function time(hour, min, sec) {
  if (min == undefined) {
    return `${hour} : 00 : ${sec}`;
  } else if (sec == undefined) {
    return `${hour} : ${min} : 00`;
  } else if (min == undefined && sec == undefined) {
    return `${hour} : 00 : 00`;
  } else {
    return `${hour} : ${min} : ${sec}`;
  }
}

// TASK 08

const timeOfSeconds = (hr, mn, sc) => {
  return hr * 3600 + mn * 60 + sc;
};

// TASK 09
function secondToTime(sec) {
  let hour = Math.floor(sec / 3600);
  let min = Math.floor(sec / 60) - Math.floor(sec / 3600) * 60;
  let second = sec % 60;
  return `${hour} : ${min} : ${second}`;
}
