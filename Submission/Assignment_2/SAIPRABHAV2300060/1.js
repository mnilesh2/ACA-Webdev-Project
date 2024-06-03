let cancellable = function (fn, args, t) {
    fn(...args); 

    let time = setInterval(function() {fn (...args); }, t);

    let cancel = function() { clearInterval(time);};
   

    return cancel;
};
 // const time = setInterval(() => fn(...args), t);

    // const cancel = () => {clearInterval(time)};