import React, { useState } from 'react';

import Box from './Box'
import ResetBtn from './ResetBtn';

/** Game:
 * 
 * Props: 
 * 
 * State: 
 *  - gameBoard: Arr -> keep track cross/circle on the board
 *  - isWon: tell if the game has been won
 *  - turn
 */
const Game = function () {

  const [gameBoard, setGameBoard] = useState([...Array(3)].map(a => [...Array(3)]))
  const [isWon, setIsWon] = useState(['p1', false]);
  const [turn, setTurn] = useState('p1');

  function mark(turn, i, j) {
    let nextPlayer = turn === 'p1' ? 'p2' : 'p1';
    if (gameBoard[i][j]) {
      return null;
    };
    let clone = [...gameBoard];
    clone[i][j] = turn==='p1' ? 'X' : 'O';
    setGameBoard(clone);
    setTurn(nextPlayer);
    setIsWon([turn, checkWinH(gameBoard, i, j)]);
  }

  function checkWinH(gameBoard, i, j) {

    let horizontalCondition = ((gameBoard[i][0] === gameBoard[i][1] &&
                                gameBoard[i][1] === gameBoard[i][2]))
    let verticalCondition = ((gameBoard[0][j] === gameBoard[1][j] &&
                                gameBoard[1][j] === gameBoard[2][j]))
    let diaganolCondition = (((gameBoard[0][0] === gameBoard[1][1] &&
                              gameBoard[1][1] === gameBoard[2][2]) ||
                             (gameBoard[0][2] === gameBoard[1][1] &&
                              gameBoard[1][1] === gameBoard[2][0])) &&
                              gameBoard[1][1] ) 

    if (horizontalCondition ||
        verticalCondition ||
        diaganolCondition) {
      return true;
    }
  }

  function reset() {
    let newBoard = [...Array(3)].map(a => [...Array(3)]);
    setGameBoard(newBoard);
    setIsWon(['p1', false]);
    setTurn('p1');
  }

  return (
    <div className='game'>
      {isWon[1] ? <p>{isWon[0] === 'p1' ? 'Player 1' : 'Player 2'} Won</p>: <p>Tic Tac Toe</p>}
      <table className='gameBoard'>
        <tbody>
          {gameBoard.map((r, i, a) =>
            <tr key={`row${i + 1}`}>
              {a[i].map((b, j) =>
                <Box 
                  gameBoard={gameBoard} 
                  row={i} 
                  col={j} 
                  turn={turn} 
                  mark={mark} 
                  won={isWon[1]}/>)}
            </tr>)}
        </tbody>
      </table>
      <ResetBtn reset={reset}/>
    </div>
  )
}

export default Game;