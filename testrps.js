var hands = ['rock', 'paper', 'scissors'];
var hand1;
var hand2;
var winner;

var player1 = {
  name: 'Russell',
  wins: 0,
  getHand: function() {
    return hands[parseInt(Math.random()*10)%3];
  }
}

var player2 = {
  name: 'Tyler',
  wins: 0,
  getHand: function() {
    return hands[parseInt(Math.random()*10)%3];
  }
}


// play round of RPS and determing winner based on hands played
function playRound(argPlayerObj1, argPlayerObj2) {
  hand1 = argPlayerObj1.getHand();
  hand2 = argPlayerObj2.getHand();
  
  if (hand1 === hand2) {
    console.log("It's a tie. Round: " + argPlayerObj1.name + "'s hand= " + hand1 + " & " + argPlayerObj2.name + "'s hand = " + hand2);
  } else {
    if ( (hand1 === "rock" && hand2 === "scissors") || (hand1 === "paper" && hand2 === "rock") || (hand1 === "scissors" && hand2 === "paper") ) {
      winner = argPlayerObj1.name;
      argPlayerObj1.wins++;
    } else {
      winner = argPlayerObj2.name;
      argPlayerObj2.wins++;
    }
    console.log("Winner = " + winner + ", Round: " + argPlayerObj1.name + "'s hand= " + hand1 + " & " + argPlayerObj2.name + "'s hand = " + hand2);
    return winner;
  }
  

}


// play game until winner decided
function playGame(playerOne, playerTwo, playUntil) {
  while (playerOne.wins < playUntil && playerTwo.wins < playUntil) {
    playRound(playerOne, playerTwo);
  }

  if (playerOne.wins === playUntil) {
    console.log("Game Over! " + playerOne.name + " wins the game with " + playerOne.wins + " wins!");
  } else {
    console.log("Game Over! " + playerTwo.name + " wins the game with " + playerTwo.wins + " wins!");
  }   

}


// play tournament of RPS with 4 players
function playTournament(playerOne, playerTwo, playerThree, playerFour, playUntil) {
  console.log("playTournament");
}


playGame(player1, player2, 5);



