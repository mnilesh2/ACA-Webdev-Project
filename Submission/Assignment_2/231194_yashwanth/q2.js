var createCounter = function(n) {
    
    let current = n;

    return function() {
        return current++;
    };
};