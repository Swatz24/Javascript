const hand = ['rock','paper','scissors'];

// getHand function to choose hands for players
function getHand(hand) {
let randomNumber = (parseInt(Math.random()*10)%3);
let randomHand = hand[randomNumber];
return randomHand;
}


// Player 1 Object
let player1 = {
  name : 'Player1',
  getHand : getHand(hand)
};


//Player 2 Object
let player2 = {
  name : 'Player2',
  getHand : getHand(hand)
};

// Calling playRound function
let result = playRound(player1, player2);


// playRound Function to select hands for each player, compare and display results.
function playRound( play1, play2){

    let player1Move = play1.getHand;
    

    let player2Move = play2.getHand;
    

    if(player1Move==='rock' && player2Move==='rock'){
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("It's a TIE");
      return null;
    }
    else if (player1Move==='paper' && player2Move==='paper') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("It's a TIE");
      return null;
    }
    else if (player1Move==='scissors' && player2Move==='scissors') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("It's a TIE");
      return null;
    }
    else if (player1Move==='scissors' && player2Move==='rock') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("Player 2 Won");
      return play2;
    }
    else if (player1Move==='scissors' && player2Move==='paper') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("Player 1 Won");
      return play1;
    }
    else if (player1Move==='rock' && player2Move==='scissors') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("Player 1 Won");
      return play1;
    }
    else if (player1Move==='rock' && player2Move==='paper') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("Player 2 Won");
      return play2;
    }
    else if (player1Move==='paper' && player2Move==='rock') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("Player 1 Won");
      return play1;
    }
    else if (player1Move==='paper' && player2Move==='scissors') {
      console.log("Player 1 Move:", player1Move);
      console.log("Player 2 Move:", player2Move);
      console.log("Player 2 Won");
      return play2;
    }
}
console.log(result);


