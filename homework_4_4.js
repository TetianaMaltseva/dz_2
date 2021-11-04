/*Написать мини-игру "Города". Бесконечно запрашивать у пользователя ввод города.
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова - 
засчитываем 1 очко. Если не совпадает выдаем "Игра окончена". Ваши очки: (коли
    чество очков).*/

    function games() {
        let count = 0;
        let city = prompt('Введите город');
        
        if (!city) {
            alert('Вы не ввели город');
        } else {
            city = city.toLowerCase();
            while (true) {
               let citySecond = prompt(`Предыдущий ответ: ${city}
                        Введите следующий город`);
                if (!citySecond) {
                    alert('Вы не ввели город');
                } else {
                    citySecond = citySecond.toLowerCase();
                    if (city[city.length - 1] == 'ь') {
                        if (city[city.length - 2] == citySecond[0]) {
                            city = city2;
                            count++;
                        } else {
                            alert(`Игра окончена. Ваши очки: ${count}`)
                            break;
                        }
                    } else if (city[city.length - 1] == citySecond[0]) {
                        city = citySecond;
                        count++;
                    } else {
                        alert(`Игра окончена. Ваши очки: ${count}`)
                        break;
                    }
                }
            }
        }
    }
    games();
    
