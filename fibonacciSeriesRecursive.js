function fibonacci(n){
    if (n == 0){
        return [0]
    }
    else if (n==1){
        return [0, 1];
    }
    else{
        // calculate array n th element
        let fibo = fibonacci(n-1);
        let nextelement = fibo [n-1] + fibo [n-2];
        fibo.push(nextelement);
        return fibo;
    }
}
let result = fibonacci (50);
console.log(result);