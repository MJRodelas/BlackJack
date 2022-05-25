// Create two variables, firstCard and secondCard
// Set their values to a random number between 2-11
//Create a variable, sum and set it to the sum of the two cards

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
console.log(sum)

// 1. Create a variable called isAlive and assign it to true

// 2. Flip its value to false in the appropriate code block 

if(sum < 21){
    console.log("Do you want to draw a new card?")
    }else if(sum === 21){
    console.log("You've a BlackJack!")
    hasBlackJack = true
}else{
    console.log("You're out of the game!")
    isAlive = false
}

//CashOut
console.log(hasBlackJack)
// 3. Log it out to check that you're doing it right
console.log(isAlive)
