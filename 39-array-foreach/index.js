
let students = ["spogbob", "patrick", "squidward"];

students.forEach(cpitalize);
students.forEach(print)

function cpitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element, index, array){
    console.log(element)
}