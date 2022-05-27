let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

console.log(largeCountries)
largeCountries.shift() // removes element at the beginning of the array
largeCountries.unshift("China") //inserting element at the beginning of the array
largeCountries.pop() // removes element at the end of the array
largeCountries.push("Pakistan") //inserting element at the end of the array
console.log(largeCountries)
