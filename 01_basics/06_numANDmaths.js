const value = 56645677

//  number to string

const stringValue = value.toString();

console.log(stringValue.charAt(4));

const value2 = 123.76769898

console.log(value2.toPrecision(5));            // estimate over all value from the starting , no role of decimal 
console.log(value2.toFixed(3));               // estimate value over 3 decimal places 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());



//++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-67));
console.log(Math.round(4.4999999));
console.log(Math.ceil(4.333));
console.log(Math.floor(4.99));
console.log(Math.max(3, 4, 4, 5.5 , 6.66 ));

console.log( Math.random());

// Develop functionality to produce an output number between a range of max and min value 

const max = 20 
const min = 10 

console.log( Math.floor( (Math.random()) * ( max - min + 1 )) + min );












