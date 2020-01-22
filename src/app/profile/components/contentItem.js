import React from 'react'
import { Link } from 'react-router-dom'

const Article = props =>
  <div>
    <div>
      <img alt='logo' src= {props.src}/>
      <p> {props.artist} </p>
      <p> {props.title} </p>
      <Link to={`/info/${props.id}/${props.catId}`}><i className="fas fa-info-circle"/></Link>
    </div>
    <div>
      <p>Content type: Single </p>
      <p>Date of purchase: {props.purchDate}</p>
      <p>Paid period of validity: {props.validity}</p>
      <input type=' checkbox' value= {props.defPlay} onChange= {props.changeDefPlay}/>
      <input type=' checkbox' value= {props.prolong} onChange= {props.changeProlong}/>
      <button onClick= {props.onClick}> Remove content </button>
    </div>
  </div>

export default Article
