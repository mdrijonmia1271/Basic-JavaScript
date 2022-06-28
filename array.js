var friendsAge = [23,20,33,24,56,86];
var TeaLine = ['Rijon', 'Mohosin','titu','milon', 'mithu','mukaddem'];
var Rojib = friendsAge[1];
friendsAge[2] = 19; 

var position = friendsAge.indexOf(56);
friendsAge.push(10);
friendsAge.push(11);
// friendsAge.pop();
// friendsAge.shift();
friendsAge.unshift(7);
// console.log(friendsAge);
// TeaLine.shift();
TeaLine.unshift('momin');
var part = TeaLine.slice(2, 5);
console.log(part);