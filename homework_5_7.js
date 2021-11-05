/*Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."*/

function get_short_fio (full_fio) {
    if (typeof(full_fio) !== 'string'){// если full_fio не равен строке, то false
         return false;
    }

    let result = '';
    
    let array_fio = full_fio.split(' ') ;//разбиваем строку в массив
        if ( array_fio.length !== 3) { //если длина масива не равна 3, тогда false
            return false;
    }

        let short_name = array_fio[1].slice(0, 1) ;// удалили из имени всё кроме первого знака
        let short_surname = array_fio[2].slice(0, 1);
        short_name = short_name.toUpperCase();// перевели в верхний регистр
        short_surname = short_surname.toUpperCase();
        result = `${array_fio[0]} ${short_name}. ${short_surname}.`;

    return result;
}

let s = get_short_fio('Иванов Сергей Петрович');
console.log(s);