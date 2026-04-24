import { useState } from 'react'
import './App.css'
import HomePage from './component/Homepage'
import Footer from './component/Footer'

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
