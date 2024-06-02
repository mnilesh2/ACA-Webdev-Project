var cancellable = function(fn, args, t) {
    
    fn(...args);
    let timer = setInterval(function(){fn(...args)}, t);

    function cancelFn(){
        clearInterval(timer);};
    return cancelFn;
    
};