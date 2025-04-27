function setTimeoutPromisified(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");

    await setTimeoutPromisified(3000);
    console.log("hello");

    await setTimeoutPromisified(5000);
    console.log("hello there");
}

solve();