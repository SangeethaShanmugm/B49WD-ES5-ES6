//spread Operator => expand or spread

const a = ["Hello", "Everyone", "have", "a", "great", "day", "🥳"];
console.log(a);
console.log(...a); //Hello Everyone have a great day 🥳

console.log("Hello", "Everyone", "have", "a", "great", "day", "🥳");
//Hello Everyone have a great day 🥳

//copy an array

const arr1 = ["One", "Two"];
const arr2 = [...arr1, "Three", "Four"];

console.log(arr1, arr2);

//spread operator in object => add/combine the objects

const o1 = {
  x: 1,
  y: 2,
};

const o2 = {
  z: 3,
};

const o3 = { ...o1, ...o2 };
console.log(o3); //{x: 1, y: 2, z: 3}

//Rest Parameter => use spread operator as a parameter + using res parameter will be passing arguments and it returns a result as array elements

let res = function (...a) {
  //parameter
  console.log(a);
};

res(5); //[5] //argument
res(2, 5, 9); //[2, 5, 9]
res(10, 20, 30, 40, 50); //[10, 20, 30, 40, 50]

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5, 10, 20)); //10

//using rest parameter
function sum(a, b, c) {
  console.log(a + b + c); //10
  return a + b + c;
}

const output = [5, 5, 10, 20];
console.log(sum(...output)); //20
