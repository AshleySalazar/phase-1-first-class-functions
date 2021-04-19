function receivesAFunction(callback) {
    return callback();
};

function returnsANamedFunction(){
    const someFunction = () => {};
    return someFunction;
};

function returnsAnAnonymousFunction(){
    return function() {}
}