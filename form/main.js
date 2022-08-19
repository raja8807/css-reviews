class NewUser{
    constructor(){
        this.name = "raja"
    }
}

class Student extends NewUser{
    constructor(){
        super()
        this.type = "student"
    }
}

let user =new Student();
console.log(user);