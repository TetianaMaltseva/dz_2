let days = prompt('Введите число','0');
days = Number(days);
if (isNaN(days)) {
    alert ('Введённое значение не является числом');
}else{
    if (days == 1){
        alert ( ` ${days} день`);
    }
    if (days >=2 && days <=4) {
        alert ( ` ${days} дня`);
    }
   let first_day = days % 100
        if ( first_day >= 5  &&  first_day <= 20  ){
        alert ( ` ${days} дней`);
    }
    let second_day = first_day % 10
        if (second_day == 1){
        alert ( ` ${days} день`);
    }
        if (days >=2 && days <=4) {
        alert ( ` ${days} дня`);
    }
    }
