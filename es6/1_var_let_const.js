//ปัญหาของการใช้ var
// var name = "John";
// // {
// //     var name = "johny";
// //     console.log(name); // Output: johny
// // }

// function a() {
//     var name = "Jany";
//     console.log(name); // Output: Jany
// }
// console.warn(name); // Output: John
// //ปัญหาอื่นๆ ของการใช้ var
// var messages = ['Hello','Javascript','es2015'];
// for(var i=0;i<=messages.length;i++){
//     console.warn(i);

//     setTimeout(function(){
//         console.warn(i);
//         console.warn(messages(i))
//     },1000)
// } 

//ตัวอย่างการใช้ let
//var fullname;
//var fullname;
//console.log(fullname);

//let fullname;
//let fullname;
//console.log(fullname);

// let name = "john"
// {
//     let name = "jany"
//     console.log(name);
// }
// //name = "joey"
// console.log(name);

// let messages = ['Hello','Javascript','es2015'];
// for(let i=0;i<=messages.length;i++){
//     console.warn(i);

//     setTimeout(function(){
//         console.warn(i);
//         console.warn(messages(i))
//     },1000)
// } 


//ตัวอย่างการใช้ const
// const firstname
// console.log(firstname);

// const firstname = "Tanawat"
// //ลองเปลี่ยนค่า
// firstname = "TOPO"
// console.log(firstname);

const person={}
person.name="Tanawat"
person.email="Tanawat@gmail.com"
person.name="sssss"
person.email="GG@gmail.com"
console.log(person);