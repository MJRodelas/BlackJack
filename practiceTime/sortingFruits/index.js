//array of fruits
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
//get the appleshelf on the html page to be use on displaying the result later
let appleShelf = document.getElementById("apple-shelf")
//get the orangeshelf on the html page to be use on displaying the result later
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

//creating a function
function sortFruit(){
//using for loop to run check all elements on the array    
for ( let i = 0;  i < fruit.length;  i++ )  {
    //display current fruit on the console for troubleshooting
    console.log (fruit[i])
    //add index number on fruit to check the current fruit
    //check if current fruit is an apple    
    if (fruit[i] === "🍎"){
        //display apples to the apples shelf on the page   
        appleShelf.textContent += "🍎"
    //check if current fruit is an orange    
    }else if(fruit[i] === "🍊") {
        //display orange to the oranges shelf on the page        
        orangeShelf.textContent += "🍊"
    }
}
}
//execute the function
sortFruit()
