/*С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} 
Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную,
или по ссылке из данных) и 2 кнопки с такими действиями:
alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево
 сделать синхронной функцией.*/


 $(document).ready( async function()  {
	function getObjectValuesInBlocks(obj, block) {
		if (typeof(obj) !== 'object' || typeof(block) !== 'object') {
			return null;
		}

		for (let key in obj) {
			let div = document.createElement('div');
			let value = obj[key];

			div.setAttribute('class', `${key} element`);
			block.append(div);

			if (typeof(value) === 'object') {
				div.setAttribute('class', `${key} object`)
				getObjectValuesInBlocks(value, div);
			} else {
				let div_key = document.createElement('div');
				div_key.setAttribute('class', 'key');
				let div_value = document.createElement('div');
				div_value.setAttribute('class', 'value');

				div.append(div_key);
				div.append(div_value);

				div_key.innerText = `${key}: `;
				div_value.innerText = value;
			}
		}
	}

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
		.then(function(json) {
			json.forEach((user) => { // перебираем массив и вставляем в документ
				let divUser = document.createElement('div');//новый элемент див в документ
        		divUser.style = 'display: block;font-size:10px;';//стилизуем его
				let divText = document.createElement('div'); // 
				let img = document.createElement('img');//создаем каритнку
       			 img.style = 'top:10px;left:10px;width:100px';
				let btn1 = document.createElement('button');//первая кнопка
				btn1.style = 'display: block;background: lightgreen; margin: 10px 10px 5px 200px ';
				let btn2 = document.createElement('button');// вторая кнопка
				btn2.style = 'display: block;background: lightgreen;  margin: 10px 10px 5px 200px';

				divUser.setAttribute('class', 'user'); // <div class ="user">
				divText.setAttribute('class', 'text'); //<div class ="text">
				img.setAttribute('src', 'js/sofa.jpg');// картинка
				btn1.setAttribute('class', 'removeBlock'); //с атрибутом классом удалить информацию
				btn2.setAttribute('class', ' information'); // кнопка с классом информациякнопка 

				btn1.innerText = 'Удалить';// пишем текст кнопки 1
				btn2.innerText = 'Номер телефона пользователя';//пишем текст кнопки 2

				document.body.append(divUser);// вставляем divUser в конец документа 
				divUser.append(divText);//<div class ="user"><div class ="text"></div></div>
				divUser.prepend(img);//  картинка в начале дива юсер
				divUser.after(btn1); // кнопка после текста 
				divUser.after(btn2);

				getObjectValuesInBlocks(user, divText);

				let phone = btn2.previousElementSibling.getElementsByClassName('phone element');
				btn2.addEventListener('click', _click, false);//обработчик событий
				function _click() { alert(phone[0].innerText); }//алерт с номером телефона

				/*let removeUser = btn1.previousElementSibling.getElementsByClassName('text');
				btn1.addEventListener('click', _click1, false);//обработчик событий
				function _click1() {removeUser.remove(); }*/

				btn1.onclick = function() {//удаляем пользователя
					if  (confirm("Вы точно хотите удалить?")){
					let user = btn2.previousElementSibling;

					user.remove();
					btn2.remove();
					btn1.remove();
				}}
			})
		});

});

/* $(document).ready(() => {

	let start = null;
	let finish = null;

	fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		loadingData(json);

	})
	.then(() => {
		enumerationOfElements();
	});
 
 let usersElements = [];

 function loadingData (users) {
	 for (j = 0; j < 1; j++) {
		 for (let i = 0; i < users.length; i++) {
			 let userObject = users[i];
			 userObject.id = Math.trunc(Math.random()* 10);
			 usersElements.push(createDiv(userObject));
		 }
	 }
 }
 function enumerationOfElements () {
	 for (let i = 0; i <usersElements.length; i++) {
		 let userElement = usersElements[i];
		 $(`#insert`).append(userElement[0]);
	 }
 }
 function createDiv (user) {
	let counter = user.id;
	
	let field = $('<div>', {
		class: `my_card${counter}`,
		id: `card${counter}`
	});
	field.append(`<div class ="card${counter}_img><img>`);
	let _data =  $(`<div class ="card${counter}_data></div>`);
	field.append(_data);
	field.append(`<div class ="card${counter}_buts></div>`);

	_data.append(`<div class ="name_card">${user.name}</div>`);
	_data.append(`<div>User ID: ${user.id}</div>`);
	_data.append(`<div>Email: <a href ="${user.email}">${user.email}</a></div>`);
	_data.append(`<div>Company: ${user.company.name}</div>`);
	_data.append(`<div>Phone: ${user.phone}</div>`);
	_data.append(`<div>Website:<a href="${user.website}">${user.website}</a></div>`);

	let button = $(`<button id="${counter}"`);
	let batton2 = $(`<button class="btn"${counter}"`);

	_data.append(button);
	_data.append(button2);

	button.on({
		click: function(event) {
			if (confirm("Вы точно хотите удалить?")){
			let counter = event.currentTarget.getAttribute('id');
			$(`.card${counter}`).remove();
		}}
	})
	button2.on({
		click: () => {
			let str = '';
			for (key in user) {
				if (user[key] == "[object Object]") {
					for(deep_key in user[key]) {
						if(user[key][deep_key] == "[object Object]") {
							for (very_deep_key in user_key) {
								st += `${key}: ${deep_key}: ${very_deep_key}`;
							}
						}else{
							st += `${key}: ${deep_key}: ${very_deep_key}\n`
						}
					}
				} else{
					st += `${key}: ${deep_key}\n`	
				}
			}
			alert(str);
		}
	})
	return field;
 }
});*/