import React, { useState } from 'react'
import SongCard from './songCard'
import { actionAdd } from '../../../redux/reducers/synchroReducer'
import { connect } from 'react-redux'

const Content = props => {

  let [progressStyle, setProgressStyle] = useState('0%')
  let [position, setPosition] = useState()
  let [audio, setAudio] = useState(new Audio)
  let [currentTime, setCurrentTime] = useState(new Audio().currentTime)
  let [int, setInt] = useState()

    let progress = 0
    let changeProgress = () => {
      setInt(int = setInterval(() =>{
        setCurrentTime(currentTime = audio.currentTime)
        progress = Math.round(currentTime)*100/Math.round(audio.duration)
        setProgressStyle(progressStyle = `${progress}%`)
        console.log(audio.currentTime)
      }, 500))
    }

    const handlePlay = (id) => {
      if (currentTime === 0) {
        setPosition(position = id)
        audio.src = `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`
        audio.play()
        changeProgress()
      } else {
        clearInterval(int)
        setCurrentTime(currentTime = 0)
        setProgressStyle(progressStyle = '0%')
        audio.pause()
        console.log(currentTime)
      }
    }

    audio.onended = () => {
      clearInterval(int)
      setProgressStyle(progressStyle = '0%')
      setPosition(position = null)
      setCurrentTime(currentTime = new Audio().currentTime)
    }
  return (
    <div className= 'content'>
      {props.content.map(item => <SongCard playSong= {() => handlePlay(item.contentNo)} progressStyle = {{margin: '0', backgroundColor: 'blue', width: progressStyle}} progressClass= {position === item.contentNo && currentTime !== 0 ? 'activeSong' : 'unActiveSong'} onClick= {() => props.add(item)} key= {item.contentNo} catId= {item.contentCatId} id= {item.contentNo} src= {item.imageId} title= {item.title} artist= {item.artist} price= {item.priceModelNo + '$'}/>)}
    </div>
  )
}

export default connect(null, {add: actionAdd})(Content)
