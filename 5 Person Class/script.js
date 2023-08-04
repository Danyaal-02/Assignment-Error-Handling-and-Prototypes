class Person{
    constructor(name,age=0){
        this.name=name
        this.age=age
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
const obj=new Person("Mithun",20)
const obj1=new Person()
console.log(obj.getDetails())
console.log(obj1.getDetails())