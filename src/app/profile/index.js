import React,{ useState } from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import Article from './components/contentItem'
import ReactPlayer from 'react-player'

const Profile = props => {

  let [playing, setPlaying] = useState(false)
  let [url, setUrl] = useState('')
  let [id, setId] = useState(null)
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
      setId(id = null)
    }
  }

  return (
      <div className= 'profile'>
        <h3> Content </h3>
        {props.data && props.data.publicContentItem && props.data.publicContentItem.map(item => <Article key= {item.contentNo} artist= {item.artist} title= {item.title} id= {item.contentNo} catId= {item.contentCatId} src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId}`} defPlay= {true} prolong= {item.renewable} purchDate= {`${item.createdDt.day}/${item.createdDt.month}/${item.createdDt.year} ${item.createdDt.hour}:${item.createdDt.minute}:${item.createdDt.second}`} validity= {`${item.endDt.day}/${item.endDt.month}/${item.endDt.year}`} playing= {playing} duration= {duration} click= {() => handlePlay(item.contentNo)} display= {id === item.contentNo ? 'block' : 'none'}/>)}

        <ReactPlayer style= {{display: 'none'}} onDuration= {value => setDuration(duration = value)} url= {url} playing= {playing}/>
      </div>
  )
}

export default connect(state => ({data: dive`${state}authorization.payload.data`}))(Profile)
