import { useState } from 'react'
import Intro from './Components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <Intro/> 
    </div>
  )
}

export default App
