
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

// add a pair
store.set("hat", 40);
store.forEach((value, key) => console.log(`${key} $${value}`))

// remove a pair
store.delete("hat");
store.forEach((value, key) => console.log(`${key} $${value}`))

// check if object exists
console.log(store.has("socks"))

// check map size
console.log(store.size)

let shoppingCart = 0

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");

console.log(shoppingCart)


store.forEach((value, key) => console.log(`${key} $${value}`))