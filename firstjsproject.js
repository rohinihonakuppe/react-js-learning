//var a = 10;
//console.log(a);

// Named Function
function Add(x,y){
    console.log(x+y);
}

//Add(10,30);

function Add1(){
    console.log(arguments)
}

Add1(10,20,30,40);

// Anonymous function
var add2 = function(x,y){
    return x+y;
}

console.log(add2(10,20))

//Arrow Function
var add3 = (x,y) =>{
    return x+y;
}

console.log(add3(90,20))

var fname = 'Rohini'
var lname = 'Honakuppe'

console.log(`${fname} ${lname}`) // Interpolation

// diffrence between Let and Var
// diff 1 
//Var - uses function/global scope
//let - uses block scope
var x = 10;
let y = 20;

if(true){
    var x = 100;
   let y = 200;

    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);

//diff 2 - var - supports hoisting, let dose not support hoisting

console.log(a);
var a = 'Arohi';


// console.log(b);
// let b = 'Roohi';

//diff 3- 
//Var - If we can declare the loop as var variable it can be access outside the loop block with latest value 5
//let -  It has blocked scope so it can not be access outside the loop.
for(var i=0; i<5; i++){
    console.log('inside the loop',i);
}
console.log('outside the loop',i);

// 
// for(let j=0; j<5; j++){
//     console.log('inside the loop',j);
// }
// console.log('outside the loop',j);


//creting alert

function callme(e){
    alert("Clicked");
}