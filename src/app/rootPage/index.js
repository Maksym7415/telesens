import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, getContent } from '../../redux/reducers/actions.js'
import { dive, defaultSubCat, currentCatSubcat, catSubCatName } from '../../functions'
import Genres from './components/genres'
import SubCats from './components/subCats'
import Content from './components/content'

const RootPage = props => {
  let [current, setCurrent] = useState(null)
  let [subCat, setSubCat] = useState(22)
  let [nameIdInfo, setNameIdInfo] = useState({})

  useEffect(() => {
     props.getData()
     props.getContent(subCat)
  }, [])

  const changeCurrent = id => setCurrent(current = id)
  const changeSubCat = id => setSubCat(subCat = id)

   return (
     <div className='root-page'>
       <Genres data= {props.data && props.data.map(genre => !genre.parentCatId?  <li className= {current === genre.contentCatId ? 'active':''} onClick = {()=> {changeCurrent(genre.contentCatId); changeSubCat(defaultSubCat(props.data, genre.contentCatId)[0] && defaultSubCat(props.data, genre.contentCatId)[0].contentCatId)}} key= {genre.contentCatId}>{genre.catName}</li> : '')}/>

       <SubCats data= {props.data && current !== null && props.data.map(item => item.parentCatId && item.parentCatId === current? <li onClick = {() =>  changeSubCat(item.contentCatId)} className= {subCat === item.contentCatId ? 'active':''} key={item.contentCatId}>{item.catName}</li>: '')}/>

       <h3>Content from: <span>{`"${current && subCat ? catSubCatName(props.data, current) +'/'+ catSubCatName(props.data, subCat) : ''}"`}</span></h3>

       {props.content ? <Content content= {props.content}/> : <span> Nothing was found </span>}
     </div>
   )
}

export default connect (state => ({
                                    data: dive`${state}promise.categories.payload.data.searchResult.element`,
                                    content: dive`${state}promise.content.payload.data.searchResult.element`
                                  }), {getData: getCategories, getContent}) (RootPage)
