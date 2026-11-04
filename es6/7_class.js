//ตัวอย่างการสร้างคลาส
class Person{

    //สร้างconstructor
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log('Hi My name is ' + this.name)
    }
    get gender(){
        return this._gender
    }
    set gender(g){
        this._gender=g
    }

}

//สร้างobject
const p= new Person('Tanawat')
console.log(p.name);
p.sayHi()

p.gender = "Male"
console.log(p.gender);