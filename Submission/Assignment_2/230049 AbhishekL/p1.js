var cancellable = function(fn, args, t) {
    fn(...args);
    const runininterval = setInterval(() => {
        fn(...args);
    }, t);
    return function cancelT() {
        clearInterval(runininterval);
    };
};
