// 1. Переменные

//  camelCase

// const firstName = 'Sergey'
// // const age = 24 //number
// const isProgrammer = true //boolean

// const private = 'private'
// const $ = 'some value'

// const if = 'sda' // err

// const withNum5 = '5'
// const 5withNum = 5 // err

// 2 Мутирование

// console.log('Имя человека: ' + firstName + ', а возраст человека:' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека:' + age)

// const lastName = prompt('Ведите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1996

// // const age = currentYear + birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Sergey'
// const age = 24
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5 Приоритет операторов
// const fullAge = 24
// const birthYear = 1996
// const currentYear = 2021

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)

// 6 Условные операторы 
// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('курс пока находится в разработке')
// } else {
//   console.log('курс не получился')
// }

// const isReady = true

// if (isReady) {
//   console.log('всё готово!');
// } else {
//   console.log('всё не готово(');
// }

// Тернарное выраженеи 
// isReady ? console.log('всё готово') : console.log('Всё не готово(');

// const num1 = 42 // number
// const num2 = '42'  // string (строка)

// console.log(num1 === num2)

// 7 Белева логика

// 8 Функции

// function calculateAge(year) {
//   return 2021 - year
// }
// // console.log(calculateAge (1996));
// // console.log(calculateAge (1991));
// // console.log(calculateAge (1912));

// function logInfoAbouth(name, year){
//   const age = calculateAge (year)

//   if (age > 0 ){ 
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);

//   } else {
//     console.log('Вообще-то это уже будущее');
//   } 
// }

// logInfoAbouth ( 'Sergey' , 1996 )
// logInfoAbouth ( 'Elena' , 1995 )
// logInfoAbouth ( 'Max' , 2022 )

// 9 Массивы

// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars);
// const cars = new Array('Мазда', 'Мерседес', 'Форд') // так себе вариант
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars.length); 
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

// cars [0] = 'Porshe'
// cars [cars.length] = 'Мазда'
// console.log(cars);

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porshe']
// for (let i = 0; i < cars.length; i++){
// const car = cars[i]
// console.log(car);
// 
// for (let car of cars) {
//   console.log(car);
// }

// 11 Объекты

const person = {
  firstName: 'Sergey',
  lastName: 'Sirotyuk',
  year: 1996,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function(){
    console.log('greet from person');
  }
}
console.log(person.firstName);
console.log(person['lastName']);
const key = 'year'
console.log(person[key]);
person.hasWife = true
person.isProgrammer = falce
console.log(person);

person.greet()
