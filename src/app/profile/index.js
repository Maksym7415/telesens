import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import Article from './components/contentItem'
import { authorization } from '../../redux/reducers/actions'
import { actionAdd, actionDel } from '../../redux/reducers/synchroReducer'
import ReactPlayer from 'react-player'

const Profile = props => {

  let [playing, setPlaying] = useState(false)
  let [url, setUrl] = useState('')
  let [id, setId] = useState(null)
  let [progress, setProgress] = useState(null)
  let [duration, setDuration] = useState()

  const handlePlay = (id) => {
    if (`https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public` === url) {
      setPlaying(playing = false)
    } else {
      setUrl(url = `https://t-rbt.telesens.ua/t-rbt/sound?id=${id}&type=public`)
      setPlaying(playing = true)
      setId(id = id)
    }
    if (playing === false) {
      setUrl(url = '')
      setProgress(progress = null)
      setId(id = null)
    }
  }

  useEffect(() => {
    const {password, login} = JSON.parse(localStorage.RBTauth)
    props.auth(password, login)
    props.addUrl('url', props.match.url)
    return () => {
      props.delUrl('url')
    }
  }, [])

  return (
      <div className= 'profile'>
        <h3> Content </h3>
        {props.data && props.data.publicContentItem && props.data.publicContentItem.map(item => <Article key= {item.contentNo} artist= {item.artist} title= {item.title} id= {item.contentNo} catId= {item.contentCatId} src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId}`} defPlay= {true} prolong= {item.renewable} purchDate= {`${item.createdDt.day}/${item.createdDt.month}/${item.createdDt.year} ${item.createdDt.hour}:${item.createdDt.minute}:${item.createdDt.second}`} validity= {`${item.endDt.day}/${item.endDt.month}/${item.endDt.year}`} playing= {playing} duration= {duration} click= {() => handlePlay(item.contentNo)} display= {id === item.contentNo ? 'block' : 'none'}/>)}

        <ReactPlayer style= {{display: 'none'}} onDuration= {value => setDuration(duration = value)} onProgress= {value => setProgress(progress = value.playedSeconds)} url= {url} playing= {playing}/>
      </div>
  )
}

export default connect(state => ({data: dive`${state}authorization.payload.data`}), {auth: authorization, addUrl: actionAdd, delUrl: actionDel})(Profile)
