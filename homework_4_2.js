//Создайте массив с чётными числами в диапазоне от 500 до 888 включительно

function oddNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if(item % 2 === 0) 
        console.log(item);
    }
  }
  let min = 500;
  let max = 888;
  let numbers  = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);
 
  console.log(numbers);;
  oddNumbers(numbers); 