// task 1

let nay = [1, 2, 3];
nay[1] = 10;
console.log(nay);

// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

// task 2

let nay2 = ["Georgiy", "Ivan", "Olga"];
nay2[3] = "Tatiana";
console.log(nay);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

// task 3

const nay3 = [1, 2, 3];
let suma = 0

for (let i = 0; i < nay3.length; i += 1) {
suma += nay3[i]
}
console.log(suma)

// Створити скрипт який поверне суму всіх чисел в масиві.

// task 4

const nay6 = ["1", "2", "3"];

for (let i = 0; i < nay6.length; i += 1) {
  console.log(nay6[i]);
}

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

// task 5


const nay5 = ["Georgiy", "Ivanovich", "Tatiana"];

for (let i = 0; i < nay5.length; i += 1) {
  if (i % 5 === 0) {
  console.log(nay5[i]);
  }
}


// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.

// task 6


const nay7 = [1, 9, 2, 8, 3, 7, 4, 6, 5, 10];
const nay8 = 10;

for (let i = 0; i < nay7.length; i += 1) {
  if (nay7[i] < nay8) {
    continue;
  }

  console.log(`Число більше за ${nay8}: ${nay7[i]}`);
}


// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

// task 7

const nay9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= nay9.length; i += 1) {
  if (i %2 ===0) {
  console.log(i);
  }
}

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.