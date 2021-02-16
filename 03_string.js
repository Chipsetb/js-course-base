// Строки
// const name = 'Сергей'
// const age = 24

// function getAge(){
//   return age
// }

//const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' года'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} года.`
// console.log(output);
// const output = `
// <div>This is div</div>
// <p>this is p</p>
// `
// console.log(output);

// const names = 'Сергей'
// console.log(names.length);
// console.log(names.toUpperCase());
// console.log(names.toLowerCase());
// console.log(names.charAt(4));
// console.log(names.indexOf('ерг'));
// console.log(names.toLowerCase().startsWith('сер'));
// console.log(names.endsWith('ей'));
// console.log(names.repeat(3));
// const string = '      password      '
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
  if (age < 0){ 
    age = 'Ещё не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Сергей'
const personName2 = 'Максим'
const personAge = 24
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output);
console.log(output2);