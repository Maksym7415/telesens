import React from 'react'
import { connect } from 'react-redux'
import { dive } from '../../../functions'
import SongCard from './songCard'

const Content = props =>
  <div>
    <span> {props.name} </span>
    {props.content.map(item => <SongCard key= {item.contentNo} catId= {item.contentCatId} id= {item.contentNo} src= {item.imageId} title= {item.title} artist= {item.artist} price= {item.priceModelNo + '$'}/>)}
  </div>

export default Content
