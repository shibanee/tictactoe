let $body;
let $container;
let $board;
let currentPlayer = 'X';

$(document).ready(function(){
// const player1 = 'X';
// const player2 = 'O';

$board = [
  [1, 2, 3],  // row 1
  [4, 5, 6],  // row 2
  [7, 8, 9],  // row 3
];

const markSquare = document.querySelectorAll('#square');

const clearBoard = function() {
  $('.square').text("");
  $('.message-container').css("display","none");
  currentPlayer= 'X';}

const celebrate = function(currentPlayer){
  if (currentPlayer==='X'){
      $('.square').text(`${currentPlayer}`);
    } else {
      $('.square').text(`${currentPlayer}`);
    }// switch player runs after checkWinner, so switching again
    //animate(currentPlayer);//spin all
}

const alertWin = function(currentPlayer) {
    $('.message-container').css("display","block");
    $('#message-alert').text(`${currentPlayer} Wins!`);
    celebrate(currentPlayer);
}

const alertDraw = function(){
  $('.message-container').css("display","block")
  $('#message-alert').text("It's a Draw!");
}

const checkWinLongWay = function () { // not DRY
  const winString = currentPlayer + currentPlayer + currentPlayer;
  if (($('#box1').text() + $('#box2').text()  + $('#box3').text() === winString) ||
      ($('#box4').text() + $('#box5').text()  + $('#box6').text() === winString) ||
      ($('#box7').text() + $('#box8').text()  + $('#box9').text() === winString) ||
      ($('#box1').text() + $('#box5').text()  + $('#box9').text() === winString) ||
      ($('#box3').text() + $('#box5').text()  + $('#box7').text() === winString) ||
      ($('#box1').text() + $('#box4').text()  + $('#box7').text() === winString) ||
      ($('#box2').text() + $('#box5').text()  + $('#box8').text() === winString) ||
      ($('#box3').text() + $('#box6').text()  + $('#box9').text() === winString)
      ){
        alertWin(currentPlayer);
      }

  else if(
  
      ($('#box1').text() && $('#box2').text() && $('#box3').text() && $('#box4').text() && $('#box5').text() && $('#box6').text() && $('#box7').text() && $('#box8').text() && $('#box9').text())
      ){
      alertDraw();
      }
    };
// const checkWin = function(){
//   if( currentPlayer === 'X'){
//     currentPlayer = 'O';
//   } else {
//     currentPlayer = 'X';
//   }
//   const winPossibilities = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,5,9],
//     [3,5,7],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
//   ];
//
//   for (var i = 0; i < winPossibilities.length; i++) {
//
//     let currentWinSequence = winPossibilities[i];
//     // console.log(currentWinSequence);
//     const firstCellNumber = currentWinSequence[0];
//     const secondCellNumber = currentWinSequence[1];
//     const thirdCellNumber = currentWinSequence[2];
//     // console.log({firstCellNumber, secondCellNumber, thirdCellNumber});
//
//     const firstValue = $(`#box${firstCellNumber}`).text();
//     const secondValue = $(`#box${secondCellNumber}`).text();
//     const thirdValue = $(`#box${thirdCellNumber}`).text();
//
//     console.log({firstValue, secondValue, thirdValue});
//
//     // currentPlayer
//
//
//   }
//
// };

$('.square').on('click', function(){
  // if( $(this).text().length ){
  //   return; // ignore clicks on an occupied square
  // }
  if( $(this).text().length === 0 ){
    $(this).text( currentPlayer );
    checkWinLongWay();    // checkWin();

    // switch player
    if( currentPlayer === 'X'){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
  } // if square is empty
});

$('#playAgain').on('click', function(){
clearBoard();
});

$('#quitGame').on('click', function(){
window.close();
});


});
