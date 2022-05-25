// Create two variables, firstCard and secondCard
// Set their values to a random number between 2-11
//Create a variable, sum and set it to the sum of the two cards

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true
console.log(sum)

// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out


if(sum < 21){
    message = ("Do you want to draw a new card?")
    }else if(sum === 21){
    message = ("You've a BlackJack!")
    hasBlackJack = true
}else{
    message = ("You're out of the game!")
    // 2. Flip its value to false in the appropriate code block 
    isAlive = false
}

//CashOut
console.log(hasBlackJack)
// 3. Log it out to check that you're doing it right
console.log(isAlive)
// 3. Log message out!
console.log(message)