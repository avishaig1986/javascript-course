let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d")

/*
//DRAW LINW
context.strokeStyle = "plum"
context.lineWidth = 15
context.beginPath()
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.lineTo(250, 250);
context.lineTo(500, 0);
context.stroke()
*/

/*
// DRAW TRIANGLE
context.strokeStyle = "blue"
context.fillStyle = "orange"
context.lineWidth = 10
context.beginPath();
context.moveTo(250,0)
context.lineTo(0, 250)
context.lineTo(500, 250)
context.lineTo(250, 0)
context.fill()
context.stroke()
*/

/*
// DRAW RECTANGLE
context.fillStyle = "red";
context.fillRect(0,0,250,250)
context.strokeStyle = "red"
context.strokeRect(0,0,250,250)

context.fillStyle = "black";
context.fillRect(0,250,250,250)
context.strokeStyle = "black"
context.strokeRect(0,250,250,250)

context.fillStyle = "black";
context.fillRect(250,0,250,250)
context.strokeStyle = "black"
context.strokeRect(250,0,250,250)

context.fillStyle = "red";
context.fillRect(250,250,500,500)
context.strokeStyle = "red"
context.strokeRect(250,250,500,500)
*/

/*
// DRAW CIRCLE
//(x, y, sAngle, eAngle, counterClockwise)
context.fillStyle = "pink"
context.strokeStyle = "darkblue"
context.lineWidth = 10
context.beginPath()
context.arc(250, 250, 100, 0, 2 * Math.PI)
context.stroke();
context.fill()
*/

// DRAW TEXT
context.font = "50px MV Boli"
context.fillStyle = "purple"
context.textAlign = "center"
context.fillText("YOU WIN!", canvas.width / 2, canvas.width / 2)


