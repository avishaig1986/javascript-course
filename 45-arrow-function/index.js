

/*
const percent = function (x, y){
    return x /y * 100;
}
*/

const percent =  (x, y) => x /y * 100;

let grades = [100, 50 , 60 , 70 , 30]
/*grades.sort(descending)*/
grades.sort((x,y) => y-x)
grades.forEach((element) => console.log(element))
/*
function descending (x,y){
    return y-x;
}
*/


console.log(`${percent(75,100)}%`)

function print(element) {
    console.log(element)
}