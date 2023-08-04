function filterByCategory(){
    return function(categoryFilter){
        arr=[]
        for(i of products){
            if(i['category']==categoryFilter){
                arr.push(i)
            }
        }
        return arr
    }
}
const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pant", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
]

const clothingProducts = filterByCategory(products)("Clothing")

console.log(clothingProducts)