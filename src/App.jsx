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
    setCount((prevCount) => prevCount <= 0 ? setCount(0) : prevCount - 1)
  }

  function handleReset(e) {
    setCount(0)
  }

  return (
    <div className = "App">
      <p>{count}</p>
      <span>Enter Counter Step:</span>
      <input type="text" value= {step} onChange={handleStep} />
      <div className="btn-section">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  )
}

export default App
