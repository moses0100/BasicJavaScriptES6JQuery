//Synchronous&Asycronous Programming in Javasciprt
// function doA(){
//     setTimeout(function() {
//       console.log("this is 1st message");  
//     }, 2000)
// }
// function doB(){
//     console.log("this is 2nd message");
// }

// //ทดสอบเรียกด้านบน
// doA()
// doB()

//การแก้ปัญหาด้านบนเราจะใช้แบบ Asynchronous
 function doA(callback){
    console.log("loading...........");
    setTimeout(function() {
      console.log("this is 1st message");  
      callback()
    }, 2000)
}
function doB(){
    console.log("this is 2nd message");
}

//เรียกทำงาน
doA(function(){
    doB()
})

console.log("--------------------------");


//ตัวอย่างการจำลอง ajax
function loadNews(cb){
    console.log("Loading............");
    setTimeout(() => {
        cb(
            [
                {id:1,title:'a'},
                {id:2,title:'b'},
                {id:3,title:'c'},
                {id:4,title:'d'},
                {id:5,title:'e'},
                {id:6,title:'f'},
                {id:7,title:'g'},
                {id:8,title:'h'},
                {id:9,title:'i'}
            ]
        )
    }, 2000);
}
//เรียกใช้งาน
loadNews(function(result){
    console.log(result);
    console.log("Load Data complete");
})

