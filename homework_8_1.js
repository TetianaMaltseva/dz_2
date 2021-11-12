/*Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.*/

let rectangle = document.createElement('div');
 rectangle.setAttribute('class','blue');
 document.body.append(rectangle); // в конец документа

 rectangle.addEventListener('click', _click, false);//обработчик событий
 function _click() { alert(' Голубой '); }

rectangle.onmouseover = function(event) {
let target = event.target;
target= console.log('Размер этого прямоугольника 350 х 150 пикселей');}
 //rectangle.addEventListener('click', _click2, false);
 //function _click2() {console.log('Размер этого прямоугольника 350 х 150 пикселей'); }

 let rectangle1 = document.createElement('div');
 rectangle1.setAttribute('class','green');
 document.body.prepend(rectangle1);// в начало документа
 
 rectangle1.addEventListener('click', _click3, false);
 function _click3() { alert('Зеленый'); }

 rectangle1.addEventListener('click', _click4, false);
 function _click4() {console.log ('Размер этого прямоугольника 550 х 250 пикселей'); }


 /*function isInside(node, target) {
    for (; node != null; node = node.parentNode)
      if (node == target) return true;
  }
  rectangle.addEventListener("mousedown", function(event) {
    if (!isInside(event.relatedTarget, rectangle))
    rectangle=  alert(' Голубой ');
   
  });
  rectangle.addEventListener("mouseup", function(event) {
    if (!isInside(event.relatedTarget, rectangle))
    rectangle=  console.log('Размер этого прямоугольника 350 х 150 пикселей');
      
  });*/
 

