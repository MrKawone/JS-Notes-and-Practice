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
// If subscribe equals true you will be able to see 'show the video' in the console if you change subscribe above to equal false it will 
// no longer meet the conditions and 'show the video' will no longer show 
if (subscribe === true) [
    console.log('show the video')
]

else {
    console.log('tell user to log into account')
}