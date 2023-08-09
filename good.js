import {
  PrintDetails4 as provideInfo,
  double as multiple,
  msg,
} from "./cool.js"; //named import
// import PrintDetails4 from "./cool.js"; //default import
// import double from "./cool.js";
const student1 = {
  name: "Ragavan",
  age: 20,
  batch: "B49WD",
  score: 90,
};

console.log(provideInfo(student1)); //Ragavan has got 90 and he belongs to B49WD
// PrintDetails4();

console.log(multiple(10)); //20
console.log(msg); //Hello Everyone
