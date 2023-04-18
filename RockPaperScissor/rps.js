const hands = ['rock', 'paper', 'scissors'];
let hand1;
let hand2;
let winner;


function getHand(){
  return hands[parseInt(Math.random()*10)%3];
}

const player1 = {
  name: 'Player1',
  getHand: getHand
  }

const player2 = {
  name: 'Player2',
  getHand: getHand
}

// let Play1wins =0;
// let Play2wins =0;
//let playerScore = {'player1' : Play1wins , 'player2' : Play2wins };

let playerScore = JSON.parse(localStorage.getItem('playerScore')) || { 'Play1wins':0,
 'Play2wins':0
};

//console.log("Initial score:", playerScore.Play1wins, playerScore.Play2wins);

// play  and determine winner based on hands played
function playRound(Play1, Play2) {
  hand1 = Play1.getHand();
  hand2 = Play2.getHand();
  
  if (hand1 === hand2) {
    document.querySelector('.js-result').innerHTML = "It's a tie.";
    document.querySelector('.js-player1-move').innerHTML =  "Player1-Move:" + hand1;
    document.querySelector('.js-player2-move').innerHTML =   "Player2-Move:" +hand2;
   
  } else {
    if ( (hand1 === "rock" && hand2 === "scissors") || (hand1 === "paper" && hand2 === "rock") || (hand1 === "scissors" && hand2 === "paper") ) {
      winner = Play1;
      playerScore.Play1wins++;
    } else {
      winner = Play2;
      playerScore.Play2wins++;
    }

    document.querySelector('.js-result').innerHTML =`${winner.name} won this round.`;
    document.querySelector('.js-player1-move').innerHTML =  "Player1-Move:" + hand1;
    document.querySelector('.js-player2-move').innerHTML =   "Player2-Move:" +hand2;
    document.querySelector('.js-score').innerHTML =`Player 1:  ${playerScore.Play1wins} Player 2: ${playerScore.Play2wins}`;

    if(playerScore.Play1wins > playerScore.Play2wins){
    document.querySelector('.js-winner').innerHTML = `Winner: ${Play1.name}.`;}
   else if (playerScore.Play1wins < playerScore.Play2wins){
    document.querySelector('.js-winner').innerHTML = `Winner: ${Play2.name}.`;}
  else{
    document.querySelector('.js-winner').innerHTML = `It's a tie`;}
  }
  playerScore = {'Play1wins' : playerScore.Play1wins , 'Play2wins' : playerScore.Play2wins };
    localStorage.setItem('playerScore', JSON.stringify(playerScore));
    //console.log(playerScore);
}

function autoplay(){
  playRound(player1,player2);
}

function resetScore(){
  let temp = { 'Play1wins':0,'Play2wins':0 };
  console.log(temp);
  localStorage.setItem('playerScore', JSON.stringify(temp));
  playerScore =  { 'Play1wins':0,
  'Play2wins':0
};
document.querySelector('.js-result').innerHTML =``;
document.querySelector('.js-player1-move').innerHTML =  "";
document.querySelector('.js-player2-move').innerHTML =   "";
document.querySelector('.js-score').innerHTML =`Player 1:  ${playerScore.Play1wins} Player 2: ${playerScore.Play2wins}`;
document.querySelector('.js-winner').innerHTML = ``;
}




// Define a function called playGame() that takes arguments player1, player2, and playUntil 
// function playGame(playerOne, playerTwo, playUntil) {
//   while (playerOne.wins < playUntil && playerTwo.wins < playUntil) {
//     winner = playRound(playerOne, playerTwo);
//   }

//   if (playerOne.wins === playUntil) {
//     console.log("Game Over! " + playerOne.name + " wins the game with " + playerOne.wins + " wins!");
//     return winner;
//   } else {
//     console.log("Game Over! " + playerTwo.name + " wins the game with " + playerTwo.wins + " wins!");
//     return winner;
//   }   

// }

// Play 5 games
//playGame(player1, player2, 5);

