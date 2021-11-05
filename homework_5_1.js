/*Напишите функцию get_max( arr ), которая находит максимальное
 значение в заданном массиве.*/


 function get_max(arr){
    if (!Array.isArray(arr)) { //проверяет, является ли arr массивом
        return null;
    }

    let result = -Infinity;

    for (let i = 0; i < arr.length; i++) {
       let element = arr[i];
      /* console.log(result);*/
       if (element > result) {
           result = element;
       }
    }
    return result;
   
}
let arr = [10, -50, 100, 45, 30];
let max = get_max(arr);
console.log(max);