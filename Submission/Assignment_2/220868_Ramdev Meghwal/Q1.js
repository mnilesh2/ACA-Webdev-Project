var cancellable = function(fn, args, t) {
    let interval;
    let time = 0;
    const results = [];

    const executeFn = () => {
        const result = {
            time,
            returned: fn(...args)
        };
        results.push(result);
        time += t;
    };

    executeFn();

    interval = setInterval(executeFn, t);

    const cancelFn = () => {
        clearInterval(interval);
        console.log("Cancelled at", time);
        console.log(results);
    };

    return cancelFn;
};
