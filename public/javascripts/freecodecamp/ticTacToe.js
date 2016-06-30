var piece = ['X', 'O'];
var player = 0,computer = 0,cornerAvailable = false,computerMove = true,turn = 0,computerWon = false;
var outcome = document.getElementById('winnerBox');
var block = document.getElementById('block');
var computerWants = [1, 3, 5, 7, 9],gameBoard = [];

for (var i = 1; i <= 9; i++) {
  gameBoard[i] = document.getElementById('B' + i);
  console.log(gameBoard[i]);
}
console.log(gameBoard);


function makeChoice(id) {
  //if there is no html inside of the element with this id
  if (document.getElementById(id).innerHTML === "") {
    //place the players letter in the html inside the element with this id
    document.getElementById(id).innerHTML = piece[player];
    //add one to the turn
    turn++;
    //start the computers turn
    computerTurn();
    //After compStart function comp will have moved, if the move was the last move the game will reset calling compStart again to make first move, otherwise checkWin function is called to analyze the board. If it finds a reset will call giving just enough time to complete the if else if statement
    searchForWin();
    //if compWin was changed to true in checkWin function then announce div html will change to "WIN"
    if (computerWon) outcome.innerHTML = "Computer wins!";
    //else if the turn is equal to 9 the winnerBox div html will change to tie
    else if (turn===9) outcome.innerHTML="Players Tied!";
    //if the turn is equal to 9 moves is changed back to zero and calls reset function which will have a two second delay
    if (turn === 9) {turn=0;reset();}
  }
}

function chooseX() {
  document.getElementById("begin").style.visibility = 'hidden';
  player = 0;
  computer = 1;
  LetsPlay();
}

function chooseO() {
  document.getElementById("begin").style.visibility = 'hidden';
  computer = 0;
  player = 1;
  LetsPlay();
}


function LetsPlay() {
  turn = 0;
  computerTurn();
}

function computerTurn() {
  var ranC = 0;
  computerMove = false;
 //computerMove currently equals false
  //if !computerMove then becomes true and calls checkHor function
  if (!computerMove) checkHor();
  //if there is no hor to block or to win then computerMove stays false, and computer does a check vertical
  if (!computerMove) checkVert();
  
  if (!computerMove) checkDiag();
  //After completing all checks we move to corner check -> cornerCheck
  findEmptyCorner();
  //if cornerCheck did have a corner empty and !computerMove is still true
  if ((cornerAvailable) && (!computerMove)) {
      //do this
    do {
      //ranC is a random corner
      ranC = 'B' + computerWants[Math.floor(Math.random() * 5)];
      //if this corners html is empty
      if (document.getElementById(ranC).innerHTML === '') {
        //this corner html is now equal to computer piece
        document.getElementById(ranC).innerHTML = piece[computer];
        //change computerMove to true
        computerMove = true;
        //add one turn
        turn++;
      }
      //call cornercheck again
      findEmptyCorner();
    //after checking to see if any corner is empty && there is an empty corner && the computer has not moved, execute the above again until computer plays in corner
    } while ((document.getElementById(ranC).innerHTML !== '') && (cornerAvailable === true) && (computerMove === false));
  }
  
  //if moves is equal to 8 && !computerMove is true
 if ((turn === 8)&& (!computerMove)) {
   //last equals 1, while last is less than or equal to 9 add one to last
    for (var final = 1; final <= 9; final++) {
      //if array Index last is empty, array Index last is equal to computer piece, add one to move, valid is true, the annouce box is "TIE!"
      if (gameBoard[final].innerHTML = '') gameBoard[final].innerHTML = piece[computer];turn++;computerMove=true;outcome.innerHTML="TIE!";
    }
   //reset function is called
    reset();
  }
}

function findEmptyCorner() {
  //cornerk is set to false
  cornerAvailable = false;
  //movNumber is 0, while movNumber is less than computerWants array 1,3,5,7,9 add one to movNumber
  for (var movNumber = 0; movNumber < computerWants.length; movNumber++)
    //checks if box 1,3,5,7, and 9 are empty, if any are empty cornerk is changed to true
    if (document.getElementById("B" + computerWants[movNumber]).innerHTML === '') cornerAvailable = true;
}

