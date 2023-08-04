class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get getPassword(){
        let returnPassword=""
        for(let i = 0; i < this.password.length; i++){
            returnPassword+="*"
        }
        return returnPassword
    }
    set setPassword(pass){
        try{
            if(/^(?=.*\d)(?=.*[A-Z]).{8,}$/.test(pass)){
                this.password=pass
                console.log("Password Changed")
            } 
            else
                throw Error()
        }
        catch{
            console.log("Password must be at least 8 characters long and contains at least one number and one uppercase letter")
        }
    }
}
const user=new User("Mithun","Password123")
console.log(user.getPassword)
user.setPassword="myPassword"
user.setPassword="Mypassword123"
console.log(user.getPassword)