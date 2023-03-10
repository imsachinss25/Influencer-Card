import React from "react"

const directionStyle = {
  left: { transform: 'rotate(-180deg)' },
  right: { transform: 'rotate(180deg)' },
  top: { transform: 'rotate(-90deg)' },
  bottom: { transform: 'rotate(90deg)' }
}

const Arrow =  ({ width = '42', height = '42', fill='grey', direction='bottom' }) => (
  <svg 
    style={directionStyle[direction]}
    width={width} 
    height={height} 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" fill={fill} fillOpacity=".7"/>
  </svg>
)

export default Arrow;