//Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

function get_compare(arr1, arr2) {
    if(!Array.isArray(arr1)&& !Array.isArray(arr2)) {  
       return null;
           }
   if(arr1.length !== arr2.length){
       return false;
   }
   for (let i = 0; i <  arr1.length; i++) {
          
       if (arr1[i] !== arr2[i]) {
       return false;
       }
   }
   return true; 
   }

let arr1 = [1,5,7];
let arr2 = [1,5,7];
let compare = get_compare(arr1,arr2);
console.log(compare);