//Get the value of message-el element from the HTML
let messageEl = document.getElementById("message-el")
//Get the value of sum-el element from the HTML
// let sumEl = document.getElementById("sum-el")
//Using querySelector on JS
let sumEl = document.querySelector("#sum-el")
//Get the value of cards-el element from the HTML
let cardsEl = document.getElementById("cards-el")


//Declare of Card Values
let firstCard = 10
let secondCard = 11
// array of cards = order list of items
let cards = [firstCard,secondCard] 
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
    renderGame()
}

//function will execute when it's called on the startGame and newCard functions
function renderGame(){

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
sumEl.textContent = "Sum: " + sum
//Display the cards on the page - removed
// cardsEl.textContent = "Cards: " + firstCard + "  " + secondCard 
//Display the cards on the page using array
cardsEl.textContent = "Cards: " + cards[0] + "  " + cards[1] 
}

//function that will execute once newCard button was click on the page
function newCard(){
    console.log("Drawing a new card")
    let thirdCard = 6
    sum += thirdCard
    console.log(sum)
    renderGame()
}