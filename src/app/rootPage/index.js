import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, getContent, authorization } from '../../redux/reducers/actions.js'
import { dive, defaultSubCat, currentCatSubcat } from '../../functions'
import Genres from './components/genres'
import SubCats from './components/subCats'
import Content from './components/content'

const RootPage = props => {
  let [current, setCurrent] = useState(null)
  let [subCat, setSubCat] = useState(22)

  let style = current === null ? 'none' : 'flex'

  useEffect(() => {
     props.getData()
     props.getContent(subCat)
     if (localStorage.RBTauth) {
      const {password, login} = JSON.parse(localStorage.RBTauth)
      props.auth(password, login)
    }
  }, [current, subCat])

  let catSubCatName = currentCatSubcat(props.data, subCat)

  const changeCurrent = id => setCurrent(current = id)
  const changeSubCat = id => setSubCat(subCat = id)

   return (
     <div className='root-page'>
       <Genres data= {props.data && props.data.map(genre => !genre.parentCatId?  <li onClick = {()=> {changeCurrent(genre.contentCatId); changeSubCat(defaultSubCat(props.data, genre.contentCatId)[0].contentCatId)}} key= {genre.contentCatId}>{genre.catName}</li> : '')}/>

       <SubCats style= {{display: style}} data= {props.data && current !== null && props.data.map(item => item.parentCatId && item.parentCatId === current? <li onClick = {() =>  changeSubCat(item.contentCatId)} key={item.contentCatId}>{item.catName}</li>: '')}/>

       <h3>Content from: <span>{`"${catSubCatName.genre}/${catSubCatName.subCat}"`}</span></h3>

       {props.content ? <Content content= {props.content}/> : <span> Nothing was found </span>}
     </div>
   )
}

export default connect (state => ({
                                    data: dive`${state}promise.categories.payload.data.searchResult.element`,
                                    content: dive`${state}promise.content.payload.data.searchResult.element`,
                                    logged: dive`${state}authorization.payload.data`
                                  }), {getData: getCategories, getContent, auth: authorization}) (RootPage)
