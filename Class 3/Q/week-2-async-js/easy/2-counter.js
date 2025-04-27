let num = 0;

let content = () => {
    console.clear();
    console.log(num);
    num++;

    setTimeout(content, 1000);
}

content();