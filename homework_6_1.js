  /*   Напишите функцию get_count_days(date) , которая будет считать количество
  дней до Нового года от date, 
  если оно задано, иначе посчитать количество дней от текущей даты.*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_day(date) {
 
    let date_Fixed = new Date(date);
  if (date !=null) {
   date_Fixed = new Date(date);   

  } else
  date_Fixed = new Date();
 // console.log(`${date_Fixed}`);
 let new_Year = new Date(2021,11,31);
 //console.log(`${new_Year}`);
 let date_result =Math.floor((new_Year - date_Fixed)/MS_DAY);

  return date_result;
}

console.log(get_count_day());