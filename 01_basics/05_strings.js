let myName = "karan";

//console.log(myName.toUpperCase());
//console.log(myName.length);

let random_str = "  karavarshney071-gmail-com  ";

// substring
let substr =  random_str.substring(1 , 4);
//console.log(substr);

// slice

console.log(random_str.slice(3, 8));

//console.log(random_str.charAt(13));
//console.log(random_str.indexOf('a'));

console.log(random_str.trim());

//split 

const str = 'The quick bron fox jumps ower the lazy dog.';
const words = str.split('o');
console.log(words[0]);

// replace 

console.log(str.replace('ow' , 'kk'));

// another declaration of string

const anotherString = new String('KaranVarshney');
console.log(anotherString);
console.log(anotherString.__proto__);








