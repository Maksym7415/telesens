import React from 'react'
import { Link } from 'react-router-dom'

const Article = props =>
  <div>
    <div className = 'profile-item-wrapper'>
      <img alt='logo' src= {props.src} onClick= {props.click}/>
      <div style= {{display: props.display}} className= {props.playing === false ? 'animation-wrapper' : 'animation-wrapper animate--animated'}>
          <div style= {{height: '5px', backgroundColor: 'blue', margin: '0', animationDuration: `${props.duration}s`}} className= 'animate'></div>
      </div>
      <p> {props.title} </p>
      <p> {props.artist} <Link to={`/info/${props.id}/${props.catId}`}><i className="fas fa-info-circle"/></Link> </p>
    </div>
    <div>
      <p>Content type: Single </p>
      <p>Date of purchase: {props.purchDate}</p>
      <p>Paid period of validity: {props.validity}</p>
      <button onClick= {props.onClick}> Remove content </button>
    </div>
  </div>

export default Article
