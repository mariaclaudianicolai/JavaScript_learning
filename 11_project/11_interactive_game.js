// Your first interactive game

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)
            const computer = computerChoice === 1 ? "rock" : "scissors";

            let result =
                playerOne === computer ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                        : playerOne === "paper" && computer === "scissors"
                            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                            : playerOne === "scissors" && computer === "rock"
                                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.")
        } else {
            alert("You didn't enter rock, paper, or scissors.")
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.")
    }
} else {
    alert("Ok, may next time.");
}

//if statement example:
let computerChoice = Math.floor(Math.random() * 3 + 1)
let computer
if (computerChoice === 1)
    computer = "rock"
else
    computer = "scissors"

//switch example:
let computerChoice = Math.floor(Math.random() * 3 + 1)
let computer;
switch (computerChoice) {
    case 1:
        computer = "rock"
        break
    default:
        computer = "scissors"
        break
}

