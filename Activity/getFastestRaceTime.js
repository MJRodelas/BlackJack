let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d - used for selecting multiple lines to edit
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
function getTotalRaceTime(){
   return  player1Time + player2Time
}

// Call/invoke the function and store the returned value in a new variable
let totalTime = getTotalRaceTime()

// Finally, log the variable out
console.log(totalTime)