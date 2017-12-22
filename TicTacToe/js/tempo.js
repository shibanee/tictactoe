let $body;
//let $container;
let $board;

let currentPlayer = 'X';

$(document).ready(function(){
const player1 = 'X';
const player2 = 'O';

$board = [
  [1, 2, 3],  // row 1
  [4, 5, 6],  // row 2
  [7, 8, 9],  // row 3
];

const markSquare = document.querySelectorAll('#square');

// let newGame = function(){
//   //clear board and setup new one
// };
//
// // newGame();
//
// let playTurn = function(){
//   //x then o then x then o how?
//   player1Turn=1;
// }

const alertWin = function() {
    console.log(`${currentPlayer} wins!`);
}

// const checkWinLongWay = function () {
//
//   const winString = currentPlayer + currentPlayer + currentPlayer;
//
//   //$('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()
//
//   if ($('#box1').text() + $('#box2').text()  + $('#box3').text() === winString){
//   alertWin();
//   }
//
// };

const checkWin = function(){
  if( currentPlayer === 'X'){
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  const winPossibilities = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
  ];

  for (var i = 0; i < winPossibilities.length; i++) {

    let currentWinSequence = winPossibilities[i];
    // console.log(currentWinSequence);
    const firstCellNumber = currentWinSequence[0];
    const secondCellNumber = currentWinSequence[1];
    const thirdCellNumber = currentWinSequence[2];
    // console.log({firstCellNumber, secondCellNumber, thirdCellNumber});

    const firstValue = $(`#box${firstCellNumber}`).text();
    const secondValue = $(`#box${secondCellNumber}`).text();
    const thirdValue = $(`#box${thirdCellNumber}`).text();

    console.log({firstValue, secondValue, thirdValue});

    // currentPlayer


  }

};


$('.square').on('click', function(){

  // if( $(this).text().length ){
  //   return; // ignore clicks on an occupied square
  // }

  if( $(this).text().length === 0 ){

    $(this).text( currentPlayer );



    // switch player
    if( currentPlayer === 'X'){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    checkWin();
    checkWinLongWay();



  } // if square is empty

});


});
