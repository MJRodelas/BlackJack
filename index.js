//Get the value of message-el element from the HTML
let messageEl = document.getElementById("message-el")
//Get the value of sum-el element from the HTML
// let sumEl = document.getElementById("sum-el")
//Using querySelector on JS
let sumEl = document.querySelector("#sum-el")
//Get the value of cards-el element from the HTML
let cardsEl = document.getElementById("cards-el")


// array of cards = order list of items
let cards = [] 
//Declare sum as 0 when game has not yet started
let sum = 0
//Determine if player has a BlackJack
let hasBlackJack = false
//Determine if player is still in the game or out of the game
let isAlive = false
//Log out the sum of the 2 cards to check on the console if it is blank
console.log(sum)
console.log(cards)
//Declare the variable that will contain the message
let message = ""

let player = {
     name : "MJ Rodelas",
     chips : 5000
}


//Get the value of player-el element from the HTML
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": ₱ " + player.chips


function getRamdonCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    //Math.random - generates random number from 0.000 to 0.999
    //Math.floor - removes decimals
    //Multiply by 13 + Math.floor - generate random number from  0 to 12
    //Plus 1 - generate random number from  1 to 13

//if 1 = 11 and 11 to 13 = 10    
    if(randomNumber >10){
        return 10
    }
    else if(randomNumber === 1){
        return  11 
    }
    else{
       return randomNumber  // needed to return the randomNumber generated if the statements above is false
    
    }
     

}

//function that will execute once button StartGame was click on the page
function startGame(){
    //Change isAlive to true once startGame was clicked
       isAlive = true
   //Get random numbers for the first and second card
       let firstCard = getRamdonCard()
       let secondCard = getRamdonCard()
       cards = [firstCard,secondCard] //Note: Error encountered - if you add let on the beginning of this line, the firstCard and secondCard will not appear on the page
   //Add the 2 cards
       sum = firstCard + secondCard
   //call render function    
       renderGame()
   }




//function will execute when it's called on the startGame and newCard functions
function renderGame(){
//Display the cards on the page using array
cardsEl.textContent = "Cards: " 
//Display the cards on the page using array and for loop
    for ( let i = 0;  i < cards.length;  i++ )  {
        
        cardsEl.textContent += cards[i] + " "

    }
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

}

//function that will execute once newCard button was click on the page
function newCard(){

    // console.log("Drawing a new card")

    //cards.length - added so that player can only have maximum of 4 cards
if (isAlive === true && hasBlackJack === false && 
    cards.length < 4){


    //Get random numbers for the third card
    let thirdCard = getRamdonCard()
    // adding the thirdcard on the sum
    sum += thirdCard
    //adding the thirdcard to the cards array
    cards.push(thirdCard)
    //display sum on the page
    renderGame()

}

}