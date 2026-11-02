//นี้คือการเขียนอธิบายใน JavaScript
// alert("Hello JSSSS");
/*นี้ก็คือการ comment เช่นเดียวกัน
นี้เป็นคำอธิบายเพิ่มเติม
จากส่วนแรก
*/

//คำสั่งแสดงผลข้อความออกไปที่หน้าเว็บ
document.write("Hello JavaScript<br>");
document.write("<b>ยินดีต้อนรับทุกท่าน</b>");
document.write("<h1><font color='red'>ยินดีต้อนรับทุกท่าน</font></h1>");
//การสร้างตัวแปรใน JavaScript
var name = "Tanawat Yadjantuek";
var age = 23;


// //แสดงผลไปที่ console
// console.log(name);
// console.log(age);

// //methods confirmed
// var status = confirm("Are you ok?");

// console.log(status);

// //methods prompt
// var msg = prompt("กรุณาป้อนชื่อของคุณ","ธนวัฒน์"); 
// console.log(msg);

// //Condition Operator
// var age = prompt("ป้อนอายุของคุณ","0");
// var votable = (age >= 18) ? "You can vote" : "Cannot vote";
// console.log(votable);


//Condition if else
    var age = 12 ;
if (age <=10) {
    var x = "childen";
}else if (age <=20) {
    var x = "Young";
}else{
    var x = "Old man";
}
console.log(x);


//ฟังก์ชันดึงวันที่ออกมา
var day = new Date().getDay();
switch (day) {
    case 0:
        console.log("sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("tuesday");
        document.body.style.backgroundColor = "pink";
        break;
    default:   
        console.log("invalid day");
        document.body.style.backgroundColor = "white";
        break;
}

// day1 complete