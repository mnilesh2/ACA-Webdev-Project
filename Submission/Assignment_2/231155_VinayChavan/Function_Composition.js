/**
 * @param {Function[]} functions
 * @return {Function}
 */

//This is my solution
var compose = function(functions) {
    let n = functions.length;  //length of array of functions is n.
    return function(x) {
        let func =x;
        for(let i=n-1;i>=0;i--){         // to evaluate value after composition we should start evaluating from n-1 onwards and value obtained will be arg for next fn 
            func = functions[i](func);
        }
        return func;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */