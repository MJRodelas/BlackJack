let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

//.length was added so that the last item will be dynamic
//once new message was added, limit won't need to be changed manually
for ( let i = 0;  i < messages.length;  i += 1 )  {
    
    console.log(messages[i])

}