//This checkHor function is seeing if horizontally the innerHTML of two squares in the row match, if they do the empty space in the row is the spot the computer wants, regardless if the player has the two spaces or if the computer has the two spaces
function checkHor() {
  //for i = 1 while i less than or equal to 7 increment i+3
  for (var i = 1; i <= 7; i += 3) {
    //array index I innerhtml is the same as array index I+1 && computerMove is true && array index I is not equal to empty
    if ((gameBoard[i].innerHTML === gameBoard[i + 1].innerHTML) && (!computerMove) && (gameBoard[i].innerHTML !== '')) {
      //if array Index I+2 || or the third col in row is empty
      if (gameBoard[i + 2].innerHTML === '') {
        //change valid to true
        computerMove = true;
        //add one to move
        turn++;
        //the third col in row innerHTML is computers piece
        gameBoard[i + 2].innerHTML = piece[computer];
      }
    };
    //if array Index I html is the same as array Index I+2 and !computerMove is true and Array index I is not empty 
    if ((gameBoard[i].innerHTML === gameBoard[i + 2].innerHTML) && (!computerMove) && (gameBoard[i].innerHTML !== '')) {
      //if array Index I+1 is empty
      if (gameBoard[i + 1].innerHTML === '') {
        //change computerMove to true
        computerMove = true;
        //add one to turn
        turn++;
        //array Index I+1 is now equal to computer piece
        gameBoard[i + 1].innerHTML = piece[computer];
      }
    };
    //if array Index I+2 html is the same as array Index I+1 and !computerMove is true and Array index I+2 is not empty 
    if ((gameBoard[i + 2].innerHTML === gameBoard[i + 1].innerHTML) && (!computerMove) && (gameBoard[i + 2].innerHTML !== '')) {
      //if array Index I is empty
      if (gameBoard[i].innerHTML === '') {
        //change computerMove to true
        computerMove = true;
        //add one to turn
        turn++;
        //array Index I is equal to computer piece
        gameBoard[i].innerHTML = piece[computer];
      }
    };
  }
}

function checkDiag() {
    if ((gameBoard[1].innerHTML === gameBoard[5].innerHTML) && (!computerMove) && (gameBoard[1].innerHTML !== '')) {
      if (gameBoard[9].innerHTML === '') {
        computerMove = true;
        turn++;
        gameBoard[9].innerHTML = piece[computer];
      }
    };
    if ((gameBoard[1].innerHTML === gameBoard[9].innerHTML) && (!computerMove) && (gameBoard[1].innerHTML !== '')) {
      if (gameBoard[5].innerHTML === '') {
        computerMove = true;
        turn++;
        gameBoard[5].innerHTML = piece[computer];
      }
    };
    if ((gameBoard[5].innerHTML === gameBoard[9].innerHTML) && (!computerMove) && (gameBoard[5].innerHTML !== '')) {
      if (gameBoard[1].innerHTML === '') {
        computerMove = true;
        turn++;
        gameBoard[1].innerHTML = piece[computer];
      }
    };  
  if ((gameBoard[3].innerHTML === gameBoard[5].innerHTML) && (!computerMove) && (gameBoard[3].innerHTML !== '')) {
      if (gameBoard[7].innerHTML === '') {
        computerMove = true;
        turn++;
        gameBoard[7].innerHTML = piece[computer];
      }
    }; 
  if ((gameBoard[3].innerHTML === gameBoard[7].innerHTML) && (!computerMove) && (gameBoard[3].innerHTML !== '')) {
      if (gameBoard[5].innerHTML === '') {
        computerMove = true;
        turn++;
        gameBoard[5].innerHTML = piece[computer];
      }
    };  
  if ((gameBoard[5].innerHTML === gameBoard[7].innerHTML) && (!computerMove) && (gameBoard[5].innerHTML !== '')) {
      if (gameBoard[3].innerHTML === '') {
        computerMove = true;
        turn++;
        gameBoard[3].innerHTML = piece[computer];
      }
    };
}

