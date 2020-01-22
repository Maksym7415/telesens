import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent, buySong, authorization } from '../../redux/reducers/actions'

const BuySong = props => {
  let [id,] = useState(urlParams(props.match.url))

  let [content, setContent] = useState(null)

  content === null && props.data && setContent(content = searchSong(props.data, +id[id.length-2])[0])

  useEffect(() => {
      props.getContent(+id[id.length-1])
      if (localStorage.RBTauth) {
      const {password, login} = JSON.parse(localStorage.RBTauth)
      props.auth(password, login)
    }
    }, [])
    console.log(props.authorization)
  if (props.authorization || content !== null) {
    return (
      <div>
        <span> Title: {content.title}</span>
        <span> Artist: {content.artist}</span>
        <span> Purchase price: {content.amountOnetime}$</span>
        <button onClick={()=> props.buy('0000', '0994006503', +content.contentNo)}>Buy</button>
      </div>
    )
  } else {
    return <Redirect to='/login'/>
  }
}

export default connect(state => ({data: dive`${state}promise.content.payload.data.searchResult.element`, authorization: dive`${state}authorization.payload.data`}), {getContent, buy: buySong, auth: authorization})(BuySong)
