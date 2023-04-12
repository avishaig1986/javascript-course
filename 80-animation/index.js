const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1

    timerId = setInterval(frame, 50);

    function frame(){
        if(scaleX >= 2){
            clearInterval(timerId)

        }
        else{
            scaleX+=0.01;
            scaleY+=0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")"
        }
    }
}

/*
const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let degrees = 0
    let x = 0
    let y = 0

    timerId = setInterval(frame, 50);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId)

        }
        else{
            degrees+=5;
            x+=1
            y+=1
            //myAnimation.style.transform = "rotateX("+degrees+"deg)"
            //myAnimation.style.transform = "rotateY("+degrees+"deg)"
            myAnimation.style.transform = "rotateZ("+degrees+"deg)"
            myAnimation.style.top = x + "px";
            myAnimation.style.left = x + "px";
        }
    }
}
*/

/*
// move diagonally
const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let x = 0
    let y = 0

    timerId = setInterval(frame, 10);

    function frame(){
        if(x>= 200 || y >= 200){
            clearInterval(timerId)

        }
        else{
            y+=1;
            x+=1
            myAnimation.style.top = x + "px";
            myAnimation.style.left = x + "px";
        }
    }
}
*/