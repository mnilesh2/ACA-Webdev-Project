var cancellable = function(fn, args, t) {
    const Value = fn(...args);
    const time = setInterval(function(){
        return fn(...args);
    },t)
    return function() {
        clearInterval(time);
    };
};