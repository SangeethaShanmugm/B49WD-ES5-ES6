//ES5-ES6
// scope => lifetime of a variable
//let, const  -block scope
// {} => block
// var  - function scope
console.log(y2);
{
  let y1 = 10;
  var y2 = 20;
  console.log(y2);
}

// console.log(y1); // Uncaught ReferenceError: y1 is not defined
// undefined(value) vs not defined(error)
console.log(y2);

// can a block hold a var or will it leak outside?
//it will leak outside

//hoisting  -> behaviour in JS

console.log(a); //undefined
//1000 lines
var a = 50;
console.log(a); //50

//Js -> JIT -> Just In Time Compilation
//Code -> binary (byte code)

//Phases
// 1. Compilation Phase => console(skip), look for only declaration
// 2. Execution Phase => JS, context

//Example- 1 => with var
// 1. Compilation Phase
console.log(a); //skip
var a = 50; //JS -> Do you know a? No | What is the value? -> context -> undefined
console.log(a); //skip

// 2. Execution Phase

console.log(a); //JS -> Do you know a? Yes | What is the value? -> context -> undefined
var a = 50; //JS -> Do you know a? Yes | What is the value? -> Note Down-> context -> a => 50
console.log(a); //JS -> Do you know a? Yes | What is the value? -> context =>  50

//Example- 2 => with let
// 1. Compilation Phase
// console.log(a1); //skip
// let a1 = 50; //JS -> Do you know a1? No | What is the value? -> context -> don't initialize
// console.log(a1); //skip

// 2. Execution Phase

// console.log(a1); //JS -> Do you know a1? Yes | What is the value? -> context -> Error => Uncaught ReferenceError: Cannot access 'a1' before initialization
// let a1 = 50;
// console.log(a1);

//Lexical scope & hoisting
//shadowing
var price = 1000; //Pant

function getPrice() {
  console.log("The old price is ", price); //The old price is  undefined
  var price = 500; //MSD
  console.log("The new price is", price); //The new price is 500
}

getPrice();
