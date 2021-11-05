/*Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
 и если она превосходит maxlength – 
заменяет конец str на "...", так чтобы ее длина стала равна maxlength.*/

function truncate (str, maxlength) {
   
    if (typeof(str) !== 'string'){// если str не равен строке, то false
    return false;
    }

    if (typeof(maxlength) !== 'number'){
        return false;
    }

    let result = str;

    if(str.length > maxlength) { // если длина строки больше максимальной
        let temp = str.slice(0, maxlength - 3); //  начиная с 0 индекса , удаляем элементов и вставляем ...
        result = `${temp}...` // и выводим как переменная с ... в конце
    }
    return result;
}
let s = truncate('function_truncate', 8);
console.log(s);