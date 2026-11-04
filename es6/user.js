export default class User{ //มีการเติมคำว่า defailt ไป หลัง exprot
    constructor(name){
        this.name=name
    }
    sayHi(){
        console.log('Hi'+this.name);
    }
}