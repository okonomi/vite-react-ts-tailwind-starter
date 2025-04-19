import { Minus, Plus, RotateCcw } from "lucide-react"
import { useState } from "react"
import { Button } from "./components/Button"

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">Count: {count}</h1>
        <div className="flex gap-2">
          <Button color="blue" onClick={() => setCount(count + 1)}>
            <Plus className="inline pe-1" size={16} /> Increment
          </Button>
          <Button color="red" onClick={() => setCount(count - 1)}>
            <Minus className="inline pe-1" size={16} /> Decrement
          </Button>
          <Button color="gray" onClick={() => setCount(0)}>
            <RotateCcw className="inline pe-1" size={16} /> Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
