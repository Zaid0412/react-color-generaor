import { Files } from 'lucide-react'
import React from 'react'

function ColorCard({color}) {
    let isLight = color.type == 'tint' && color.weight > 50 ? true : false

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${color.hex}`);
        console.log(color.hex)
    }

  return (
    <div className={`color-card ${isLight ? '' : 'isLight'} ${color.type == 'base' ? 'base-clr' : ''}` } style={{backgroundColor: `#${color.hex}`}}>
        <p className="weight">{color.weight.toFixed(1)}%</p>
        <Files color={isLight ? 'black' : 'white'} className={isLight ? '' : 'whiteIcon'} onClick={handleCopy}/>
        <h2>#{color.hex}</h2>
    </div>
  )
}

export default ColorCard
