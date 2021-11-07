/*Написать функцию, которая находит разницу в днях между двумя заданными датами. 
Например, заданные даты «20/01/2010» и «15/01/2010», функция должна вернуть число 5.
 Разницу в днях необходимо считать по модулю.*/
 
const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_work_days (date1, date2){

    if (date1 instanceof Date && date2 instanceof Date) {

        let ms_days = Math.abs(date1.getTime()- date2.getTime()); /*Возвращает целое число, равное количеству
        миллисекунд, прошедшее между датой,
        хранящейся в объекте date,*/
        let result = Math.trunc(ms_days/MS_DAY);

        return result
    }
    return null;
}
let date1 = new Date('2021-11-15');
let date2 = new Date('2021-11-1');
console.log ( get_count_work_days (date1, date2));