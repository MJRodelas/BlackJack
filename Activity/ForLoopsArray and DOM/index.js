let sentence = ["Hello ", "my ", "name ", "is ", "Mark Jayson Rodelas"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for ( let i = 0;  i < sentence.length;  i += 1 )  {
    
    greetingEl.textContent += sentence[i] + " "

}