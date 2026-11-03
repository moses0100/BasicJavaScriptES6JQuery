//รับค่า input จาก form
function submitForm(){
var fullname=document.myform.fullname.value;
var address=document.myform.address.value;
console.log(fullname);
console.log(address);

var result=document.getElementById("result").innerHTML="ชื่อ: "+fullname+"<br>ที่อยู่: "+address;
}
