// let fibo=[0,1];
// for (let i=2; i<= 55; i++){
//     fibo[i]= fibo [i-1]+ fibo[i-2];
// }
// console.log(fibo);

// function fibonacci(n){
//     let fibo= [0,1];
//     for (var i=2; i<=n; i++){
//     fibo[i] = fibo[i-1]+ [i-2];
// }
// return fibo;
// }
// let result= fibonacci(10);
// console.log(result);
function fiboncci(n){
    let fibo = [0,1];
    for (let i=2; i<=n; i++){
        fibo[i]= fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
let result = fiboncci(12);
console.log(result);