/*Напишите функцию, возвращает новый массив без предоставленных значений.
 Используйте примитивные типы.*/

 function getFilter(array1, array2) {

    if(!Array.isArray(array1) && !Array.isArray(array2)) {  
        return null;
     }
  
     let result = []; // пустой рузультатирующий массив

     for (let i = 0; i < array1.length; i++){//перебираем первый массив
       
        if (array2.indexOf(array1[i]) === -1) { /*если элемент из массива1 входит в массива2, 
            то он не добавляутся в результатирующий массив*/
           
            result.push(array1[i]); //добовляем элементы в конец из массива1, не вошедшие в массив2

        }
    }
    return result;//вернули результат
 }
 let array1 = [1, 2, 3, 4,8,9];
 let array2 = [ 5, 6, 7 ,8,9];
 console.log(getFilter(array1,array2));// [1,2,3,4]

