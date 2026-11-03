//การฟังชั่นแบบไม่มีการรับ parameter
function wakeUp() {
    console.log("Hey Wake up!");
}

//ฟังชั่นแบบมีการรับ parameter
function sayHello(name) {
    console.log("Hello " + name);
}

//ฟังชั่นแบบมีการรับ parameter หลายตัวแปร
function calArea(width, height) {
    var area = width * height;
    return area;
}

//การเรียกใช้งานฟังชั่น
wakeUp();
sayHello("มอส");
console.log("พื้นที่คือ  " + calArea(5, 10)+"ตรม");

//ฟังชั่นแบบ expression
//เป็นการเก็บฟังชั่นไว้ในตัวแปร

var action = function (a, b) { //ฟังชั่นแบบ anonymous function
    return a * b;
}

var result = action(4, 3);
    
console.log(action(3,5));
console.log(result);