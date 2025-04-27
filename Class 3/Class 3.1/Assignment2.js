function sumN(n){
    let ans = 0;

    for(let i = 1; i <= n; i++){
        ans += i;
    }

    return ans;
}

let ans = sumN(5);
console.log(ans); 