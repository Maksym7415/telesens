import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, test } from '../../redux/reducers/actions.js'
import { dive } from '../../functions'
import Header from './components/header'
import Genres from './components/genres'

const RootPage = props => {

   useEffect(() => {
     props.getData()
   }, [])

   return (
     <>
     <Header />
     <Genres data= {props.data && props.data.map(genre => <li>{genre.catName}</li>)}/>
     </>
   )
 }

export default connect (state => ({data: dive`${state}promise.categories.payload.data.searchResult.element`}), {getData: getCategories}) (RootPage)
