import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, getContent } from '../../redux/reducers/actions.js'
import { dive, firstItem, defaultSubCat } from '../../functions'
import Header from './components/header'
import Genres from './components/genres'
import SubCats from './components/subCats'
import { actionAddId } from '../../redux/reducers/catIdReducer'
import Content from './components/content'

const RootPage = props => {
  let [current, setCurrent] = useState(null)
  let [subCat, setSubCat] = useState(22)

  useEffect(() => {
     props.getData()
     props.getContent(subCat)
  }, [current, subCat])


  const changeCurrent = id => setCurrent(current = id)
  const changeSubCat = id => setSubCat(subCat = id)

   return (
     <>
     <Genres data= {props.data && props.data.map(genre => !genre.parentCatId?  <li onClick = {()=> {changeCurrent(genre.contentCatId); changeSubCat(defaultSubCat(props.data, genre.contentCatId)[0].contentCatId)}} key= {genre.contentCatId}>{genre.catName}</li> : '')}/>
     <SubCats data= {props.data && current !== null && props.data.map(item => item.parentCatId && item.parentCatId === current? <li onClick = {() =>  changeSubCat(item.contentCatId)} key={item.contentCatId}>{item.catName}</li>: '')}/>
     {props.content ? <Content content= {props.content}/> : <span> Nothing was found </span>}
     </>
   )
}

export default connect (state => ({data: dive`${state}promise.categories.payload.data.searchResult.element`, content: dive`${state}promise.content.payload.data.searchResult.element`}), {getData: getCategories, getContent}) (RootPage)
