import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import P5Sketch from './P5Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <P5Sketch/>
      
    </>
  )
}

export default App
