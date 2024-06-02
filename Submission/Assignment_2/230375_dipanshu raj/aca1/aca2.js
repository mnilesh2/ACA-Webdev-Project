function composeFunctions(funcs) {
    return function(x) {
        return funcs.reduce((acc, curr) => curr(acc), x);
    };
}
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composedFunction = composeFunctions([addOne, double, square]);

console.log(composedFunction(2)); // Output: 18 