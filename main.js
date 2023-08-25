// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

function logItems(array) {
  for (let i = 1; i <= array.length; i++) {
    console.log(`номер елемента ${i}  значення елемента ${array[i]}`);
  }
}
logItems([1, 2, 3, 4]);

//Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
function calculateEngravingPrice(message, pricePerWord) {
  let newArray = message.split(" ");
  return newArray.length * pricePerWord;
}
calculateEngravingPrice("sdff sffsdf sdfsf sfdsfd", 5);

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  let arrayStr = string.split(" ");
  let wordLength = 0;
  let longestWord;
  for (let i = 0; i < arrayStr.length; i++) {
    wordLength = arrayStr[1].length;

    if (arrayStr[i].length > wordLength) {
      longestWord = arrayStr[i];
      return longestWord;
    }
  }
}

//Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
//Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
//Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає   укорочену версію.

function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else if (string.length > 40) {
    let removedArray = string.slice(0, 40);
    return `${removedArray}...`;
  }
}

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  if (message.includes("spam", "sale") === true) {
    return true;
  } else {
    return false;
  }
}
checkForSpam("fisdhuifsd       sdjkcos ");

/// 6

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("enter number");
  numbers.push(+input);
} while (input !== null);

for (let num of numbers) {
  total += num;
}
console.log(`загальна сума чисел ${total}`);

//   Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

let button = document.querySelector(".button");

button.addEventListener("click", () => {
  alert("hello world");
});

// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.

let newInput = document.querySelector(".input");
let newButton = document.querySelector(".check");

let randomNumber = Math.floor(Math.random() * 100);

newButton.addEventListener("click", () => {
  if (newInput.value == randomNumber) {
    alert("win");
  } else {
    alert("lose");
  }
});

// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
let number = document.querySelector(".num");
let num = 0;
document.addEventListener("click", () => {
  num += 1;
  number.textContent = num;
});

// Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

let arr = [1, 2, 3, 4, 5];

function addcallBack(arr, callBack) {
  let newArray = arr.map(callBack);
  return newArray;
}
let callBack = (x) => {
  return x * 2;
};
let c = addcallBack(arr, callBack);
console.log(c);

//

const calculatePrise = (prise, discount, callBack) => {
  let p = (prise / 100) * (100 - discount);
  return p;
};

const showPrise = () => {
  console.log(p);
};
let k = calculatePrise(120, 50, showPrise);
console.log(k);
