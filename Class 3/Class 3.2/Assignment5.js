function setTimeoutPromisified(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}

setTimeoutPromisified(1000).then(() => {
    console.log("hi");
});

setTimeoutPromisified(3000).then(() => {
    console.log("hello");
});

setTimeoutPromisified(5000).then(() => {
    console.log("hello there");
});