import React from 'react';

const ResetBtn = function ({reset}) {

  return (
    <button 
      type='button' 
      className='reset-btn' 
      onClick={() => reset()}>
      Reset
    </button>
  )
}

export default ResetBtn;