//this => access property of an object

let firstName = "Aman";
let lastName = "Mehta";

let SayHi = {
  firstName: "Deepak",
  lastName: "Sharma",
  greet: function () {
    return `Say hi to ${this.firstName} ${this.lastName}`;
  },
};

console.log(SayHi.firstName); //Deepak
console.log(SayHi.greet()); //Say hi to Deepak Sharma
