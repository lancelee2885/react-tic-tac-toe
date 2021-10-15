import React, {useState} from 'react';

/** Box: single box in the table
 * 
 * Props: 
 *  - row: indicates which row it is
 *  - col: indicates which col it is
 *  - turn: track who's turn it is
 *  - mark: function rec'd from Game to update gameBoard
 * 
 * States:
 *  - circleOrCross: depends on the player, determine whether to drop an O or X
 *  - drop: indicates whether or not the mark should be dropped
 */
const Box = function ({row, col, turn, mark}) {
  
  const [circleOrCross, setCircleOrCross] = useState();
  const [drop, setDrop] = useState(false);

  function toggle() {
    mark(turn, row, col);
    if (!drop) {
      if (turn === 'p1'){
        setCircleOrCross('X');
      } else {
        setCircleOrCross('O')
      }
    }
    setDrop(true);
  }

  return (
    <td className={`${row}, ${col}`} key={`${row}, ${col}`} onClick={() => toggle()}>
      {drop ? circleOrCross : null}
    </td>
  )
}

export default Box