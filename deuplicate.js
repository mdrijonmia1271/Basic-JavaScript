var num = [3,4,6,7,9,8,3,4,7,8];
var uniqnum = [];
for(var i = 0; i<num.length; i++){
    var element = num[i];
    var index = uniqnum.indexOf(element);
    if(index == -1){
        uniqnum.push(element);
    }
}
// console.log(uniqnum);

// count the number of word........
var speech = "I am Rijon this is my name. but my father call titu";
var count = 0;
for(var i = 0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] !=" "){
        count++;
    }
}
count++;
// console.log(count);
// Reverse a string..................
function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = " hi i am rijon";
var result = reverseString(statement);
console.log(result);