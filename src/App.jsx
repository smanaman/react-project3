import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }
  const minus = () => {
    if (count == 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <>


      <div className="main-btn">
        <div className="p">
        <p>{count}</p>
        </div>
        <div className="btn-group-one">
          <button onClick={() => minus()}><i class="fa-solid fa-minus"></i></button>
       
          <button onClick={() => add()}><i class="fa-solid fa-plus"></i></button>
        </div>
        <div className="reset-btn">
          <button onClick={() => reset()}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
