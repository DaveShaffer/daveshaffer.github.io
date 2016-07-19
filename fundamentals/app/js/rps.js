////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    console.log("You can abbreviate 'r', 'p' and 's'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    switch (playerMove) {
        case "rock":
            switch (computerMove) {
                case "rock":
                    winner = 'tie';
                    break;
                case "scissors":
                    winner = 'player';
                    break;
                case "paper":
                    winner = 'computer';
                    break;
                default:
                winner = null;
            }
            break;
        case "scissors":
            switch (computerMove) {
                case "rock":
                    winner = 'computer';
                    break;
                case "scissors":
                    winner = 'tie';
                    break;
                case "paper":
                    winner = 'player';
                    break;
                default:
                winner = null;
            }
            break;
        case "paper":
            switch (computerMove) {
                case "rock":
                    winner = 'player';
                    break;
                case "scissors":
                    winner = 'computer';
                    break;
                case "paper":
                    winner = 'tie';
                    break;
                default:
                winner = null;
            }
            break;
        default:
        winner = null;
    }
    return winner;
}

function playToX(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x) {
        var playerMove = null;
        var computerMove = null;
        playerMove = getPlayerMove();
        if (playerMove == 'r' || playerMove == 'R') {
            playerMove = 'rock';
        };
        if (playerMove == 'p' || playerMove == 'P') {
            playerMove = 'paper';
        };
        if (playerMove == 's' || playerMove == 'S') {
            playerMove = 'scissors';
        };
        computerMove = getComputerMove();
        var c = getWinner(playerMove, computerMove);
        if (c === 'player') {
            playerWins += 1;
        }
        if (c === 'computer') {
            computerWins += 1;
        } else console.log('There was a tie.  Play again.');
        console.log('Your choice - ' + playerMove + '.  The computer\'s choice - ' + computerMove);
        console.log('The score is: You - ' + playerWins + '  Computer - ' + computerWins);
        console.log(' ');
    }
    if (playerWins == x) {
        console.log('You Win!  Do you want to play again?');
    } else console.log('Computer Wins!');
    return [playerWins, computerWins];
}

playToX(3);


