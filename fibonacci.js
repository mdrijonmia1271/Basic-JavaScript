
function fibo(n){
    let fibo = [0, 1];
for(let i = 2; i <=n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    
}
return fibo;
}
const fiboResult = fibo(10);
// console.log(fiboResult);

// Use Recurtion fibonacci series........................................
function fiboRecursive(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fiboRecursive(n-1) + fiboRecursive(n-2);
    }
}
let result = fiboRecursive(12);
// console.log(result);

// fibonacci seriese use recursive Element .............................
function fiboRecurtionElement(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0, 1];
    }
    else{
        // calculate arry nth Element
        let fiboElement = fiboRecurtionElement(n-1);
        let nextElement = fiboElement[n-1] + fiboElement[n-2];
        fiboElement.push(nextElement);
        return fiboElement;
    }
}
 const fiboRecResult = fiboRecurtionElement(12);
 console.log(fiboRecResult);
