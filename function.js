function double(num){
    var result = num * 2;
    return result;

}
var first = double(5);
var second = double(10);
var total = first + second;
// console.log('This is total number = '+total);
function add(num1, num2){
    var result1 = num1 + num2;
    // console.log(result1);
}
add(10, 5);
// inchi to feet converted ----------------------------------------------
function inchToFeet(inch){
    var Feet = inch / 12;
    return Feet;
}
var result = inchToFeet(36);
// console.log(result);
// name change.....................
var name = "Rijon";
if(name.length > 4){
    name = "Mohosin";
}
// console.log(name);

// All English Tenses Structure and tenses name------------------------------------------------
function allSimple(){
    console.log("Simple Tenses:- ");
    console.log("Present Simple :  Sub + V1 + Obj + Ext.");
    console.log("Past Simple    :  Sub + V2 + Obj + Ext.");
    console.log("Future Simple  :  Sub + Will + V1 + Obj + Ext.\n");
}
function allContinuous(){
    console.log("Continuous Tenses :- ");
    console.log("Present Continuous  : Sub + am/is/are + V1-ing + Obj + Ext.");
    console.log("Past Continuous     : Sub + was/ware + V-ing. ");
    console.log("Future Continuous   : Sub + Will be + V-ing + Obj. \n");
}
function allPerfect(){
    console.log("Perfect Tenses:- ");
    console.log("Present Perfect  : Sub + have/has + V3. ");
    console.log("Past Perfect     : Sub + had + V3 + Ext. ");
    console.log("Future Perfect   : Sub + Will have + V3 + Ext.\n ");
}
function allPerfectContinuous(){
    console.log("Perfect Continuous Tenses:-");
    console.log("Present Perfect Continuous  : Sub + have been/has bee + V-ing + Obj + (for/since) + Time");
    console.log("Past Perfect Continuous     : Sub + had been/has beeen + V-ing + Obj + (for/since) + Time");
}


allSimple();
allContinuous();
allPerfect();
allPerfectContinuous();     