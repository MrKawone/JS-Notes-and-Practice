// Data Types and Variables

console.log ('Hello World'[10])
let fullName = 'Kawone Hewlin'
let isRaining = true // Boolean Data Type
let temperature = 20 // number data type
temperature = temperature + 2 //can change the data in in the variable temperature
console.log(temperature) //teste the variable
let planet = 'Earth' //String datat Type
let trash = null // Null data type

// coverting temperatures 
// celcius tp fahrenheit formula
// f = c x 1.8 +32 

let celcius = 10;
let fahrenheit = 50
console.log(10 * 1.8 + 32)
// Can also be done another way 
let fahrenheit2 = celcius * 1.8 + 32
console.log(fahrenheit2)

// "==" checks just the values 
let bools = '1' == 1  
console.log(bools)

// "===" checks the values and the type of  data 
let bool = '1'=== 1
console.log(bool)

// Conditionals

let subscribe = false
let Loggedout = true
// If subscribe equals true you will be able to see 'show the video' in the console if you change subscribe above to equal false it will 
// no longer meet the conditions and 'show the video' will no longer show 
if (subscribe === true) [
    console.log('show the video')
]

else if (Loggedout === true) {
    console.log('tell the user to upgrade their subscription')
}
// else statement will only run if the 'if' is false
else {
    console.log('tell user to log into account')
}
//shows how the order of the if else statements works and is important
// let cash = 50
// let price = 400
// let change = cash - price
// let balance = price - cash
// if (cash > price) {
//     console.log(`you paid extra, here's ${change} dollars change`)
// }
// else if (cash === price){
//     console.log("You paid the exact amount!!! Have a nice day!")
// }

// else {
//     console.log(`not enough money, sorry you still owe ${balance} dollars`)
// }


// logical Operations

let cash = 50
let price = 40
let isStoreOpen = true
//with the && it will make sure both sides are true in order to run the 'if' line of code below
// with the || it will make sure that at least one side of the comparison is true it will run the "if" code below
if (cash >= price || isStoreOpen === true) {
    console.log("print receipt")
}

// ternary Operations

// let hot = true

// hot ? console.log("weather is hot") : console.log("weather is cold")


// let subscribed = true
// let LoggedIn = true
// let str = subscribed && LoggedIn ? 'show the video' : 'hide the video'
// console.log(str)

// let today = cash >= price && isStoreOpen ? ('give receipt') : ('do not give receipt')
// console.log(today)



// LOOPS
// counting to 100 

let count = 1;
// console.log(count)
// count = count + 1;
// console.log(count)

// DRY = Do Not Repeat Yourself


// as long as the condition "()" of the While loop is true it will always run what is in the block of code 
// if the condition is true and there is no code your webpage will crash meaning keep it flase until you are ready to use it 

// this is WHILE LOOP WORKING TO COUNT TO 100
// while (count <= 100) { 
// console.log(count)
// count = count + 1
// }


// // This is For Loop counting to 100
// //adding ++ means plus 1
// for (let i = 0; i < 101; i++) {
// console.log(i)
// }

// famous FizzBuzz interview Question
// Write a for loop the loops 1- 20
// if the numbers is divisible by 3 print frontend
// if the number is divisble by 5 print simplified
// if the number is divisble by both 3 and 5 print frontend simplified

// My answer
// for (let i = 1; i < 21; i++) {
//  console.log(i)
// let frontend = i % 3 === 0
// let simplified = i % 5 === 0
// let fontendSimplified = i % 3 === 0 && i % 5 === 0
// }
 

// correct answer
// for (let i =1; i <= 20; i++) {
// if (i % 3 === 0 && i % 5 === 0){
//     console.log (`${i} -> frontend Simplified`)
// }
// else if ( i % 3 === 0) {
// console.log (`${i} -> Frontend`)
// }
// else if (i % 5 === 0 ) {
//     console.log (`${i} -> Simplified`)
// }
// else {
//     console.log(`${i} -> ${i}`)
// }
// }


// pRINT PUT EVERY CHARACTER FROM THE STRING
//Frontend Simplified 

const str = "Frontend Simplified"
// Used CONST because it wont be changing

for (let i = 0; i <= str.length; i++) {
console.log(str[i])
}

// FUNCTIONS
// Remember DRY - Don't Repeat Yourself
// console.log("Welcome to FES, Zen")
// console.log("Welcome to FES, Mitri")
// console.log("Welcome to FES, David")

// Function Definition
// name is the parameter 
function welcomepersonToFES(name) {
    // console.log("Welcome to FES, David")
    // console.log(name)
    // Correct way to code the function
console.log(`Welcome to FES, ${name}!`)
};

// Call the function
// Name the parameter will be defined in th efunction call 
welcomepersonToFES("David");
welcomepersonToFES("Kawone");
welcomepersonToFES("DaSha");

// return ends and prints the function
function sumOfTwoNumbers(num1, num2) {
return num1+num2
}

console.log(sumOfTwoNumbers(10, 794))

// Convert Celcius to Fahrenheit with Functions

// function convertCelToFahr(c) {
//     return c * 1.8 + 32
// }

// Second way to define a Function

const convertCelToFahr = (c) => {
    return c*1.8+32
}

console.log(convertCelToFahr(10,))



// ARRAYS

// let item1 = 10
// let item2 = 20
// let item3 = 50
// let item4 = 75
// let item5 = 60
// Here is the syntax to write an ARRAY 
// square brackets make it an ARRAY
let arr = [10, 20, 50, 75, 60]
// ARRAYS are counted like STRINGS start at 0 and got on and an easy way to  see the length of the ARRAY is the same syntax for STRING (arr.length-1)
// first element in ARRAY 
console.log(arr[0])
// last element in ARRAY
console.log(arr[arr.length-1])

// Add elements to arrays by using arr  .push()

arr.push(5000)

arr.filter((element) => {
    console.log(element)
})


console.log(arr)