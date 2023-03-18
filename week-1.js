// Напиши программу, котра отримує від користувача

//  *?      число (кількість хвилин) і виведе у консоль

//  *?      Рядок у форматі годин і хвилин

//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

//  *?      70 === 01:10

function normilizeTimeFormat() {
  const userData = +prompt("Enter required minutes");
  
  if (isNaN(userData)) {
    alert("Your data is not valid");
  }
  
  const hours = String(Math.floor(userData / 60)).padStart(2, 0);
  const minutes = String(userData % 60).padStart(2, 0);

  console.log(`Your time is ${hours}:${minutes}`)
  alert(`Your time is ${hours}:${minutes}`);
}

normilizeTimeFormat();
