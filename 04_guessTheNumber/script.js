var randomNumber = parseInt(Math.random() * 100 + 1)
console.log(`randomNumber : ${randomNumber}`);      //+++++++++++++++++++++++++

let submit = document.querySelector("#subt")
let userInput = document.querySelector("#guessField")
let remaining = document.querySelector(".lastResult")
let guessSlot = document.querySelector(".guesses")
let lowOrHi = document.querySelector(".lowOrHi")
let result = document.querySelector(".resultPeras")




let p = document.createElement("p")

let prevGuess = []
let numGuess = 1 

let playGame = true


if(playGame){
   submit.addEventListener("click", function (e) {
    e.preventDefault()
    let guess = parseInt(userInput.value)
    console.log(`value of guess : ${guess}`); //+++++++++++++++++++++++++++++++++
    validateGuess(guess)
   })
}


function validateGuess(guess){
    
    if(guess < 1 || guess > 100 || isNaN(guess)){ 
        alert("please enter the valid number: 1 to 100")
    }
    else {
       prevGuess.push(guess)
       console.log(prevGuess); // =+++++++++++++++++++++++++++++++
       if (numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game Over, Random Number was: ${randomNumber}`)
        endGame()
       }
       else{
        displayGuess(guess)
        matchGuess(guess)
       }
    }

}


function matchGuess(guess){
    if(guess === randomNumber){
        displayMessage(`right guess.. YOU WON, Random Number was: ${randomNumber}`)
        endGame()
    }
    else {

        displayMessage('wrong guess')   
        setTimeout( function () {
            displayMessage('')
        }, 2000)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++
    if(numGuess === 12){
       remaining.innerHTML = `no more chances`
    }
    else { 
        remaining.innerHTML = `${11 - numGuess}`
    }
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    result.appendChild(p)
    playGame = false
    newGame()
}

function newGame (){
   const newGameBtn = document.querySelector('#newGame')
   newGameBtn.addEventListener("click", function (e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    console.log(`new randomNumber : ${randomNumber}`); //+++++++++++++++++++++
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    let newGameBtn = document.querySelector("#newGame")
    newGameBtn.remove()
    displayMessage('')
   
    playGame = true
   

   })
}