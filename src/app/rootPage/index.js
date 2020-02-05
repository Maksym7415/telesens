import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, getContent } from '../../redux/reducers/actions.js'
import { dive, defaultSubCat, catSubCatName } from '../../functions'
import Genres from './components/genres'
import SubCats from './components/subCats'
import Content from './components/content'
import Preloader from '../components/preloader'

const RootPage = props => {
  let [current, setCurrent] = useState(null)
  let [subCat, setSubCat] = useState(22)

  useEffect(() => {
     props.getContent(subCat)
  }, [subCat])

  useEffect(() => {
    props.getData()
  }, [])

  const handleClickGenre = (data, catId) => {
    setCurrent(catId)
    setSubCat(defaultSubCat(data, catId)[0] && defaultSubCat(data, catId)[0].contentCatId)
  } /*here in changeSubCat() I'm cheking parentCatId for existance of contentCatId, because category 'Для детей' haven't it*/

   return (
     <div className='root-page'>
       {props.data ? <Genres data= {props.data.map(genre => !genre.parentCatId?  <li className= {current === genre.contentCatId ? 'active':''} onClick = {()=> handleClickGenre(props.data, genre.contentCatId)} key= {genre.contentCatId}>{genre.catName}</li> : '')}/> : <Preloader/>}

       {props.contentPreload === 'RESOLVED' ? <SubCats data= {props.data && current !== null && props.data.map(item => item.parentCatId && item.parentCatId === current? <li onClick = {() =>  setSubCat(item.contentCatId)} className= {subCat === item.contentCatId ? 'active':''} key={item.contentCatId}>{item.catName}</li>: '')}/> : <Preloader/>}

       <h3>Content from: <span>{`${current && subCat ? catSubCatName(props.data, current) +'/'+ catSubCatName(props.data, subCat) :''}`}</span></h3>

       {props.content ? <Content content= {props.content}/> : <span> Nothing was found </span>}
     </div>
   )
}

export default connect (state => ({
                                    data: dive`${state}promise.categories.payload.data.searchResult.element`,
                                    content: dive`${state}promise.content.payload.data.searchResult.element`,
                                    contentPreload: dive`${state}promise.content.status`,
                                  }), {getData: getCategories, getContent}) (RootPage)
