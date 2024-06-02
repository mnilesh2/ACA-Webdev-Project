var cancellable = function(fn, args, t) {
    fn(...args);
    const id = setInterval( () => fn(...args), t);
    const cancelFn = () => clearInterval(id);
    return cancelFn;
};