import React from 'react'
import history from '../../routing/history'

const SubmitPurchase = props =>
  <div>
    <h3>Succes</h3>
    <p>Operation is performed succesfully</p>
    <button onClick= {history.push('/')}>Cancel</button>
  </div>

export default SubmitPurchase
