import React, { useState } from 'react';

/** Box: single box in the table
 * 
 * Props: 
 *  - gameBoard: Array of arrays keeping track of current board
 *  - row: indicates which row it is
 *  - col: indicates which col it is
 *  - turn: track who's turn it is
 *  - mark: function rec'd from Game to update gameBoard
 *  - won: keep tracking if the game has been won by one of players
 * 
 * States:
 *  - circleOrCross: depends on the player, determine whether to drop an O or X
 *  - drop: indicates whether or not the mark should be dropped
 */
const Box = function ({ gameBoard, row, col, turn, mark, won, checkDraw }) {

  const [drop, setDrop] = useState(false);

  function toggle() {
    if (won) return null;
    mark(turn, row, col);
    setDrop(true);
  }

  return (
    <td className={`${row}, ${col}`} key={`${row}, ${col}`} onClick={() => toggle()}>
      {drop ? gameBoard[row][col] : null}
    </td>
  )
}

export default Box