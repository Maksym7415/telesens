import React from 'react'
import history from '../../routing/history'

const Reject = props =>
  <div>
    <h3>Error</h3>
    <p>Content already in box</p>
    <button onClick= {history.push('/')}>Cancel</button>
  </div>

export default Reject
