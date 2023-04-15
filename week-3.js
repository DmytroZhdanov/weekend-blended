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