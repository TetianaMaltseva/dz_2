//Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.

function get_random(arr) {
    if (!Array.isArray(arr)) { 
        return null;
    }
    return result = arr[Math.round(Math.random() * (arr.length - 1))];
    
}

let arr = ['Мясо', 'Рыба', 'Овощи', 'Фрукты', 'Орехи'];
console.log(get_random(arr));