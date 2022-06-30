
function factorial(fact){
    let num = 1;
    for(var i = 1; i <=fact; i++){
        num = num  * i;

    }
    return fact+" is factorial Number = "+num;
}
let result =  factorial(5);
// console.log(result);

// factorial use while loop..........................
function factorialWhile(factNum){
    let startVlue = 1;
    let i = 1;
    while(i <= factNum){
        startVlue = startVlue * i;
        i++;
    }
    return factNum+"! The factorial Number : "+startVlue;
}
const factResult = factorialWhile(6);
// console.log(factResult);

// factorials use Recursive........................
function recursiveFact(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * recursiveFact(n-1);
    }
}

const factResult1 = recursiveFact(10);
console.log(factResult1);