import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent } from '../../redux/reducers/actions'
import ReactPlayer from 'react-player'

const SongInfo = props => {

  let [id] = useState(urlParams(props.match.url)) //setting subcat id and contentId from url
  let [content, setContent] = useState()
  let [playing, setPlaying] = useState(false)
  let [url, setUrl] = useState('')
  let [duration, setDuration] = useState()


  const handlePlay = () => {
      setUrl(url = `https://t-rbt.telesens.ua/t-rbt/sound?id=${content.contentNo}&type=public`)
      setPlaying(playing = !playing)
    if (playing === false) {
      setUrl(url = '')
    }
  }


  !content && props.data && setContent(content = searchSong(props.data, +id[id.length-2])) //searching current song

  useEffect(() => {
      props.getContent(+id[id.length-1]) //getting content by current subCat
    }, [])

  return content ? (
  <div className= 'song-info'>
    <h3> Content information </h3>
    <div >
      <div className= 'image-container'>
        <img alt='logo' onClick= {handlePlay} src={ content.imageId? `https://t-rbt.telesens.ua/t-rbt/image?id=${content.imageId}`: ''}/>
        <div style= {{display: playing === false ? 'none' : 'block'}} className= {playing === false ? 'animation-wrapper' : 'animation-wrapper animate--animated'}>
          <div style= {{margin: '0', animationDuration: `${duration}s`}} className= 'animate'></div>
        </div>
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
    <ReactPlayer style= {{display: 'none'}} onDuration= {value => setDuration(duration = value)} url= {url} playing= {playing}/>
  </div>
) : ''
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`}), {getContent})(SongInfo)
