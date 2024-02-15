//Player object with name and chips
let player = {
     name: "Per",
    chips: 145
}

//array to store cards,sum of cards,game status variables and message display
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


//DOM elements for displaying messages,sum,cards, and player infomation
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": R" + player.chips
console.log(cards)

//Fuctions to get a rendom card value between 1 and 11
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

//Funtion to start the game,initialize cards,sum and render the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


//Function to display cards,sum and game message
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

//Improved logic for message assigment    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//Function to draw a new card,update the game,and check game status
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}



//The code was not much of a comlex my struggle was to follow the tutorials from videos becouse he was going off game sometimes and his code was changing but I managed to put together what's needed as expected