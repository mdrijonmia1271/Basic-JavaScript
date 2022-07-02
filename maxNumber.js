var a = 40, b = 50, c = 60;
if(a>b && a>c){
    // console.log("The Max is A = "+a);
}
else if(b>a && b>c){
    // console.log("The max is B = "+b);
}
else{
    // console.log("The max is C = "+c)
}
// Use Easy Tachnic find Maximum two values................
var result = Math.max(a,b,c);
// console.log("The Result = "+result);

// find the largest value of array............
var num = [34,56,78,33,99,55,67,12,19,101];
var max = num[0];
for(var i = 0; i<num.length; i++){
    var element = num[i];
    if(element > max){
        max = element;
    }
}
// console.log("lergest value = ",max);

// Total sum of array..............
var num = [34,56,78,33,99,55,67,12,19,101];
var sum = 0;
for(var i = 0; i<num.length; i++){
    var element = num[i];
    sum = sum + element;
}
console.log("Total sum of array = ",sum);
