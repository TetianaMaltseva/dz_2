/* Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false */

function is_empty(obj){
    
    for (var key in obj){
        return false;
    }
    return true;
}
let obj = {};
let schedule1 = {'подъём':'8-30' };
console.log(is_empty(obj));
console.log(is_empty(schedule1));