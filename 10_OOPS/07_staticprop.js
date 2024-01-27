class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  //static doesn't allow access this method, not even the child & inherit class
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  //error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());  //error