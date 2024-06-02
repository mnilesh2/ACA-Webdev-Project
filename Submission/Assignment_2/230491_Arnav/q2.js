/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};


