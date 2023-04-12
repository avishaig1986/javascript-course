let item = "cryptocurrency";
let price = 420;

let timer1 = setTimeout(firstMessage, 3000)
let timer2 = setTimeout(secondMessage, 6000)
let timer3 = setTimeout(thirdMessage, 9000)

function firstMessage(){
    alert(`annoying message 1`);
}

function secondMessage(){
    alert(`annoying message 2`);
}

function thirdMessage(){
    alert(`annoying message 3`);
}

document.getElementById("pressMe").onclick =
    () => {
            clearTimeout(timer1); 
            clearTimeout(timer2);
            clearTimeout(timer3);
            alert("thanks for pressing")
    }
