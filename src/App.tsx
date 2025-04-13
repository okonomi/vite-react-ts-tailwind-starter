import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">Count: {count}</h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCount(count + 1)}
            className="rounded bg-blue-500 px-3 py-1 text-white"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={() => setCount(count - 1)}
            className="rounded bg-red-500 px-3 py-1 text-white"
          >
            Decrement
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="rounded bg-gray-500 px-3 py-1 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
