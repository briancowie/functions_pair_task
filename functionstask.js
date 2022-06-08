// Create the following functions and test them by logging out their return value.

// MVP

// Part 1

var myNumbers = [1,2,3,4,5,6,7,8]

// 1.a Total the numbers - Create a function that takes in an array of numbers as an argument and calculates the sum of the array's numbers.

function getSumFromArray(arrayOfNumbers){
    var total = 0
    for (var number of arrayOfNumbers) {
        total += number
    }
    return total
}

var arrayOfNumbers = [10, 34, 983, 5, 8]
console.log("The total is:", getSumFromArray(arrayOfNumbers))

// 1.b Find the evens - Create a function that takes in an array of numbers as an argument and returns a new array containing just the even numbers.
function getEvenNumbers (arrayOfNumbers){
    var arrayOfEvenNumbers = []
    for (var number of arrayOfNumbers){
        var remainder = number % 2; 
        if (remainder === 0){
            arrayOfEvenNumbers.push(number)
        }        
    }
    return arrayOfEvenNumbers
}

var arrayOfNumbers = [6, 7, 30, 39, 103]
console.log("The even numbers are:", getEvenNumbers(arrayOfNumbers))

// Part 2

var myBill = [
  {
    meal: 'Green Curry',
    price: 10,
    customer: 'Sally'
  }, {
    meal: 'Sea Bass',
    price: 12,
    customer: 'Upul'
  }, {
    meal: 'Fish and Chips',
    price: 10,
    customer: 'Rita'
  }, {
    meal: 'Stick Toffee Pudding',
    price: 4,
    customer: 'Upul'
  }, {
    meal: 'Apple Pie',
    price: 5,
    customer: 'Sally'
  }
]

// 2.a. Total the bill - Create a function that takes in a bill as an argument and calculates the total cost of the bill.

// function getSumFromArray(arrayOfNumbers){
//     var total = 0
//     for (var number of arrayOfNumbers) {
//         total += number
//     }
//     return total
// }

// var arrayOfNumbers = [10, 34, 983, 5, 8]
// console.log("The total is:", getSumFromArray(arrayOfNumbers))

function billCalculator(myBill){
//
    var cost = 0
    for (item of myBill) {
        cost = cost + item.price
    } 
    return cost
}

console.log("Total cost is:" , billCalculator(myBill))

// 2.b. Find meals by customer name - Create a function that takes in a bill and a 
// customer name as an argument and returns a new array containing all the items for that customer.

function customerItemFinder(name, item)

// 2.c. Using the functions you wrote in part 4 and 5, find the total that Sally spent.


// 2.d. Find average item price - Create a function that takes in bill as an argument and calculates the average price of all the items.

// Extension

// Part 3
// Have a look at the following bodyBuilder object.

var bodyBuilder = {
  strength: 2,
  workOut: (mins) => {
   bodyBuilder.strength = bodyBuilder.strength * mins;
  }
}

// 3.a. Log out the the bodyBuilder's strength - the value should be 2.

// 3.b. Use the workOut function to update the bodyBuilder's strenth.

// 3.c. Create another function on the bodyBuilder called `lazeAbout`, that takes in a number of hours as an argument. Decrease the bodyBuilder's strength by dividing the strength by the number of hours.
