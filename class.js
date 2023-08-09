// class => blueprint of object

//constructor function
function Person() {
  (this.name = "John"), (this.age = 20);
}

//creating a object

const p1 = new Person();
console.log("p1 =>", p1);

const p2 = new Person();
console.log("p2 =>", p2);

//create a class
class PersonData {
  constructor(name) {
    this.name = name;
  }
}

//creating a object
const person1 = new PersonData("Peter")

console.log(person1)

const person2 = new PersonData("Mickenzie")

console.log(person2)