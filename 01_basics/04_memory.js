// Stack memory( stored as a copy ( CALL BY VALUE ))  ->   for (Primitive Datatypes e.g.  number , boolean, string)
// Heap memory ( stored as references ( CALL BY REFERENCE))  -> for ( Non - prim Datatypes e.g array , object . function)

let myName = "karan"
let myupdateName = myName 

myupdateName = "karthik"

//console.log(myName);
//console.log(myupdateName);  

let obj1 = {
    post : "softare developer" ,
    skill : "MERNStack",
    gameplay : "TableTennis"
}

let obj2 = obj1

obj2.skill = "LAMPStack";

console.log(obj1.skill);
console.log(obj2.skill);
