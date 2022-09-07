userInput = "Rock"
userInput = userInput.toLowerCase();
const getUserChoice =(userInput) => {
    if (userInput == "scissor" || userInput == "paper"|| userInput == "rock"){
        userchoice = userInput
    console.log("user choice is",userchoice)}
    else {
        console.log("errror select any one")
    }
    } 
getUserChoice(userInput);

compchoice = Array("rock", "paper", "scissor");
compchoice = compchoice[Math.floor(Math.random()* compchoice.length)]
console.log("computeers choice is",compchoice)

if (compchoice == userchoice){
    console.log("draw")
}
else if (compchoice == "rock"){
    if (userchoice == "paper"){
        console.log("user wins")
    }
    else if (userchoice == "scissor"){
        console.log("computer wins")
    }
}
else if (compchoice == "paper"){
    if (userchoice == "scissor"){
        console.log("user wins")
    }
    else if (userchoice == "rock"){
        console.log("computer wins")
    }

}
else if (compchoice == "scissor"){
    if (userchoice == "rock"){
        console.log("user wins")
    }
    else if (userchoice == "paper"){
        console.log("computer wins")
    }

}



