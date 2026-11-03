//basic Arrays
var name = ["John", "Mary", "Bob", "Alice"];

var fruits = new Array("Apple", "Banana", "Orange", "Grapes");
//ex.
//console.log(typeof (name));
//console.log(typeof (window.name));// is string

//แสดงสมาชิกใน ออกมา
//console.log(name)
//เช็คชนิดของตัวแปร
//console.log(typeof (name));

var firstName = ['John', 'Mary', 'Bob', 'Alice'];
console.log(firstName[0]); // John
console.log(firstName[1],firstName[3]); 

//เปลี่ยนค่าสมาชิก
firstName[1] = "Jany";
console.log(firstName); 

//เพิ่มสมาชิกใหม่
firstName[4] = "Johnny";
console.log(firstName);
console.log(fruits);

//การอ่านสมาชิกใน Array
for (var i = 0;firstName[i];i++  ){
    console.log(firstName[i]);
}

//การรวม loop ด้วยฟังชั่น foreach
fruits.forEach(myFruits);

function myFruits(value){
    console.log(value);
}