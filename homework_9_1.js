/*Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

 на jQuery*/

$(document).ready(function(){
    $('div:first').on('click',function(event){
	//	console.log(event);
		alert ('Голубой');
});
$('div:first').on('mouseout',function(event){
		console.log('Высота этого прямоугольника 100рх, а его ширина 200рх');
		
});
$('div:last').on('click',function(event){
	//	console.log(event);
		alert ('Зеленый');
});
$('div:last').on('mouseout',function(event){
	console.log('Высота этого прямоугольника 150рх, а его ширина 250рх');
	
});
})