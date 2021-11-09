/*Напишите функцию search_string(search, string), 
которая будет проверять наличие подстроки search в строке string. 
Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf)*/


function search_string(search, string){
    string = string.toLowerCase();
    search = search.toLowerCase();
    return result = string.indexOf(search) != -1 || false;
}
console.log(search_string('привет', 'Привет, где ты любишь отдыхать?'));