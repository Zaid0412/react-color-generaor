import React from 'react'
import ColorCard from './ColorCard'

function Colors({allValues}) {
  return (
    <div className='colors'>
      {allValues.map((value, i) => {
        console.log(value)
        return (
            <ColorCard color={value} key={i} />
        )
      })}
    </div>
  )
}

export default Colors
