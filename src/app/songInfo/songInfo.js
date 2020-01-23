import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent } from '../../redux/reducers/actions'

const SongInfo = props => {

  let [id,] = useState(urlParams(props.match.url))

  let [content, setContent] = useState(null)

  content === null && props.data && setContent(content = searchSong(props.data, +id[id.length-2])[0])

  useEffect(() => {
      props.getContent(+id[id.length-1])
    }, [])

  return content !== null ? (
  <div className= 'song-info'>
    <h3> Content information </h3>
    <div>
      <div>
        <img alt='logo' src={`https://t-rbt.telesens.ua/t-rbt/image?id=${content.imageId}`}/>
      </div>
      <div>
        <span> Content Type: Single </span>
        <span> Title: {content.title} </span>
        <span> Artist: {content.artist} </span>
        <span> Copyright: {content.copyright} </span>
        <span> Purchase price: {content.amountOnetime} </span>
        <span> Prolongation price: {content.amountPeriodic} </span>
        <span> Charge period (days): {content.chargePeriod} </span>
        <span> Link: <a href={`https://t-rbt.telesens.ua/t-rbt/?id=${content.contentNo}`}>{`https://t-rbt.telesens.ua/t-rbt/?id=${content.contentNo}`} </a></span>
        <span> ID: {content.contentNo}</span>
      </div>
    </div>
  </div>
) : ''
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`}), {getContent})(SongInfo)
