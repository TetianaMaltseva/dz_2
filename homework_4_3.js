/* Необходимо написать функцию, которая принимает слово в виде строки,
функция будет возвращать слово с буквами в обратном порядке.*/

function reverseString(str){
    let stringRev = " ";
    for(let i= 0; i<str.length; i++){
        stringRev = str[i]+stringRev;
    }
    return stringRev;
}
alert(reverseString(prompt("Введите слово")));