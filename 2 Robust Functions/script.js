function getPerson(person) {
    try {
        if (typeof person == "object" && isNaN(person.name) && !isNaN(person.age))
            return `Name: ${person.name}, Age: ${person.age}`
        else
            throw Error()
    } 
    catch {
        return "Invalid Parameter Type"
    }
}

console.log(getPerson({ name: "Mithun", age: 20 }))
console.log(getPerson({ name: "Mithun"}))