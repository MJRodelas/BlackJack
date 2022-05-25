// Check if the person is elegible for a birthday card from the King! (100)

let age = 101

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if(age < 100){
    console.log("Not elegible")
}else if(age === 100){ 
    //Triple equals detects the data type, if number or string. Triple equals is more strict than the double equals. Always use triple equals
    console.log("Here is your birthday card from the King!")
}else{
    console.log("Not elegible, you have already gotten one") 
}