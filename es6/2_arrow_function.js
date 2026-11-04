//ES5
var greet = function(name,message){
    return message + name
}

console.log(greet('Tanawat','Hello'))

//ES6
var arrowGreet = (name,message) =>{
    return message + name
}

//ลดรูปกรณีการ return เพียงอย่างเดียว
var arrowGreet = (name,message) =>message + name
console.log(arrowGreet('Tanawat','Hello'));


//ลดรูปต่อไปได้อีก ถ้าฟังชั่น รับ 1 parameter
var arrowGreet = message => message
console.log(arrowGreet('Hellow Every body'))

//ตัวอย่าง
var square = x => x*x
console.log(square(3))
