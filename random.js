
// The Random Numer Jenarator-------------------------------------
var num = 2.54888;
var result = Math.floor(num);
var result1 = Math.ceil(num);
var result2 = Math.round(num);
var result3 = Math.random()*10;

// like lodo game.........
var result4 = Math.random()*6;
var result5 = Math.round(result4);
// console.log("Refresh Any Random Number = "+result5);

// 10 ti random number jenaretor program............
for(var i = 1; i <=10; i++){
    var randomNum = Math.random()*6;
    var ranResult = Math.round(randomNum);
    console.log(i+" = "+ranResult);
}

// The time zone-----------------------------------------------
var date = new Date('2022-06-27');
// console.log(date);