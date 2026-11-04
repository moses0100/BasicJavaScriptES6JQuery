//Ex1
//Spread
// const arr=[4,5,6]
// const append = [1,2,3,arr]//ยังไม่ต้องการ

//console.log(append);

//Ex2
const arr=[4,5,6]
const append = [1,2,3, ...arr]//spread
console.log(append);


//Ex3
const arr1 = ['a','b','c']
const arr2 = ['d','e','f']
arr1.push(...arr2)
console.log(arr1);

//Ex4
function add(x,y,z){
    return x+y+z
}

const number =[1,2,3]
// const sum = add(1,2,3)
// const sum = add(number)//not working
const sum =add (...number)//spread
console.log(sum);

//Rest Parametor
function howmanyArgs(...args){
    console.log(args.length);
    console.log(args)
}

howmanyArgs()
howmanyArgs(4)
howmanyArgs(4,5,6,7)

//Ex1
function multiply(multiply,...array){
    console.log(array);//10 20 30
    return array.map(e=>multiply* e)
}

const result = multiply (2,10,20,30)
console.log(result);//20 40 60