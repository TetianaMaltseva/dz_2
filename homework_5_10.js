/*Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. 
var points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.*/

let points = {
    "Вася": 200,
    "Петя": 300,
   "Даша": 250,
   "Андрей": 150,
   "Сергей": 450,
   };
    let sum = 0;
     for (let key in points) {
      sum += points[key];
   }
    let keys = Object.keys(points);
     let max = points[keys[0]];
    let min = points[keys[0]];
    let i;

    for (i = 1; i < keys.length; i++) {
    let value = points[keys[i]];
    if (value < min) min = value;
    if (value > max) max = value;
}
console.log(sum);
console.log(min, max);     
console.log(points);