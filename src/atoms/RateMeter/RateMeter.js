import React from 'react';

// Style
import './style.css';

const RateMeter = React.memo(() => {

  return (
    <div className='rate-meter-wrapper'>
    <div className='rate-meter'>
      <div className='inner-content'>
        <div className='needle'>
        </div>
      </div>
    </div>
    </div>
  )
})

export default RateMeter