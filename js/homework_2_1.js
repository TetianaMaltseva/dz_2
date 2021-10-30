let days = prompt('Введите число','0');
days = Number(days);
if (isNaN(days)) {
    alert ('Введённое значение не является числом');
}else{
    if (days == 1){
        alert ( ` ${days} день`);
    }
    if (days >=5 && days <=20)  {
        alert ( ` ${days} дней`);
    }
        if (days >=2 && days <=4) {
        alert ( ` ${days} дня`);
    }
}


