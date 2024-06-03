let compose =function(functions){
    return function(x){
       a=x;
       for(let i=functions.length-1;i>=0;i--){
           a=functions[i](a);
       }
       return a;
       };
   };
   