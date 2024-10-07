import { Shuffle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Values from 'values.js';

function Navbar({setAllValues}) {
    const randomClr = () => {
        // Generate a random number and convert it to hexadecimal string representation.
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        // Return the hexadecimal color code with '#' appended.
        return '#' + n.slice(0, 6)
    }

    const [color, setColor] = useState(randomClr())
    const [weight, setWeight] = useState(10)

    const getValues = (color, weight) => {
        if (weight >= 1) {   
            const clr = new Values(color), { log } = console
            setAllValues(clr.all(Number(weight)))
            return clr.all(Number(weight))
        }
    }
    
    useEffect(() => {
        getValues(color, weight)
    }, [color, weight])
    const handleColor = (e) => {
        setColor(c => e.target.value)
    }

    const handleWeight = (e) => {
        setWeight(w => e.target.value)
    }

    const handleShuffle = () => {
        setColor(c => randomClr())
    }
  return (
    <div className='navbar'>
      <input type="text" className="color-input" value={color} onChange={handleColor}/>
      <input type="number" className="weight-input" value={weight} min={1} step={0.1} onChange={handleWeight}/>
      <Shuffle size={26} onClick={handleShuffle}/>
    </div>
  )
}

export default Navbar
