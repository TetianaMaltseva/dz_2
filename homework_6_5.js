/*Напишите функцию get_count_work_days(date1, date2), которая будет считать количество 
рабочих дней между двумя заданными датами.*/

/*let startDate = new Date('2021/10/1');
let endDate = new Date('2021/10/30');
let numOfDates = getBusinessDatesCount(startDate,endDate);

function getBusinessDatesCount(startDate, endDate) {
    var count = 0;
    let curDate = startDate;
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
           count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    console.log(count)
    return count;
}*/
const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_work_days(date1, date2){

    if(date1 instanceof Date && date2 instanceof Date){
        let result = 0;

        let ms_start = date1.getTime();
        let ms_finish = date2.getTime();

        if(ms_start > ms_finish) {
            let temp = ms_start;
            ms_start = ms_finish;
            ms_finish = temp;
        }
        for(let ms_current_date = ms_start; ms_current_date <= ms_finish; ms_current_date += MS_DAY) {
            let current_date = new Date(ms_current_date);
            console.log(current_date);
            let current_date_day = current_date.getTime();
            if (current_date_day >= 1 && current_date_day <= 5) {
                result++;
            }
        }
        return result;
    }
    return null;
}
let date1 = new Date('2021/10/1');
let date2 = new Date('2021/10/30');
console.log(get_count_work_days(result));



