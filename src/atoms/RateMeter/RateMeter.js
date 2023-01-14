import React from 'react';

// Style
import './style.css';

const RateMeter = React.memo(({ performance }) => {
  const [guagePoint, setGuagePoint] = React.useState(null);
  
  React.useEffect(() => {
    setGuagePoint(performance)
  }, [performance])

  return (
    <div className='rate-meter-wrapper'>
    <div className='rate-meter'>
      <div className='inner-content'>
        <div className={`needle needle-${guagePoint}`}>
        </div>
      </div>
    </div>
    </div>
  )
})

export default RateMeter