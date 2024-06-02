/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length===0){
            return x=>x;
    }else{
        return function(x){
            fn=x;
            for(let i=functions.length-1;i>=0;i--){
                fn=functions[i](fn);
            }
            return fn;
        }
    }
        
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */