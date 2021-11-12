/*
Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает
 их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, 
первое действие также должно иметь задержку 3 секунды.*/

function createSummer(square){
    let s2 = "";
    for(let i = 0; i < square; i++){
        s2 += "<div style='width:100px; height:100px; background:green; display:block; margin:10px;'></div>";
    }
    document.body.innerHTML = s2;
}
window.addEventListener("load", function(){
    createSpring(10); // количество квадратов
});
 function createAutumn(square){
    let s3 = "";
    for(let i = 1; i < square; i++){
        s3 += "<div style='width:100px; height:100px; background:yellow; display:block; margin:10px;'></div>";
		if(i % 2 === 0) {
		s3 += "<div style='width:100px; height:100px; background:red; display:block; margin:10px;'></div>";
		}
    }
    document.body.innerHTML = s3;
}
window.addEventListener("load", function(){
    createAutumn(10); // количество квадратов
});
 function createWinter(square){
    let s4 = "";
    for(let i = 0; i < square; i++){
        s4 += "<div style='width:1620px; height:1620px; background:black; display:block;'></div>";
		}
    document.body.innerHTML = s4;
}
window.addEventListener("load", function(){ //загружается функция
    createWinter(1); // количество выводимых квадратов
});

function createSpring(square){
    let s = "";
    for(var i = 0; i < square; i++){
        s += "<div style='width:50px; height:50px; background:blue; display:block; margin:10px;'></div>";
    }
    document.body.innerHTML = s;
}
window.addEventListener("load", function(){
    createSpring(10); // количество квадратов
    
   
});
setTimeout(createSpring,3000,10);
setTimeout(createSummer, 6000, 10);
setTimeout(createAutumn, 9000, 10);
setTimeout(createWinter, 12000, 1);
setTimeout(delete_all, 15000, 10);


