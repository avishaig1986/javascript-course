let cardsArray = ["A","1","2", "3","4","5","6","7","8","9","10","J","Q","K"]


shuffleCards(cardsArray)

cardsArray.forEach(card => console.log(card));

function shuffleCards(cards){

    let currentCardIndex = cards.length

    while( currentCardIndex != 0){
        
        randomNumber = Math.floor(Math.random() * currentCardIndex)
        currentCardIndex--

        currentCard = cards[currentCardIndex]
        cards[currentCardIndex] = cards[randomNumber]
        cards[randomNumber] = currentCard

    }
    console.log(cards)
}

