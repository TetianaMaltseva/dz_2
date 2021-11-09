/* Написать функцию count_symbol( symbol, string ), которая подсчитает
 количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число */

function count_symbol (symbol, string) {
    
    symbol = symbol.toLowerCase();
    string = string.toLowerCase();
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if (string[i] === symbol){
           
            count++;
        }
        else continue;
    }
    return count;
    console.log(count_symbol('hello', 'Hello  my name')); 
}
console.log(count_symbol('hello', 'Hello  my name'));
