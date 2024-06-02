/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
   return function() {
         return count++;
   };
};




// const counter = counterFn(5);
// console.log(counter()); //  output = 5
// console.log(counter()); //           6
// console.log(counter()); //           7
