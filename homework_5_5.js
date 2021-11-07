/*Напишите функцию get_string_length(str), 
которая в качестве аргумента принимает строку str и возвращает её длину, 
предварительно удалив из строки все пробелы 
(для решения данной задачи обязательно использовать цикл).*/

function get_string_length(str){
    if (typeof(str) !== 'string') {// если str не равен строке, то false
    return null;
    }
    let result = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] != ' ') count++;
        else continue;
    }
    return result;
}
let s = get_string_length('Иванов Иван');
console.log(s);
