

function isPrime(n){
    var num = 0;
    for(let i = 2; i<n; i++){
        if(n%i == 0){
            return "Not Prime";
        }
    }
    return "Prime";
}
const result = isPrime(7);
console.log(result);
