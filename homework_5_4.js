/*Напишите функцию get_type_file( file_name ),
 которая получает расширение файла в заданном имени файла file_name
  (пример: get_type_file("readme.txt"), 
функция должна вернуть ".txt")*/

function get_type_file (file_name) {

    if (typeof(file_name) !== 'string')// если file_name не равен строке, то false
    return false;

    let result = ''; 
    let array = file_name.split(''); //  переводим строку в массив
    let dot = array.indexOf('.'); //найти символ точку
    let temp = array.slice(dot, array.length);/* копируем в новый массив элементы
     с позиции start до end (не включая end).*/
     result = temp.join('');//переводим массив в строку
     
     return result;
}
console.log(get_type_file('readme.txt'));