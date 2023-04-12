let a;
let b;
let c;

document.getElementById("submitButton").onclick = function (){
    a = Number(document.getElementById("aTextBox").value);
    b = Number(document.getElementById("bTextBox").value);

    if (!isNaN(a) || !isNaN(b)){
        c = Math.sqrt(Math.pow(a, 2)+ Math.pow(b, 2));
        document.getElementById("cLabel").innerHTML = "Side C: "+ c;
    }
    else{
        document.getElementById("cLabel").innerHTML = "inputs must be numbers";
    }
}