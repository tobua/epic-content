import { render } from 'epic-jsx'
import { Slot } from '../client'
import { Richtext } from '../ui'

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>epic-content</h1>
      <Slot>Slot</Slot>
      <Richtext />
    </div>
  )
}

render(<App />)
