//push adds the value to the array

let cards = [7,4]
cards.push(6)
console.log(cards)

// Push the newMessage to the messages array, and then log out the array
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
//add newMessage to messages array
messages.push(newMessage)
//display messages array
console.log(messages)

//remove last message on the array
messages.pop()
console.log(messages)
