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

let hot = true

hot ? console.log("weather is hot") : console.log("weather is cold")


let subscribed = true
let LoggedIn = true
let str = subscribed && LoggedIn ? 'show the video' : 'hide the video'
console.log(str)

let today = cash >= price && isStoreOpen ? ('give receipt') : ('do not give receipt')
console.log(today)



// LOOPS

