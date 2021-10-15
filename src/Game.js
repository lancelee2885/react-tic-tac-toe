import React, { useState } from 'react';

import Box from './Box'

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
  const [isWon, setIsWon] = useState(false);
  const [turn, setTurn] = useState('p1');

  function mark(turn, i, j) {
    let nextPlayer = turn === 'p1' ? 'p2' : 'p1';
    if (gameBoard[i][j]) {
      return null;
    };
    let clone = [...gameBoard];
    clone[i][j] = turn;
    setGameBoard(clone);
    setTurn(nextPlayer);
    setIsWon(checkWinH(gameBoard, i, j));
    // checkWinV(gameBoard, i, j);
    // checkWinD(gameBoard, i, j);
  }

  function checkWinH(gameBoard, i) {

    if (gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2]) {
      return true;
    }
  }

  return (
    <div className='game'>
      {isWon ? <p>{turn} won</p>: <p>placeholder</p>}
      <table className='gameBoard'>
        <tbody>
          {gameBoard.map((r, i, a) =>
            <tr key={`row${i + 1}`}>
              {a[i].map((b, j) =>
                <Box gameBoard={gameBoard} row={i} col={j} turn={turn} mark={mark} />)}
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Game;