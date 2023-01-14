import React from "react"

const directionStyle = {
  left: { transform: 'rotate(-180deg)' },
  right: { transform: 'rotate(180deg)' },
  top: { transform: 'rotate(-90deg)' },
  bottom: { transform: 'rotate(90deg)' }
}

const CircularArrow =  ({ width = '42', height = '42', fill='grey', direction='right' }) => (
  <svg  style={directionStyle[direction]} xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path fill={"rgb(20, 139, 114)"} d="m12 15.65 1.05-1.05-1.85-1.85h4.55v-1.5H11.2l1.85-1.85L12 8.35 8.35 12Zm0 5.85q-1.975 0-3.712-.75Q6.55 20 5.275 18.725T3.25 15.712Q2.5 13.975 2.5 12t.75-3.713Q4 6.55 5.275 5.275T8.288 3.25Q10.025 2.5 12 2.5t3.713.75q1.737.75 3.012 2.025t2.025 3.012q.75 1.738.75 3.713t-.75 3.712q-.75 1.738-2.025 3.013t-3.012 2.025q-1.738.75-3.713.75Zm0-1.5q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
  </svg>
)

export default CircularArrow;