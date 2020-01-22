import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent, buySong } from '../../redux/reducers/actions'

const BuySong = props => {
  let [id, setId] = useState(urlParams(props.match.url))

  let [content, setContent] = useState(null)

  content === null && props.data && setContent(content = searchSong(props.data, +id[id.length-2])[0])

  useEffect(() => {
      props.getContent(+id[id.length-1])
    }, [])

  console.log(content)
  return content !== null ? (
    <div>
      <span> Title: {content.title}</span>
      <span> Artist: {content.artist}</span>
      <span> Purchase price: {content.amountOnetime}$</span>
      <button onClick={()=> props.buy('0000', '0994006502', +content.contentNo, 1)}>Buy</button>
    </div>
  ) : ''
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`}), {getContent, buy: buySong})(BuySong)
