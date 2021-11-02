/* Написать программу, которая должна за минимальное количество
попыток отгадать задуманное пользователем число от 0 до 100.*/
const MAX_NUMBER_ATTEMPTS = 15;

let max = 100;
let min = 0;

let result;
let attempts = 0;

do {
    let n = min + ( max - min) / 2;
    console.log(max, min, n);
    let question = confirm(`Ваше число больше ${n} ?`);
    attempts = attempts + 1;
    if (question) {
        min = n;
    } else {
        max = n;
    }
    result = max - min < 1;
} while (!result && attempts < MAX_NUMBER_ATTEMPTS );

let result_2 = Math.round(min + ( max - min) / 2);
alert (`Вы загадали число ${result_2}`);