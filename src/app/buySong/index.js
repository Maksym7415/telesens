import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import { getContent, buySong, delSong } from '../../redux/reducers/actions'
import history from '../../routing/history'
import Swal from 'sweetalert2'

const BuySong = props => {

  useEffect(() => {
    if(dive`${props.purchase}payload.data`)  {
      Swal.fire({
        text: 'Operation is performed successfully',
        onClose: () => props.del() && history.push('/')
      })
    } else {
      if (dive`${props.purchase}error`) {
        Swal.fire({
          text: 'Content already in box',
          onClose: () => props.del() && history.push('/')
        })

      }
    }
  })

  const {password, login} = JSON.parse(localStorage.RBTauth)

  if (props.data) {
    return (
      <div className= 'buy'>
        <h3>Content purchase</h3>
        <p> Title: {props.data.title}</p>
        <p> Artist: {props.data.artist}</p>
        <p> Purchase price: {props.data.amountOnetime}$</p>
        <hr/>
        <button onClick={()=> props.buy(password, login, +props.data.contentNo)}>Buy</button>
      </div>
    )
  } else return ''
}

export default connect(state => ({data: dive`${state}synchro.song`, purchase: dive`${state}promise.buy`}), {getContent, buy: buySong, del: delSong})(BuySong)
