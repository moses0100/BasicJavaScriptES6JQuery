const array= [1,2,3]
//----------------[2,4,6]
//หรือเรียก mutate array
// for(let i =0;i<array.length;i++){
//     array[i]=array[i]*2
// }
// console.log(array);

//วิธีแก้
const result=[]
// for(let i =0;i<array.length;i++){
//     const a =array[i]*2
//     result.push(a)
// }

array.forEach(e => {
    const a= e*2
    result.push(a)
});

//ปัญหา side effect
console.log(result);
console.log(array);

console.log("-------------------------------");

//ลองมาใช้ array map
// const result_map=array.map(result=> result*2)
//อาจจะแยกฟังชั่น
const multiplebytwo = result=> result *2
const multiplebyten = result=> result *10
console.log(array.map(multiplebytwo).map(multiplebyten));
// console.log(array.map(result=>result*2));
// console.log(result_map);
console.log(array);

//ตัวอย่างการใช้ array map
const pet=[
    {name:'Bob'},
    {name:'Mano'}
]
console.log("------------------");
const result_data=pet.map(e=>e.name)
console.log(result_data);

//ตัวอย่างเพิ่มเติม
const fruits=['banana','apple','mango']
// [
//     'Day1,eat banana'
//     'Day2,eat apple'
//     'Day3,eat mango'
// ]
console.log("---------------");
const result_fruit = fruits.map((e,i,d)=>{
    return `Day ${i+1} eat ${e} ของเดิม${d}`
})
console.log(result_fruit);