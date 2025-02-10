import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const add=()=>{
    setCount(count+1)
  }
  const minus=()=>{
if(count==0){
  setCount(0)
}else{
  setCount(count-1)
}
  }
  return (
  <>
  <button onClick={()=>add()}>+</button>
  <p>{count}</p>
  <button onClick={()=>minus()}>-</button>
  </>
  )
}

export default App
