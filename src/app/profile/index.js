import React from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import { Redirect } from 'react-router-dom'
import Article from './components/contentItem'

const Profile = props => {

  return props.data ? (
      <div>
        <h3> Content </h3>
        {props.data.publicContentItem.map(item => <Article artist= {item.artist} title= {item.title} id= {item.contentNo} catId= {item.contentCatId} src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId  }`}/>)}
      </div>
  ) : <Redirect to='/'/>
}

export default connect(state => ({data: dive`${state}promise.login.payload.data`}))(Profile)
