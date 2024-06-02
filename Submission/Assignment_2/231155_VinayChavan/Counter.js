/**
 * @param {number} n
 * @return {Function} counter
 */


// This is my solution
var createCounter = function(n) {
    
    //this inner function has access to n (Closure)
    return function() {
        return n++;
    };
};




/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */