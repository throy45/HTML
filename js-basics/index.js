// variable type is dynamix
const firstName = "Thomas";
let lastName = null;
console.log("Username: " + firstName + " " + lastName);
lastName = "FooBar";
console.log("Username: " + firstName + " " + lastName);
lastName = 45;
console.log("Username: " + firstName + " " + lastName);

let person = {
  name: "mosh",
  age: 30,
  gender: "man",
};

// default choice should be dot notation
// except if we don't know the type to check
let selection = "age";
selection = "gender";
console.log(person.name + " is " + person[selection]);

// array length and type is dynamic
let colors = ["red", "blue"];
colors[2] = "green";
colors[3] = 2;
console.log(colors[1]);

function greet(firstName, lastName) {
  console.log("hello " + firstName + ",");
  console.log("your last name is " + lastName);
}
function square(number) {
  return number * number;
}
let number = square(2);

greet(person.name);
greet(firstName, number);
