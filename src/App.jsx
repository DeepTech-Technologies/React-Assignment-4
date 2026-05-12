import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleStep(e){
    setStep(Number(e.target.value))
  }

  function handleIncrement() {
    setCount((prevCount) => prevCount + step)
  }

    function handleDecrement() {
    // setCount((prevCount) => prevCount)
    setCount((prevCount) => prevCount <= 0 ? setCount(0) : prevCount - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <>
      <p>{count}</p>
      <span>Enter Counter Step:</span>
      <input type="text" value= {step} onChange={handleStep} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
