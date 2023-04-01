// Напишіть функцію яка перевіряє 2 рядки чи являються вони анаграмою

// Напишіть функцію для нормалізації дати
// const inputData = [
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//     { id: 4, name: "Item 4" },
//     { id: 7, name: "Item 7" },
// ];

// function normilizedData(array) {
//   const resultObj = {};
//   const entitiesObj = {};
//   const arrId = [];

//   array.forEach(item => {
//     let itemId = item.id;
//     arrId.push(itemId);

//     entitiesObj[itemId] = item;
//   })

//   resultObj.entities = entitiesObj;
//   resultObj['byId'] = arrId;

//   return resultObj;
// }

// console.log(normilizedData(inputData));
// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });


// const a = {};
// const b = {};
// const c = {
//   d: 21,
//   e: 34,
// };

// c[a] = 'Hello world!'
// c[b] = 21;

// console.log(c);


// const nums = [-90, 45, 0, 16, -18, 24, -67, 43]

// порахуйте всі позитивні та негативні значення і повертає обʼєкт даних

// const calculatePosNegNumbers = array => array.reduce((acc, num) => {
//   if (num > 0) {
//     return { ...acc, pos: acc.pos + num };
//   } else {
//     return { pos: acc.pos, neg: acc.neg + num };
//   }
// }, { pos: 0, neg: 0 })

// console.log(calculatePosNegNumbers(nums));