//import 1
import{sayHi,sayBye}from'./say.js'

//import 2
import * as say from './say.js'

//import 3
import { sayHi as sh, sayBye as sb } from './say.js'

sayHi('MOs')
sayBye('MOs')

say.sayHi('mos')
say.sayBye('mos')

sh('mos')
sb('mos')

//import Class ที่มีdefault
import User from './user.js'

//สร้าง object
const obj = new User('mos')
console.log(obj.name);
obj.sayHi()