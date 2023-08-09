const avenger = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "I am happy",
};

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "I am happy",
};

console.log(networth, power, skill);
//  "💰💰💰💰"
//  "🤖"
//  ["genius", "billionaire", "playboy", "philanthropist"]

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "I am happy",
};

const avg1 = { ...avg, nation: "IN", power: "💿" };
console.log(avg1);

const avg2 = { nation: "IN", power: "💿", ...avg };
console.log(avg2);

// {
//     nation: "IN",
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰",
//     power: "🤖",
//     phrase: "I am happy",

// }

//Object shorthand => key and value name should be same

const age = 20;
const batch = "B49WD";
const mark = 90;
// const student = {
//   name: "Sahil",
//   age: age,
//   batch: batch,
// };

const student = {
  name: "Sahil",
  age,
  batch,
};

console.log(student);

const student1 = {
  name: "Ragavan",
  age,
  batch,
  score: mark,
};

console.log(student1);

//function destructure - ES5
function PrintDetails(student1) {
  return (
    student1.name +
    " has got " +
    student1.score +
    " and he belongs to  " +
    student1.batch
  );
}

console.log(PrintDetails(student1));

function PrintDetails1(student1) {
  const { name, score, batch } = student1;
  return name + " has got " + score + " and he belongs to  " + batch;
}

console.log(PrintDetails1(student1));

//destruring in argument itself
function PrintDetails2({ name, score, batch }) {
  // const  {name, score,batch} =  student1
  return name + " has got " + score + " and he belongs to  " + batch;
}

console.log(PrintDetails2(student1));

//function destructure - ES6
//Template literals = `` +  ${} => interpolation => substitute the value

function PrintDetails3({ name, score, batch }) {
  return `${name} has got ${score} and he belongs to ${batch}`;
}

console.log(PrintDetails3(student1));

//Arrow function + Template literals + Destructuring

const PrintDetails4 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(PrintDetails4(student1));
