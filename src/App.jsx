import { useState } from 'react'
import './App.css'
import HomePage from './component/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HomePage></HomePage>
      </div>
    </>
  )
}

export default App
