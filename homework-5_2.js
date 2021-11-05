/*Напишите функцию random(min, max), которая будет
 возвращать случае целое число от min до max*/

 function random (min, max) {
    function check_param (param) {
    return typeof(param) !== 'number';
    }
    if (check_param(min) || check_param(max)) {
        return null;
    }

    let result = 0;
    let temp = Math.random();//возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1)

    result = min + (max - min) * temp;
    result = Math.floor(result);//Округляет аргумент до ближайшего меньшего целого.

    return result;
}

let s = random(1, 50);
console.log(s);

