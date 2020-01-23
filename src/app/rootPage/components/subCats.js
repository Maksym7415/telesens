import React from 'react'

const SubCats = props =>

  <div className= 'subcats' style= {props.style}>
  <h2> Categories </h2>
    <ul>
    {props.data}
    </ul>
  </div>



export default SubCats
