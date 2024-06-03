function compose(functions) {
    return function(x) {
      return functions.reduceRight((acc, fn) => fn(acc), x);
    };
  }
  
  // Example usage:
  const f1 = x => x + 1;
  const f2 = x => x * 2;
  const f3 = x => x - 3;
  
  const composedFunction = compose([f1, f2, f3]);
  let t=prompt("Enter the number");
  console.log(composedFunction(t)); // Output: f1(f2(f3(5))) -> f1(f2(2)) -> f1(4) -> 5
  
 
  