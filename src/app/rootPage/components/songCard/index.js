import React from 'react'
import { Link } from 'react-router-dom'

const SongCard = props => {


  return (
    <div className= 'song-card'>
      <img onClick= {props.playSong} alt='logo' src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${props.src}`}/>
      <div className= {props.progressClass}>
        <div  style= {props.progressStyle}></div>
      </div>
      <span> {props.title} </span>
      <span> {props.artist} </span>
      <div>
        <span> {props.price} </span>
        <Link onClick= {props.onClick} to= {`/buy/${props.id}/${props.catId}`}><i className="fas fa-shopping-cart"></i></Link>
        <Link to= '/gift'> <i className="fas fa-gift"></i> </Link>
        <Link to= {`/info/${props.id}/${props.catId}`}> <i className="fas fa-info-circle"></i> </Link>
      </div>
    </div>
  )
}

export default SongCard
