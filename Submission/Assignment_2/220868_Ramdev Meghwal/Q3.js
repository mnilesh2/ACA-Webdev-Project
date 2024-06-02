/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // If the array is empty, return the identity function
        if (functions.length === 0) {
            return x;
        } else {
            // Start with the input value
            let result = x;
            // Apply each function in the array to the result
            for (let i = functions.length - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            return result;
        }
    };
};
