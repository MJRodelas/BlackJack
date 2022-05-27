
let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function startGame(){
    //Math.floor - removes decimals
    //Math.random - generates random number from 0.000 to 0.999
    let randomNumber = Math.floor(Math.random() * 3)
    //generates the chosen random item on the array
    return hands[randomNumber]
}
// displays the result
console.log (startGame())