class Car{
    constructor(comapany,model,year){
        this.comapany=comapany
        this.model=model
        this.year=year
    }
    getDescription(){
        return `This is a ${this.year} ${this.comapany} ${this.model}`
    }
}
const obj=new Car("Skoda", "Rapid", 2022)
console.log(obj.getDescription())