//Get the value of message-el element from the HTML
let messageEl = document.getElementById("message-el")
//Get the value of sum-el element from the HTML
// let sumEl = document.getElementById("sum-el")
//Using querySelector on JS
let sumEl = document.querySelector("#sum-el")


//Declare of Card Values
let firstCard = 10
let secondCard = 11
//Add the 2 cards
let sum = firstCard + secondCard
//Determine if player has a BlackJacj
let hasBlackJack = false
//Determine if player is still in the game or out of the game
let isAlive = true
//Log out the sum of the 2 cards
console.log(sum)

//Declare the variable that will contain the message
let message = ""

//function that will execute once button StartGame was click on the page
function startGame(){

if(sum < 21){
    message = ("Do you want to draw a new card?")
}else if(sum === 21){
    message = ("You got BlackJack!")
    hasBlackJack = true
}else{
    message = ("You're out of the game!")
    // 2. Flip its value to false in the appropriate code block 
    isAlive = false
}

//Display the message on the page
messageEl.textContent = message
//Display the sum on the page
sumEl.textContent +=sum
}
