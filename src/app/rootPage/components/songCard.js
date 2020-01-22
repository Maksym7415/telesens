import React from 'react'
import { Link } from 'react-router-dom'

const SongCard = props =>
  <div>
    <img alt='logo' src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${props.src}`}/>
    <span> {props.title} </span>
    <span> {props.artist} </span>
    <div>
      <span> {props.price} </span>
      <Link to= {`/buy/${props.id}/${props.catId}`}><i className="fas fa-shopping-cart"></i></Link>
      <Link to= '/gift'> <i className="fas fa-gift"></i> </Link>
      <Link to= {`/info/${props.id}/${props.catId}`}> <i className="fas fa-info-circle"></i> </Link>
    </div>
  </div>

export default SongCard
