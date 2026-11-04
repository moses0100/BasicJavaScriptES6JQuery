//ES 5
function sayHi(name){
    var name = name || 'Chai'
    console.log("Hi" + name);
}

sayHi()
sayHi('Tanawat')

//ES 6
function sayHello(name='Tanawat'){
    console.log("Hi"+name)
}

sayHello()
sayHello('DDD')