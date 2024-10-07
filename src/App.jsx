import Navbar from './Components/Navbar'
import Colors from './Components/Colors'
import './App.css'
import { useState } from 'react'

function App() {
  const [allValues, setAllValues] = useState([])
  return (
    <div className="app">
      <Navbar setAllValues={setAllValues}/>
      <Colors allValues={allValues}/>
    </div>
  )
}

export default App
