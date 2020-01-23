import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { dive } from '../../functions'
import Article from './components/contentItem'
import { authorization } from '../../redux/reducers/actions'

const Profile = props => {


  return (
      <div className= 'profile'>
        <h3> Content </h3>
        {props.data && props.data.publicContentItem.map(item => <Article key= {item.contentNo} artist= {item.artist} title= {item.title} id= {item.contentNo} catId= {item.contentCatId} src= {`https://t-rbt.telesens.ua/t-rbt/image?id=${item.imageId}`} defPlay= {true} prolong= {item.renewable} purchDate= {`${item.createdDt.day}/${item.createdDt.month}/${item.createdDt.year} ${item.createdDt.hour}:${item.createdDt.minute}:${item.createdDt.second}`} validity= {`${item.endDt.day}/${item.endDt.month}/${item.endDt.year}`}/>)}
      </div>
  )
}

export default connect(state => ({data: dive`${state}authorization.payload.data`}), {auth: authorization})(Profile)
