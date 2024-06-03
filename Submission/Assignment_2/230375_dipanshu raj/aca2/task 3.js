let n = prompt("Enter the number");

function createCounter(n) {
  let currentValue = n;

  return function() {
    return currentValue++;
  };
}

const counter = createCounter(n);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

