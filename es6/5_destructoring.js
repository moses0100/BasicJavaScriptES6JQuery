//ES5
var scroes = [55,65,82]
var s1 = scroes[0]
var s2 = scroes[1]
console.log(s1,s2);

//ES6 Destructoring
const [s1,,s3]=scroes
console.log(s1,s3);

//Return object
function createUser(){
    return{name:'Tanawat',age:'23'}
}

const {k1:name,k2:age}= createUser()
console.log(name,age);