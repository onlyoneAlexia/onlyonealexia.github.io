//generates the secret number
const secret = Math.floor(Math.random()*100) +1
//console.log(secret)


//create initial attempts
let attempts = 5;


//function to play the game
 function playGame(){

    //get the user input from the html
    let userInput = document.getElementById("guess").value

    //convert the user input from string to a number data type
    userInput = parseInt(userInput)

    //checks is the number is within the 1 - 100 range
    if(userInput > 100 || userInput < 1){
        alert("Please enter a number between 1 and 100")
        return
    }

    //reduce the attempts everytime the game is played
    attempts -=1

    //error when the attempts are exhausted
    if(attempts <= 0){
        alert(`You have exhausted your attempts. The secret number is ${secret}.  Refresh the page to restart the game`)
        attempts = 0
        document.getElementById("attempts").innerHTML=`${attempts}`
        return
    }

    //alert when the user guesses correctly
    if(userInput === secret){
        alert(`You guessed correctly, the number is ${secret}`)
    }

    //alert then the user guesses wrongly but his guess is greater than the secret
    else if(userInput > secret){
        alert(`you guessed wrongly, Here's a tip: the secret number is less than ${userInput}`)
    }


    //alert then the user guesses wrongly but his guess is less than the secret
    else if(userInput < secret){
        alert(`you guessed wrongly, Here's a tip: the secret number is greater than ${userInput}`)
    }

    //alert when the input is invalid
    else{
        alert("Invalid input")
    }

    document.getElementById("attempts").innerHTML=`${attempts}`
 }
