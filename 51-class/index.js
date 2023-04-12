class Player {
    score = 0;

    pause(){
        console.log("You paused the game")
    }

    exit(){
        console.log("you exited the game")
    }
}

const player1 = new Player();
const player2 = new Player();

player1.score += 1;

console.log(player1.score)
console.log(player2.score)
player1.pause()
player1.exit()