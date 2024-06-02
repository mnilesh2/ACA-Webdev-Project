/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if (functions.length === 0) {
        return function(x) {
            return x;
        };
    }
    return function(x) {
        var result = x;
        while (functions.length > 0) {
            var fn = functions.pop();
            result = fn(result);
        }
        return result;
    };
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */