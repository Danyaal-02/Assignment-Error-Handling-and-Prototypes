function numberChecker(arr) {
    return function(number) {
      return arr.includes(number)
    }
  }
  
const numbers = [1, 2, 3, 4, 5]
const checkNumber = numberChecker(numbers)

console.log(checkNumber(3))
console.log(checkNumber(6))
  