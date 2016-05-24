var xName = prompt("Player X: ", "Player X"); // Allow players to enter their names
var oName = prompt("Player O: ", "Player O");
var champ = null; // The winner
scoreX = 0; // Initialize scores
scoreO = 0;

var turn = prompt("Which side goes first, X or O?", "X"); // Does X or O go first?
if ((turn === 'o') || (turn == 0)) { // Is answer o or 0?  Make it an O
    turn = 'O';
} // End if o or 0
if ((turn !== 'X') && (turn !== 'O')) { // Is answer neither X or O?  Default to X
    turn = 'X';
} // End if neither X or O

var playGame = function() { // Game starts
    var $gameCell = $('.cell'); // build array of game cell ids
    for (var ndx = 0; ndx < 9; ndx++) { // Clear out game board
        $gameCell.eq(ndx).html(" ");
        $gameCell.eq(ndx).append('<img src="./img/brick065.jpg" alt="Brick BG" width="100" height="100"/>');
    } // End for clear brd

    $(document).ready(function() { // Make sure DOM is ready
        var $gameCell = $('.cell'); // build array of game cell ids
        var moves = Array(9).join(".").split("."); // build array to keep track of plays
        var count = 0; // count the number of plays

        var updateScore = function() { // Print players names and their scores
            $('#plaX').html(" ");
            $('#plaO').html(" ");
            $('#plaX').append(xName + " is Player X.<br>");
            $('#plaO').append(oName + " is Player O.<br>");
            $('#plaX').append("Score: " + scoreX);
            $('#plaO').append("Score: " + scoreO);
        } // End fnc updateScore
        updateScore();

        var getWinner = function() { // Determine who won
            if (winnerIs(turn)) { // Do we have a winner?
                return turn;
            } // End if winner
            return null; // No winner
        } // End fnc getWinner
        var winnerIs = function(play) { // check rows, columns and diagonals
            return winsRow(play) || winsCol(play) || winsDiag(play);
        } // End fnc winnerIs
        var winsRow = function(play) { // Does any row have 3-in-a-row?
            return allThree(play, moves[0], moves[1], moves[2]) || allThree(play, moves[3], moves[4], moves[5]) || allThree(play, moves[6], moves[7], moves[8]);
        } // End fnc winsRow
        var winsCol = function(play) { // Does any column have 3-in-a-row?
            return allThree(play, moves[0], moves[3], moves[6]) || allThree(play, moves[1], moves[4], moves[7]) || allThree(play, moves[2], moves[5], moves[8]);
        } // End fnc winsCol
        var winsDiag = function(play) { // Does either diagonal have 3-in-a-row?
            return allThree(play, moves[0], moves[4], moves[8]) || allThree(play, moves[2], moves[4], moves[6]);
        } // End fnc winsDiag
        var allThree = function(play, cell1, cell2, cell3) { // Compare 3 cells for matching plays
            return (cell1 === play) && (cell2 === play) && (cell3 === play);
        } // End fnc allThree

        $($gameCell).one('click', function() { // Wait for current player to click a cell
            count++; // Increment # of plays
            moves[this.id] = turn; // Store play in array
            $(this).html(turn); // Show the play on the game board
            champ = getWinner(); // Do we have a winner?

            if (count == 9 || champ) { // Is board full or has a player won?
                $('.cell').off(); // disable remaining cells - game over
                if (champ == 'X') { // Did X win?
                    scoreX++; // Add one to X's score
                    turn = turn == 'X' ? 'O' : 'X'; // Toggle player so that loser goes first
                    updateScore(); // Print new score
                    alert('X = ' + scoreX + '. O = ' + scoreO + '.  The winner is ' + xName); // Announce winner
                    playGame(); // Restart the game
                } // End if X wins
                if (champ == 'O') { // Did O win?
                    scoreO++ // Add one to O's score
                    turn = turn == 'X' ? 'O' : 'X'; // Toggle player so that loser goes first
                    updateScore(); // Print new score
                    alert('X = ' + scoreX + '. O = ' + scoreO + '.  The winner is ' + oName); // Announce winner
                    playGame(); // Restart game
                } // End if O wins
                if ((count == 9) && (champ == null)) { // Are all of the cells full and no winner?
                    alert('Tie.  Nobody wins.'); // Announce a tie
                    playGame(); // Restart game
                } // End if tie
                return;
            } // End if board full or winner declared

            turn = turn == 'X' ? 'O' : 'X'; // Turn goes to next player
        }) // End fnc one click
    }); // End fnc document ready
} // End fnc playGame

playGame(); // Begin play
