import { useState } from "react"
import Selects from "./Selects"

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 }
]

const App = () => {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])

  return (
    <div>
      <Selects options={options} value={value} onChange={option => setValue(option)} />
    </div>
  )
}

export default App