// TASK 1

// Напишіть функцію генератора валідаторів для полів форми
  
// (/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
// (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
// (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

// ("^[А-Яа-яЁёЇїІіЄєҐґ']+$");

// const generateValidator = (expression) => {
//   return (value) => {
//     return expression.test(value);
//   };
// };

// const nameValidator = generateValidator(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u);
// const phoneValidator = generateValidator(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
// const emaildValidator = generateValidator(
//   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
// );

// console.log(nameValidator('Poly'));
// console.log(nameValidator('5467'));

// console.log(phoneValidator('Mango'));
// console.log(phoneValidator('+380502388238'));

// console.log(emaildValidator('krosh@org.ua'));
// console.log(emaildValidator('aJax'));

// function urlGenerator(domen) {
//   return function (url) {
//     return `https:${url}.${domen}`;
//   };
// };

// const comUrl = urlGenerator("com");
// const ukrUrl = urlGenerator("net");

// console.log(comUrl("google"));
// console.log(ukrUrl("ukr"));


// TASK 2

// Послідовність чисел Фібоначчі має формулу Fn = Fn-1 + Fn-2. Іншими словами, наступне число є сумою двох попередніх.
// Перші два числа: 1, потім 2(1+1), потім 3(1+2), 5(2+3) і так далі: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фібоначчі пов’язані із золотим перетином і багатьма природними явищами навколо нас.
// Напишіть функцію fib(n), яка повертає n-th число Фібоначчі.

// const fib1 = (n) => {
//   let a = 0;
//   let b = 1;
//   let array = [0];

//   do {
//     let fib = a + b;
//     b = a;
//     a = fib;

//     array.push(fib)
//   } while (array.length <= n);

//   console.log(array);

//   const result = array[array.length - 1];
//   return result;
// }

// console.log(fib1(8));

// const fib2 = (n) => {
//   if (n <= 1) {
//     return [0, 1]
//   } else {
//     let fibEl = fib2(n - 1);
//     fibEl.push(fibEl[fibEl.length - 1] + fibEl[fibEl.length - 2]);
//     return fibEl;
//   }
// }

// console.log(fib2(8));
