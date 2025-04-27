let str = "hello     world    my    name   is       raman";

let result = str.trim().split(/\s+/).join(" ");

console.log(result);