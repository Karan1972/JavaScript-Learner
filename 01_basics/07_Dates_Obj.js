let date = new Date();

// console.log(date);
// console.log(date.toString());
//console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log( typeof date);

// let myCreatedDate = new Date(2023 , 1 , 27);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("10-10-2000");                    //  MM-DD-YYYY
console.log(myCreatedDate.toDateString());

let date_instance = Date.now();                                // can not use new Date.now() as it is not a constructor
console.log(date_instance);

console.log(myCreatedDate.getTime());                          // gives you time in milliseconds 
console.log(Math.floor(myCreatedDate.getTime()/ 1000));        // in seconds
console.log(myCreatedDate.getMonth() + 1 );

                           








