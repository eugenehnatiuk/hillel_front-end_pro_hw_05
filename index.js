// 1. Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const UHR = 40;
const initialUSD = 10;
const maxUSD = 100;

function currencyExchange(rate, amount) {
  return rate * amount;
}

let currentUSD = initialUSD;

while (currentUSD <= maxUSD) {
  const result = currencyExchange(UHR, currentUSD);
  console.log(result);
  currentUSD += 10;
}

console.log(isNaN(null));

/* 2. Юзер вводить число. З'ясувати, чи є воно простим.
 Простим називається ціле число, більше ніж 1, яке не має інших дільників, крім 1 і себе(1 не є простим).*/

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let input = prompt(`Enter number to check if it's prime.`);

while (!input?.trim() || isNaN(input)) {
  input = prompt('Enter valid number');
  if (input === null) {
    break;
  }
}
if (input === null) {
  alert('Canceled');
} else {
  alert(
    `${isPrime(+input) ? `The number ${+input} is prime` : `The number ${+input} is not prime`} `
  );
}

/* Юзер вводить число. 
Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий цілий ступінь. 
Наприклад, числа 9, 81 можна отримати, бо це 3^2 і 3^4, а 13 - не можна.*/

let inputNum = prompt(`Enter number to check if it's obtained by 3 raised to power of some exponent`);

while (!inputNum?.trim() || isNaN(inputNum)) {
  inputNum = prompt('Enter valid number');
  if (inputNum === null) {
    break;
  }
}
if (inputNum === null) {
  alert('Canceled');
} else {
  let number = parseInt(inputNum);
  let exponent = 0;

  while (Math.pow(3, exponent) < number) {
    exponent++;
  }
  alert(
    Math.pow(3, exponent) === number
      ? `The number ${number} is the result of raising 3 to the power of ${exponent}`
      : `This number cannot be obtained by raising the number 3 to some whole power.`
  );
}
