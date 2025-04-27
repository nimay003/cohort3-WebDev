class prom{
    constructor(fn){
        fn(() => {
            this.resolve();
        })
    }

    then(callback){
        this.resolve = callback;
    }
}

function setTimeoutPromisified(){
    return new prom(giveMe);
}

function giveMe(resolve){
    setTimeout(() => {
        console.log("setTimeout: I am done");
        resolve();
    }, 3000);
}

function callback(){
    console.log("Callback: I am done");
}

let p = setTimeoutPromisified();

p.then(callback)