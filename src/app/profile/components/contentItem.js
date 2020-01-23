import React from 'react'
import { Link } from 'react-router-dom'

const Article = props =>
  <div>
    <div>
      <img alt='logo' src= {props.src}/>
      <p> {props.title} </p>
      <p> {props.artist} <Link to={`/info/${props.id}/${props.catId}`}><i className="fas fa-info-circle"/></Link> </p>
    </div>
    <div>
      <p>Content type: Single </p>
      <p>Date of purchase: {props.purchDate}</p>
      <p>Paid period of validity: {props.validity}</p>
      <label><input type='checkbox' checked= {props.defPlay}/> default play</label>
      <label><input type='checkbox' checked= {props.prolong}/> autoprolongation</label>
      <button onClick= {props.onClick}> Remove content </button>
    </div>
  </div>

export default Article
