function receivesAFunction(cb){
    return cb();
}

receivesAFunction(function(){
    return "Hello there, Bonface";
});

function returnsANamedFunction() {
    return function namedFunction(){
        return 'Username'
    };
}

function returnsAnAnonymousFunction(){
    return (function(){})
}