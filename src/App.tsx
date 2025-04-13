import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

export default App
