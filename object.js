var student = { id:1, Phone:'01752501271', name:'Rijon'};
var student1 = { id:2, Phone:01972501271, name:'Mohosin'};

var PhoneNo = student.Phone;
var Phone1 = student["Phone"];
var Phone2 = "Phone";
var Phone3 = student[Phone2];

// Update Phone Number
student.Phone = '0168277388483';
student["name"] = 'Titu';
student[Phone2]= '014009388498';

console.log(student);
console.log(student1);