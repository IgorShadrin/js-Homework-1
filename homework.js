
// Дан массив с налогами в виде дробного числа
// Используя forEach посчитайте зараплату после налогов
// const taxes = {
//   vat: 0.20,
//   unemployement: 0.016,
//   insurance: 0.008,
//   pension: 0.002
// };

// const grossSalary = 2000;
// let netSalary = grossSalary;


// Object.values(taxes).forEach((value, index) => {
//   console.log(value);
//   netSalary = netSalary - grossSalary * value;
//   console.log(index + " index: " + netSalary);
// });

// console.log("Gross salary: " + grossSalary);
// console.log("Net salary: " + netSalary);




// Для каждого человека в заданом массиве выведете строку
// Hello 'name' 'surname'! You are 'age' years old.
// const people = [['Jack', 'Smith', 25], ['Mary', 'Gold', 30], ['Sarah', 'Brown', 18], ['Bob', 'Summers', 20]]

// people.forEach((name) => {
//   console.log(`Hello ${name[0]} ${name[1]}! You are ${name[2]} years old.`);
// });




// Задан список чисел и два пустых массива
// Зполните массив primeSquares квадратами чисел
// Так чтобы числа в массиве были в порядке возрастания
// А массив primeCubes кубами чисел
// Так чтобы числа в массиве были в порядке убывания
const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];
let primeSquares = [];
let primeCubes = [];

primes.forEach(value => {
  // console.log(value);
  primeSquares.push(value ** 2);
  primeCubes.unshift(value ** 3);
});
console.log(primeSquares);
console.log(primeCubes);

// const testNumbers = [4, 34, 12, 65, 12, 77];
// testNumbers.forEach((value, index) => {
//     console.log('Key:' + value + ' Index:' + index);
// });