let number = 123456.789
let per = .01
let temp = 38

const numbersArray = [
    number.toLocaleString("en-US"),
    number.toLocaleString("hi-IN"),
    number.toLocaleString("de-DE")
]

const numberCurrency = [
    number.toLocaleString("en-US", {style: "currency", currency: "USD"}),
    number.toLocaleString("hu-IN", {style: "currency", currency: "INR"}),
    number.toLocaleString("de-DE", {style: "currency", currency: "EUR"}),
    number.toLocaleString("he-IL", {style: "currency", currency: "ILS"}),

]

const percent = [
    per.toLocaleString(undefined, {style: "percent"})
]

const temperature = [
    temp.toLocaleString(undefined, {style: "unit", unit: "celsius"})
]

console.log(numbersArray)
console.log(numberCurrency)
console.log(percent)
console.log(temperature)
