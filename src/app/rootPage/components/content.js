import React from 'react'
import SongCard from './songCard'
import { actionAdd } from '../../../redux/reducers/synchroReducer'
import { dive } from '../../../functions'
import { connect } from 'react-redux'

const Content = props =>
  <div className= 'content'>
    <span> {props.name} </span>
    {props.content.map(item => <SongCard onClick= {() => props.add(item)} key= {item.contentNo} catId= {item.contentCatId} id= {item.contentNo} src= {item.imageId} title= {item.title} artist= {item.artist} price= {item.priceModelNo + '$'}/>)}
  </div>

export default connect(null, {add: actionAdd})(Content)
