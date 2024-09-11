import { useState } from "react"
import ColorPicker from "./components/color-picker"
import { ReactInkSlate } from "./editor"

const App = () => {
  const [value, setValue] = useState("")
  return (
    <div className="ink-max-w-screen-md ink-mx-auto ink-py-4">
      <ReactInkSlate />
      <ColorPicker color={value} onChange={setValue}/>
    </div>
  )
}

export default App