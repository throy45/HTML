console.log("hello");

function add(x, y) {
  // no type checking
  return x + y;
}
console.log(add(1, 2));

function welcomeMessage(name) {
  console.log("Welcome, " + name + ", nice to see you");
}
function goodbye(name) {
  console.log(`Farewell, ${name}`); // not unlike fstrings in python
}

welcomeMessage("Thomas");
goodbye("Thomas");
