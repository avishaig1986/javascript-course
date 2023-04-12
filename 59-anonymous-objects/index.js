//  anonymous objects = objects without a name
//                      Not directly references
//                      less syntax, no need for unique names


class Card{
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
}

let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Diamonds");
let card4 = new Card("A", "Clubs");

let cards = [new Card("A", "Hearts"),
             new Card("A", "Spades"),
             new Card("A", "Diamonds"),
             new Card("A", "Clubs")  ]

function displayCards(item) {
    console.log(item.value);
    console.log(item.suit)
}

function myFunction(item, index, arr) {
    console.log(item);
    console.log(index);
    console.log(arr)
  }

console.log(cards[0])

cards.forEach(displayCards)
cards.forEach(myFunction)
cards.forEach(card => console.log(`${card.value} ${card.suit}`))

