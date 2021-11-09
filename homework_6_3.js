 /* Напишите функцию get_day(date), которая возвращает день недели от заданной даты.
  Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/

  function get_count_day(date) {

    const DAY_OF_WEEK = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
    
    
    let date_Fixed = new Date(date);
    
    let week_name = DAY_OF_WEEK[date_Fixed.getDay()]; 
  
    let result = ` ${week_name}`;
      
   return result;
  }
  console.log(get_count_day('2021-11-10')); 