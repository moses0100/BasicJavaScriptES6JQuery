//การสร้าง object
var person = {firstName:"Tanawat",
     lastName:"Yadjantuek",
      age:23,
       gender:"Male",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}

       //การเข้าถึงสมาชิกใน object
       //method 1
       //objectName.propertyName
       console.log(person.firstName);
       //method 2
       //objectName["propertyName"]
       console.log(person.lastName);

    //method 3
    //objectName.methodName()
    console.log(person.fullName());

    //object Nested มีการซ้อนกันมากกว่า 1
    var user = {
        id: "1",
        email: "john@email.com",
        personinfo: {
            name: "John",
            address:{
                line1: "123 Main St",
                line2: "Apt 4B",
                city: "Bangkok",
                zipcode: "10110"
            }
       }
    }

    //การเข้าถึง
    console.log(user.personinfo);
    console.log(user.personinfo.name);
    console.log(user.personinfo.address);
    console.log(user.personinfo.address.city);
