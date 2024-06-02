var createCounter = function(n) {
    let cur = n - 1;
    return function() {
        cur++;
        return cur;
    };
};