import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { dive, urlParams, searchSong } from '../../functions'
import { getContent, buySong } from '../../redux/reducers/actions'
import { actionDeletePromise } from '../../redux/reducers/promiseReducer'
import history from '../../routing/history'
import Swal from 'sweetalert2'

const BuySong = props => {

  let [content, setContent] = useState()
  let [id] = useState(urlParams(props.match.url))

  useEffect(() => {
    if (props.purchaseOk)  {
      Swal.fire({
        text: 'Operation is performed successfully',
        onClose: () => props.delSong('buy') && history.push('/')
      })
    } else {
      if (props.purchaseEr) {
        Swal.fire({
          text: 'Content already in box',
          onClose: () => props.delSong('buy') && history.push('/')
        })
      }
    }
  })
  {console.log(props.match)}
  !content && props.data && setContent(content = searchSong(props.data, +id[id.length-2]))

  useEffect (() => {
    props.getContent(+id[id.length-1])
  }, [])

  const {password, login} = JSON.parse(localStorage.RBTauth)


    return (
      <div className= 'buy'>
        <h3>Content purchase</h3>
        <p> Title: {content && content.title}</p>
        <p> Artist: {content && content.artist}</p>
        <p> Purchase price: {content && content.amountOnetime}$</p>
        <hr/>
        <button onClick={()=> props.buy(password, login, +content.contentNo)}>Buy</button>
      </div>
    )
}

export default connect(state => ({
                                  data: dive`${state}promise.content.payload.data.searchResult.element`,
                                  purchaseOk: dive`${state}promise.buy.payload.data`,
                                  purchaseEr: dive`${state}promise.buy.error`
                                }),
                                {
                                  getContent,
                                  buy: buySong,
                                  delSong: actionDeletePromise
                                })(BuySong)
