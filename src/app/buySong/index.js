import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent, buySong } from '../../redux/reducers/actions'

const BuySong = props => {
  let [id,] = useState(urlParams(props.match.url))

  let [content, setContent] = useState(null)

  content === null && props.data && setContent(content = searchSong(props.data, +id[id.length-2])[0])

  useEffect(() => {
      props.getContent(+id[id.length-1])
  }, [])

  const {password, login} = JSON.parse(localStorage.RBTauth)

  if (content !== null) {
    return (
      <div className= 'buy'>
        <h3>Content purchase</h3>
        <p> Title: {content.title}</p>
        <p> Artist: {content.artist}</p>
        <p> Purchase price: {content.amountOnetime}$</p>
        <hr/>
        <button onClick={()=> props.buy(password, login, +content.contentNo)}>Buy</button>
      </div>
    )
  } else return ''
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`, purchase: dive`${state}promise.buy.payload.status`}), {getContent, buy: buySong})(BuySong)
