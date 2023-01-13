import * as React from './react'

/** @jsx React.createElement */
const element = (
  <div id="foo">
    <h1 style="color:red;">Bar</h1>
    <br />
    <p>asdfjalksdfjalsdjf</p>
  </div>
)

const container = document.getElementById('app')
React.render(element, container)
