////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
    //var playerMove = getInput();
    //console.log("You have chosen: " + playerMove);
    //var playerMove;
    if (move === null || move === undefined)
    {
      return getInput();
    }
    else {
      return move;
    }
    //return playerMove/* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //var computerMove = randomPlay();
    //console.log("Computer has chosen: " + computerMove);
    //var computerMove;
    if (move === null || move === undefined)
    {
      return randomPlay();
    }
    else {
      return move;
    }
    //return computerMove/* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner = null;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    //console.log("Player has chosen: " + playerMove);
    //console.log("Computer has chosen: " + computerMove);
    if (playerMove === computerMove)
    {
      winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors")
    {
      winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper")
    {
      winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "rock")
    {
      winner = "player";
    }
    else {
      {
        winner = "computer";
      }
    }
    //console.log("The winner is: " + winner + '\n');
    return winner;
}
/* Play To Five*/
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5)
    {
      var pM = getPlayerMove();
      var cM = getComputerMove();
      var wF = getWinner(pM, cM);
      console.log("Player chose " + pM + " while computer chose " + cM + ".");
      console.log("The winner is " + wF + ".");
      if (wF === "player")
      {
        playerWins += 1;
      }
      else if(wF==="computer")
      {
        computerWins+=1;
      }
      else {
        console.log("Try again.");
      }
      console.log("The score is currently " + playerWins + " to " + computerWins + ".\n")
    }
    return [playerWins, computerWins];
}

/* Play To 'X'*/
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x)
    {
      var pM = getPlayerMove();
      var cM = getComputerMove();
      var wF = getWinner(pM, cM);
      console.log("Player chose " + pM + " while computer chose " + cM + ".");
      console.log("The winner is " + wF + ".");
      if (wF === "player")
      {
        playerWins += 1;
      }
      else if(wF==="computer")
      {
        computerWins+=1;
      }
      else {
        console.log("Try again.");
      }
      console.log("The score is currently " + playerWins + " to " + computerWins + ".\n")
    }
    return [playerWins, computerWins];
}
