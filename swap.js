var a = 10, b = 20, temp;
// console.log("befor swap  a = "+a, "b = "+b);
temp = a;
a = b;
b = temp;
temp;
// console.log("after swap  a = "+a, "b = "+b,"\n");

// Swaping using only veriable..........
var x = 5, y = 7;
// console.log("befor swap  x = "+x, "y = "+y);
x = x+y;
y = x-y;
x = x-y;
// console.log("after swap  x = "+x, "y = "+y, "\n");
// useing kind of array..........
var p = 15, q = 30;
console.log("befor swap  p = "+p, "q = "+q);
[p, q] = [q, p];
console.log("befor swap  p = "+p, "q = "+q);