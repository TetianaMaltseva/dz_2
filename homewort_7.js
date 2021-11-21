/* С помощью функции-конструктора, написать создание объекта Калькулятор. 
Функция конструктор принимает в качестве единственного параметра название калькулятора.
Ч2
Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.
Ч3
Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.

ps: делайте задание по частям*/


function Calculator(name) {

	this.array = [];
	this.name = name;
	
  // Проверка 
  this.checkTwoElements = function(element1, element2) {
		if (isNaN(element1) && isNaN(element2)) {
			console.error('Это не число');
			return true;
		}
    return false;
	};

	this. checkArrayElements = function (array) {
		for (let i = 0; i < array.length; i++) {
			if (typeof (array[i]) !== 'number') {
				console.error('Это не число');
				return true;
			}
      return false;
		}
	};

  // датa и время для действий

 this.getTime = function() {
  this.result_date = new Date();
  this.result = `Мой калькулятор:(${this.result_date.getDate()}. ${this.result_date.getMonth()}. ${this.result_date.getFullYear()} ${this.result_date.getHours()}:${this.result_date.getMinutes()}:${this.result_date.getSeconds()})`;
  return this.result;
};
  // вычитание
  this.subtraction = function(num1, num2) {
        this.result1 = num1-num2;
  
		  this.string = ` ${this.getTime()} разность = ${this.result1} ,(${num1},${num2})`;
		  this.array.push(this.string);
	 
		  return this.string;
      };

	// деление 
  this.divide = function(num1, num2) {
		
	  this.result3 = num1/num2;

	  this.string = ` ${this.getTime()} разность = ${this.result3} ,(${num1},${num2})`;
	  this.array.push(this.string);
 
	  return this.string;
      };

    //  cумма
  this.sums = function(...arrg) {
   	this.result2 = 0;
      for (let i = 0; i < arrg.length; i++) {
        this.result2 += arrg[i];
      }
     this.string = ` ${this.getTime()} cумма = ${this.result2}, (${arrg})`;
     this.array.push(this.string);

     return this.string;
   
      };

     // умножение
  this.mult = function (...arrg) {

	this.result4 = 1;
	for (let i = 0; i < arrg.length; i++) {
		this.result4 *=  arrg[i] ;
	}
   		this.string = ` ${this.getTime()} произведение = ${this.result4}, (${arrg})`;
  	 	this.array.push(this.string);

  		 return this.string;
    };
		//История 
		this.history = function() {
			for (let i = 0; i < this.array.length; i++) {
				this.string = this.array[i];
				console.log(this.string);
			}
			if (this.array.length < 1) {
				return false;
			}
			return true;
		};
		//Очистка
		this.clear= function() {
			this.array = [];
			return true;
		}
		return true;
		};
		
  this.calc = new Calculator('Калькулятор');
  console.log(calc.subtraction(10,5));//5
  console.log(calc.divide(10,5)); //2
  console.log(calc.sums(5,10,10,20)); 
  console.log(calc.mult(5,2,2,2));
  console.log(calc.history());
  console.log(calc.clear());