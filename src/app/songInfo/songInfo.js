import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent } from '../../redux/reducers/actions'

const SongInfo = props => {

  let [id] = useState(urlParams(props.match.url))
  let [content, setContent] = useState()
  let [progressStyle, setProgressStyle] = useState('0%')
  let [position, setPosition] = useState()
  let [audio] = useState(new Audio())
  let [currentTime, setCurrentTime] = useState(new Audio().currentTime)
  let [int, setInt] = useState()


  !content && props.data && setContent(content = searchSong(props.data, +id[id.length-2]))
  let progress = 0
  let changeProgress = () => {
    setInt(int = setInterval(() =>{
      setCurrentTime(currentTime = audio.currentTime)
      progress = Math.round(currentTime)*100/Math.round(audio.duration)
      setProgressStyle(progressStyle = `${progress}%`)
    }, 500))
  }

  const handlePlay = () => {
    if (currentTime === 0) {
      setPosition(position = id)
      audio.src = `https://t-rbt.telesens.ua/t-rbt/sound?id=${content.contentNo}&type=public`
      audio.play()
      changeProgress()
    } else {
      clearInterval(int)
      setCurrentTime(currentTime = 0)
      setProgressStyle(progressStyle = '0%')
      audio.pause()
    }
  }

  audio.onended = () => {
    clearInterval(int)
    setProgressStyle(progressStyle = '0%')
    setPosition(position = null)
    setCurrentTime(currentTime = new Audio().currentTime)
  }

  useEffect(() => {
      props.getContent(+id[id.length-1])
    }, [])

  return content ? (
  <div className= 'song-info'>
    <h3> Content information </h3>
    <div>
      <div>
        <img alt='logo' onClick= {handlePlay} src={ content.imageId? `https://t-rbt.telesens.ua/t-rbt/image?id=${content.imageId}`: ''}/>
        <div style= {{flexDirection: 'row'}} className= {currentTime !== 0 ? 'activeSong' : 'unActiveSong'}>
          <div style= {{height: '5px', padding: '0', margin: '0', backgroundColor: 'blue', width: progressStyle}}></div>
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
  </div>
) : ''
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`}), {getContent})(SongInfo)
