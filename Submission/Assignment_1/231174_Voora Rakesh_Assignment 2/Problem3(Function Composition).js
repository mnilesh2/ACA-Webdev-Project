var compose = function(functions) {
    count=functions.length
    if(count==0){
     return function(x){
         return x;
     }
    }
    else{
     var len=count-1
     return function(x){
         for(var i=len;i>=0;i--){
             x=functions[i](x)
         }
         return x;
     }
    }   
 };