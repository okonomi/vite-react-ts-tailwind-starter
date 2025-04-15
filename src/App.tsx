import { Minus, Plus, RotateCcw } from "lucide-react"
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
            className="flex items-center rounded bg-blue-500 px-3 py-1 text-white"
          >
            <Plus className="inline pe-1" size={16} />
            Increment
          </button>
          <button
            type="button"
            onClick={() => setCount(count - 1)}
            className="flex items-center rounded bg-red-500 px-3 py-1 text-white"
          >
            <Minus className="inline pe-1" size={16} />
            Decrement
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="flex items-center rounded bg-gray-500 px-3 py-1 text-white"
          >
            <RotateCcw className="inline pe-1" size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
