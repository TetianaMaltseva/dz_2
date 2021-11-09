/*15.Напишите функцию get_order(string), которая отсортирует все 
слова в заданном предложении string в алфавитном порядке.
 Например get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"*/

function get_order(string){
   
    let arr = string.split(' ');
    arr.sort();
    return str = arr.join(' ');
}
console.log(get_order('ноты акустика гитара'));