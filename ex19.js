/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

let generateBoard = function (position1, position2) {
  let board = [];
  let row = [];

  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      row[j] = 0;
    }
    board[i] = [...row];    
  }

  board = checkPosition(position1, board);
  board = checkPosition(position2, board);

  return board;
}

const checkPosition = function (position, board) {
  const queen = position;

  board[queen[0]][queen[1]] = 1;

  return board;
}

const queenThreat = function (board) {

  const queens = board.reduce((row, current, index) => {
    current.forEach((element, elementIndex) => {
      if(element === 1) {
        if (row.length === 0) {
          row = [[index, elementIndex]];
        } else {
          row.push([index, elementIndex]);
        }
      } else {
        row = row;
      }
    });

    return row = [...row];

  },[])

  const queen1y = queens[0][0];
  const queen1x = queens[0][1];
  const queen2y = queens[1][0];
  const queen2x = queens[1][1];


  if ((queen1x === queen2x) || (queen1y === queen2y)) {
    return true;
  } else if ((queen1x + queen1y) === (queen2x + queen2y)) {
    console.log(queen1x + queen1y, queen2x + queen2y)
    return true;
  } else if ((queen1x - queen1y) === (queen2x - queen2y)) {
    console.log(queen1x - queen1y, queen2x - queen2y)
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.table(generatedBoard);
// console.log(queenThreat(generatedBoard));