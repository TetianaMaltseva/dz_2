/*Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей
, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить
 размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный,
 каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды 
от предыдущего, первое действие также должно иметь задержку 2 секунды.*/

function  createSquare ( number ) {
	for(let i = 0; i < number; ++i) {
		let $div = $('<div>');
		$div.appendTo('body');
	}
}

function setSize($elements, width, height) {
	$elements.width(width);
	$elements.height(height);
}

function createColor($elements, color) {
	$elements.css({
		background: `${color}`,
		margin: '5px'
	})
}

function createTriagle($element, rgbColor) {
	$element.css({
			background: 'linear-gradient(to right bottom, transparent 50%,' + 
			` ${rgbColor} left / 50% 100% no-repeat,` + 
			` linear-gradient(to left bottom, transparent 50%, ${rgbColor} right / 50% 100% no-repeat`

		})
}

function setNumber($elements) {
	let i = 1;
	$elements.each(function(){
		$(this).text(`${i}`);
		++i;
	})

}

$(document).ready(function() {
	let number = 100;
	let width = 70;
	let height = 70;
	let color = 'skyblue';

	setTimeout(function() {
		createSquare(number);

		console.log(width, height, color);
		$div = $('div');
		setSize($div, width, height);
		createColor($div, color);

	}, 2000);

	setTimeout(function() {
		width = 100;
		height = 100;
		color = 'purple';
		$div = $('div');

		console.log('second')
		setSize($div, width, height);
		createColor($div, color);
	}, 4000);

	setTimeout(function() {
		$div = $('div');

		setNumber($div);
	}, 6000);

	setTimeout(function() {
		let $div = $('div');
		let i = 1;

		$div.each(function(){

			if(i % 3 === 0) {
				createColor($(this), 'red');
			}
			if(i % 15 === 0) {
				createTriagle($(this), 'rgb(99, 114, 72) 50%)');
			}

			++i;
		})
	}, 8000);

	setTimeout(function() {
		let $div = $('div');

		$div.each(function(){

			if($(this).css('background-color') === 'rgb(255, 0, 0)') {
				$(this).remove();
			}
		})
	}, 10000)
})