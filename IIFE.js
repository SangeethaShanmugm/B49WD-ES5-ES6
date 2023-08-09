// (function () {
//   return "Hello";
// })();

//Regular function
function Hello() {
  console.log("Hello");
}
Hello(); //function call

//IIFE
(function () {
  console.log("Hello Everyone");
})();

(function (a, b) {
  //   return a + b;
  console.log(a + b);
})(5, 2);

//closure

function outer() {
  var a = 10;
  function inner() {
    return a;
  }
  return inner;
}
// var close = outer();
// console.log(close());
console.log(outer()());
