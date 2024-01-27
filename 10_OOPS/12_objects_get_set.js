const User = {
    _email: 'h@hc.com',
    _password: "abc",    //underscore makes the property as private

    get email(){  
        return this._email.toUpperCase()   //get takes email from memory and simply returning here
    },

    set email(value){
        this._email = value   //set is taking value from memory and storing it into _email
    }
}

const tea = Object.create(User)
console.log(tea.email);