import React from './react'

/** @jsx React.createElement */
function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div id="foo">
      <h1 style="color:red;">Bar</h1>
      <br />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

const container = document.getElementById('app')
React.render(<App />, container)
