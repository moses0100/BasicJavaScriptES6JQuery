//join array
const number =[10,20,30,40]
console.log(number.join());
console.log(number.join(','));
console.log(number.join('-'));
console.log(number.join('+'));
console.log(number.join(' '));

//หาผลรวม
console.log(number[0]+number[1]+number[2]+number[3]);

//loop
let result = 0
for(let i =0 ;i< number.length;i++){
    result += number[i]
}
console.log(result);

//Reduce Array
const result_data = number.reduce((sum,number)=>{
    return sum+number
},0)


console.log(result_data);//100

//Concat ของ array เป็นการรวมarray
const myarr1=[5,6,7]
const myarr2=[8,9,10]

//const myresult=myarr1+myarr2
const myresult=myarr1.concat(myarr2)
console.log(myresult)
console.log(myarr1)
console.log(myarr2)

// Push
const mutate = ['red', 'green']
const count = mutate.push('blue')
console.log(mutate);
console.log(count);

// Pop // ลบสมาชิกตัวท้ายของ array
const pop = mutate.pop()
console.log(mutate);
console.log(pop)

// Shift จะเป็นการลบสมาชิกตัวแรกออก
const shift = mutate.shift()
console.log(mutate);
console.log(shift);

// Unshift เพิ่มสมาชิกกลับเข้าไปที่ตัวแรก
const unshift = mutate.unshift('red')
mutate.unshift('yellow')
console.log(mutate);
console.log(unshift);

// Splice // ดึงข้อมูลสมาชิกแบบระบุตำแหน่งที่แน่นอน
const mutate_arr = ['red', 'green', '0', '1', 'blue']
//const spliced = mutate_arr.splice()
//const spliced = mutate_arr.splice(0)//การกำหนดตำแหน่งเริ่ม remove
//const spliced = mutate_arr.splice(1)
//const spliced = mutate_arr.splice(1,1)//ลบตำแหน่งที่ 1 1 ตัว
//const spliced = mutate_arr.splice(2,2)//ลบตำแหน่งที่ 2 2 ตัว
const spliced = mutate_arr.splice(2,2,'white','Pink')


console.log(mutate_arr);

console.log("--------------------");

// Slice
const mutate_arr1 = ['red', 'green', '0', '1', 'blue']
// const sliced = mutate_arr1.slice(1)
// const sliced = mutate_arr1.slice(1,2) // ดึงตั้งแต่ตำแหน่งที่ 1 ถึง 2 แต่ไม่รวม 2 นะ
// ถ้าสั่งว่า slice เข้าไปเฉยๆ ไม่ระบุตำแหน่ง จะเป็นการ copy array
const sliced = mutate_arr1.slice()
console.log(sliced);

// Avoid array Mutation
const fruits = ['banana', 'apple', 'mango']
// หากอยากเพิ่ม strawberry เข้าไปหน้า apple โดยไม่เปลี่ยนแปลงค่าใน fruits เดิม
const newFruit = [
    ...fruits.slice(0, 1),
    'strawberry',
    ...fruits.slice(1)
]

console.log(newFruit);
console.log(fruits);

// เอา apple ออกจาก array ตัวใหม่
const newFruitWithoutApple = [
    ...fruits.slice(0, 1),
    ...fruits.slice(2)
]

console.log(newFruitWithoutApple);

// การวนลูป Array
// For each
const num_arr = ['one', 'two', 'three']
num_arr.forEach(result => {
    console.log(result);
})

console.log("--------------------");

// For of
for (const v of num_arr) {
    if (v === 'two') {
        // break
        continue
    }
    console.log(v);
}
//การค้นหาตำแหน่ง array
const num_arrays=[1,4,8,10,11,12]
//count index = num_arrays.indexOf(10)
const index = num_arrays.indexOf(8)
console.log(index);

//findindex
const found = num_arrays.findIndex(e=>e%4==0)
console.log(found);
