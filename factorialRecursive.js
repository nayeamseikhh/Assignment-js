// for (let i=10; i>=1; i--){
//     console.log(i);
// }

// let i=10;
// while (i>=1){
//     i--;
// }
// console.log(i);

function factorial (n){
    if (n==0){
        return 1;
    }
    else {
        return n * factorial (n-1);
    }
}
let results = factorial(10);
// console.log(results);

function factorial (n){
    if (n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
let result = factorial(10);
console.log(result, results);
