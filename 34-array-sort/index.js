let grades = [100, 50 , 60, 90, 90, 80 , 20];

grades = grades.sort(descendingSort)

grades.forEach(print)
grades = grades.sort(ascendingSort)
grades.forEach(print)
function descendingSort (x,y){
    return x - y;
}
function ascendingSort (x,y){
    return y - x;
}

function print(element){
    console.log(element);
}