import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { urlParams, dive, searchSong } from '../../functions'
import { getContent, buySong, delSong } from '../../redux/reducers/actions'

const BuySong = props => {


  const {password, login} = JSON.parse(localStorage.RBTauth)

  if (props.data && !props.purchase) {
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
  } else return <Redirect to= '/'/>
}

export default connect(state => ({data: dive`${state}synchro.song`, purchase: dive`${state}promise.buy.payload.data`}), {getContent, buy: buySong, del: delSong})(BuySong)
