// Refactor interactive game with functions
// Rock, paper, scissors: refactored wth functions

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game flow function
// we will use helper functions
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.")
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

// const decideNotToPlay = () => {
//     alert("I guess you changed your mind. Maybe next time.");
// };
const decideNotToPlay = () => alert("I guess you changed your mind. Maybe next time.") // inline function

// const evaluatePlayerChoice = (playerChoice) => {
//     if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
//         return playerChoice;
//     } else {
//         return false;
//     }
// }
// const evaluatePlayerChoice = playerChoice => playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors" ? playerChoice : false
const evaluatePlayerChoice = playerChoice => (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") && playerChoice // string if verified, False if not

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.")
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner =
        (player === computer) ?
            "Tie game!"
        :
            (player === "rock" && computer === "paper") ?
            `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        :
            (player === "paper" && computer === "scissors") ?
          `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : (player === "scissors" && computer === "rock")
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        :
            `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;

    return winner;
};

const displayResult = result => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();
