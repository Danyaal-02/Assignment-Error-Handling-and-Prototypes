class Employee{
    constructor(name,position,salary){
        this.name=name
        this.position=position
        this.salary=salary
    }
    getSalary(){
        return this.salary
    }
}
const obj=new Employee("Subh", "HR", 80000)
console.log(obj.getSalary())