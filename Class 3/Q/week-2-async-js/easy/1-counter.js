let num = 0;

let content = () => {
    console.clear();
    console.log(num);
    num++;
}

setInterval(content, 1000);