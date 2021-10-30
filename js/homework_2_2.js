let diametr_wheel_home = prompt ('Введите диаметр колеса','0');
let speed_home = prompt ('Введите путь автомобиля','0');
 diametr_wheel_home = Number(diametr_wheel_home);
 speed_home = Number(speed_home);
 let diametr_wheel = diametr_wheel_home * 2.54;
 let speed = speed_home * 1000;
 const PI = 3.14;
 let wheel_lenght = PI * diametr_wheel;
 let wheel_speed = speed/diametr_wheel;
 let four_wheel = wheel_speed * 4; 
if (isNaN( diametr_wheel_home, speed_home)) {
    alert ('Введенное значение не является числом');
} else {
    if (diametr_wheel_home > 0 && speed_home > 0) {
        alert ( `Кажное колесо сделало  ${wheel_speed} оборотов`);
        alert ( `Все колеса сделали ${four_wheel} оборотов`);
    }    
} 
console.log (wheel_speed);
console.log (four_wheel);