//This checkVert function is seeing if vertically the innerHTML of two squares in the col match, if they do the empty space in the col is the spot the computer wants, regardless if the player has the two spaces or if the computer has the two spaces
function checkVert() {
  //for i = 1 while i is less than or equal to 3 add one to i
  for (var i = 1; i <= 3; i++) {
    //if array Index I is equal to array index I+3 && !computerMove is true && array Index I is not empty
    if ((gameBoard[i].innerHTML === gameBoard[i + 3].innerHTML) && (!computerMove) && (gameBoard[i].innerHTML !== '')) {
      //if array index I+6 is empty
      if (gameBoard[i + 6].innerHTML === '') {
        //computerMove is true
        computerMove = true;
        //add one to turn
        turn++;
        //array Index I+6 is equal to computer piece
        gameBoard[i + 6].innerHTML = piece[computer];
      }
    };
    //if array Index I is equal to array Index I+6 && !computerMove is true && array Index I is not empty
    if ((gameBoard[i].innerHTML === gameBoard[i + 6].innerHTML) && (!computerMove) && (gameBoard[i].innerHTML !== '')) {
      //if array Index I+3 is empty
      if (gameBoard[i + 3].innerHTML === '') {
        //computerMove is true
        computerMove = true;
        //add one to turn
        turn++;
        //array Index I+3 is equal to computer piece
        gameBoard[i + 3].innerHTML = piece[computer];
      }
    };
    //if array Index I+6 is equal to array Index I+3 && !computerMove is true && array Index I+6 is not empty
    if ((gameBoard[i + 6].innerHTML === gameBoard[i + 3].innerHTML) && (!computerMove) && (gameBoard[i + 6].innerHTML !== '')) {
      //If array Index I is empty
      if (gameBoard[i].innerHTML === '') {
        //computerMove is true
        computerMove = true;
        //add one to turn
        turn++;
        //array Index I is equal to computer piece
        gameBoard[i].innerHTML = piece[computer];
      }
    };
  }
}
  
//function to use when reset is called
function reset() {
  //element whose id is block style is visible and moves is back to zero
  block.style.visibility = "visible";turn=0;
  //setTimeout function called
  setTimeout(function() {
    //i is 1 while i is less than or equal to 9 add one
    for (var i = 1; i <= 9; i++) {
      //every td inner html is empty
      gameBoard[i].innerHTML = '';
    }
    //block style is set back to hidden
    block.style.visibility = "hidden";
    //annouce div html is back to empty
    outcome.innerHTML = '';
    //comp Starts game again
    computerTurn();
    //This all happens after two seconds of block style visibility being visible
  }, 2000);
}

//function to be used when checkWin is called
function searchForWin() {
  //compWin is set to false
  computerWon = false
  //win is 1 while win is less than or equal to three add one to win
  for (var vertWin = 1; vertWin <= 3; vertWin++) {
    //if array Index win html is equal to array Index win+3 html && array Index win html is not empty && array Index win+6 html is equal to array Index win & !compWin is true "This checks for vert win down the columns"
    if ((gameBoard[vertWin].innerHTML === gameBoard[vertWin + 3].innerHTML) && (gameBoard[vertWin].innerHTML !== '') && (gameBoard[vertWin].innerHTML === gameBoard[vertWin + 6].innerHTML) && (!computerWon)) {
      //compWin is set to true
      computerWon = true;
      //call the reset function which will have the two second delay
      reset();
    }
  }
  //win is 1 while win is less than 7 increment win +3
  for (var horWin = 1; horWin <= 7; horWin += 3) {
     //if array Index win html is equal to array Index win+1 html && array Index win html is not empty && array Index win+2 html is equal to array Index win & !compWin is true "This checks for hor win across the rows"
    if ((gameBoard[horWin].innerHTML === gameBoard[horWin + 1].innerHTML) && (gameBoard[horWin].innerHTML !== '') && (gameBoard[horWin].innerHTML === gameBoard[horWin + 2].innerHTML) && (!computerWon)) {
      //compWin is set to true
      computerWon = true;
      //call the reset function which will have a two second delay
      reset();
    }
  }
  //if array Index 5 is not empty and !compWin is true
  if ((gameBoard[5].innerHTML!=='') && (!computerWon))
    ///if array Index 1 is equal to array Index 5 && array index 5 is equal to array Index 9 || array Index 3 is equal to array index 5 and array Index 5 is equal to array Index 7
      if (((gameBoard[1].innerHTML===gameBoard[5].innerHTML)&& (gameBoard[5].innerHTML===gameBoard[9].innerHTML) ) || ((gameBoard[3].innerHTML===gameBoard[5].innerHTML)&& (gameBoard[5].innerHTML===gameBoard[7].innerHTML)) )
        {
          //compWin is set to true
      computerWon = true;
          //call the reset function which will have a two second delay
      reset();
    }console.log(computerWon);
}

