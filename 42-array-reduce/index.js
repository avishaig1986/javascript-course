let prices = [10, 5, 15, 20, 35, 10];

let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`)

function checkOut(total, element){
    return total + element;
}


