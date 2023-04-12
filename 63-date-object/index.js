//let date = new Date();
//let date = new Date(2023, 0, 1, 3, 4, 5);
let date = new Date("January 1, 2023 00:00:00");
console.log(date.getDay())

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() +1 ;
    let day = date.getDay();

    return `${month} ${day} ${year}`
}

document.getElementById("dateLabel").innerHTML = formatDate(date)