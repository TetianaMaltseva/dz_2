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

function Calculator() {

    this.tomorrow = function() {
      this.result_date = new Date();
      this.result = `Мой калькулятор:(${this.result_date.getDate()}. ${this.result_date.getMonth()}. ${this.result_date.getFullYear()} ${this.result_date.getHours()}:${this.result_date.getMinutes()}:${this.result_date.getSeconds()})`;
      return this.result;
    };
    this.subtraction = function(num1, num2) {
        this.result1 = num1-num2;
          return this.result1 ;
      };
    this.divide = function(num1, num2) {
          return num1/num2;
      };
    
      this.sums = function() {
          this.sum = 0;
          for (let i = 0, j = arguments.length; i < j; i++) {
              return this.sum += arguments[i];
          }	
      };
    this.mult = function (...arguments) {
        this.mul = 1;
        for (let i = 1, j = arguments.length; i < j; i += 1) {
            return this.mul *arguments[i];
        }
    };
  
   
      
  }
  
  let calc = new Calculator();
  console.log(calc.tomorrow());
  console.log(calc.subtraction(10,5));//5
  console.log(calc.divide(10,5)); //2
  console.log(calc.sums(5,10,10,20)); 
  console.log(calc.mult(5,10,10,20));


