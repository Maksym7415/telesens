import React, { useState } from 'react'
import SongCard from './songCard'
import ReactPlayer from 'react-player'


const Content = props => {

  let [playing, setPlaying] = useState(false)
  let [url, setUrl] = useState('')
  let [id, setId] = useState(null)
  let [progress, setProgress] = useState(null)
  let [duration, setDuration] = useState()


  const handlePlay = (iD) => {
    if (`https://t-rbt.telesens.ua/t-rbt/sound?id=${iD}&type=public` === url) {
      setPlaying(playing = false)
    } else {
      setUrl(url = `https://t-rbt.telesens.ua/t-rbt/sound?id=${iD}&type=public`)
      setPlaying(playing = true)
      setId(id = iD)
    }
    if (playing === false) {
      setUrl(url = '')
      setProgress(progress = null)
      setId(id = null)
    }
  }

  return (
    <div className= 'content'>
      {props.content.map(item => <SongCard play= {playing} duration= {duration} display= {id === item.contentNo ? 'block' : 'none'} url= {url} playSong = {() => handlePlay(item.contentNo)} playing= {playing} key= {item.contentNo} catId= {item.contentCatId} id= {item.contentNo} src= {item.imageId} title= {item.title} class= {progress === null ? 'animation-wrapper' : 'animation-wrapper animate--animated'} artist= {item.artist} price= {item.priceModelNo + '$'}/>)}

      <ReactPlayer style= {{display: 'none'}} onDuration= {value => setDuration(duration = value)} onProgress= {value => setProgress(progress = value.playedSeconds)} url= {url} playing= {playing}/>
    </div>
  )
}

export default Content
