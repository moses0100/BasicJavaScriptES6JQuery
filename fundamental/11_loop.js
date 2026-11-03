//for loop
var num;

for (num = 1; num <= 10; num++) {
    if(num>5){
        console.log("Middle");
        break; //ออก จาก loop
        //continue; 
    }
    console.log(num);
}

//while loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
/*
//while loop infinite loop
while (true) {
    console.log(i);
    i++;
}
    */

var a = 0;
while (a <= 10) {
    console.log("*".repeat(a));
    a++;
}
var j=10;
while (j) {
    console.log("*".repeat(j));
    j--;
}


