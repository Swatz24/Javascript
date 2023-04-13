// // const hands = ['rock', 'paper', 'scissors'];
// // let hand1;
// // let hand2;
// // let winner;

// // function getHand(){
// //   return hands[parseInt(Math.random()*10)%3];
// // }

// // const player1 = {
// //   name: 'Swathi',
// //   wins: 0,
// //   getHand: getHand
    
// //   }


// // const player2 = {
// //   name: 'Sahana',
// //   wins: 0,
// //   getHand: getHand
// // }


// // // play  and determine winner based on hands played
// // function playRound(Play1, Play2) {
// //   hand1 = Play1.getHand();
// //   hand2 = Play2.getHand();
  
// //   if (hand1 === hand2) {
// //     console.log("It's a tie. Round: " + Play1.name + "'s hand= " + hand1 + " & " + Play2.name + "'s hand = " + hand2);
// //   } else {
// //     if ( (hand1 === "rock" && hand2 === "scissors") || (hand1 === "paper" && hand2 === "rock") || (hand1 === "scissors" && hand2 === "paper") ) {
// //       winner = Play1;
// //       Play1.wins++;
// //     } else {
// //       winner = Play2;
// //       Play2.wins++;
// //     }
// //     console.log("Winner = " + winner.name + ", Round: " + Play1.name + "'s hand= " + hand1 + " & " + Play2.name + "'s hand = " + hand2);
  
// //     return winner;
// //   }
  

// // }


// // // Define a function called playGame() that takes arguments player1, player2, and playUntil 
// // function playGame(playerOne, playerTwo, playUntil) {
// //   while (playerOne.wins < playUntil && playerTwo.wins < playUntil) {
// //     winner = playRound(playerOne, playerTwo);
// //   }

// //   if (playerOne.wins === playUntil) {
// //     console.log("Game Over! " + playerOne.name + " wins the game with " + playerOne.wins + " wins!");
// //     return winner;
// //   } else {
// //     console.log("Game Over! " + playerTwo.name + " wins the game with " + playerTwo.wins + " wins!");
// //     return winner;
// //   }   

// // }

// // // Play 5 games
// // playGame(player1, player2, 5);




// // // Declare 2 more players for tournament game with 4 players
// // const player3 = {
// //   name: 'John',
// //   wins: 0,
// //   getHand: getHand
    
// //   }
// //   const player4 = {
// //     name: 'Jane',
// //     wins: 0,
// //     getHand: getHand
      
// //     }

// //   // Play Tournament with 4 players. After 3 matches between two player, play final game with the winners.
// // function playTournament(playerOne, playerTwo, playerThree, playerFour, playUntil) {
// //   console.log("playTournament");
// //   // Reset score to 0
// //   player1.wins = 0;
// //   player2.wins =0;
// //   player3.wins =0;
// //   player4.wins =0;
 
// //   FinalPlayer1 = playGame(player1, player3,3);
 
// //   FinalPlayer2 = playGame(player4, player2,3);
// //   // reset score to zero again for the Finals
// //   FinalPlayer1.wins = 0;
// //   FinalPlayer2.wins =0;

// //   //  play until one of the finalist scores 3 and announce the winner.
// //   winner = playGame(FinalPlayer1,FinalPlayer2,3);

// //   console.log("The Winner of the Tournament is :", winner.name);

 


// // }

// // playTournament (player1, player2, player3, player4, 5);





// function Person(){
//   this.isAlive = true;
// };
// function Relative(){
// this.lastName = 'Johnson';
// };
// function Father(){
//  this.isInCharge = false;
// };

// const per = new Person();
// Relative.prototype = per;

// const rel = new Relative();
// Father.prototype = rel;

// const fath = new Father();

// console.log(fath.isInCharge, fath.lastName, fath.isAlive);

// const car = {
//   make: "Toyota",
//   startEngine: function () {
//     console.log(`${this.make} engine started.`);
//     // const that = this;
//     setTimeout(function () {
//       console.log(`${this.make} engine stopped.`);
//     }, 1000);
//   },
// };

// car.startEngine();

const car = {
  make: "Toyota",
  tags : ['a', 'b'],
  getModel: function(){
    console.log(this);
  }this,
    
 
     // 'this' is not the car object, but the global object or undefined in strict mode

};

console.log("hello", car.getModel());