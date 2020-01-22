import React, { useState, useEffect } from 'react'

const SubCats = props =>

  <div>
  <span> Categories </span>
    <ul>
    {props.data}
    </ul>
  </div>



export default SubCats
