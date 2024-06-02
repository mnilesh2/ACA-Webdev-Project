var createCounter = function(n) {
    return function() {
        let added=0
        n=n+1;
        if(added==0)
            {
                added=1;
            }
        return n;
    }
}
