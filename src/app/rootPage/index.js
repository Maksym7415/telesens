import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, test } from '../../redux/reducers/actions.js'
import { dive } from '../../functions'

const RootPage = props => {

   useEffect(() => {
     props.getData()
   }, [])

   return (
     <div>
          Hello world
     </div>
   )
 }

export default connect (state => ({data: dive`${state}promise.categories`}), {getData: getCategories}) (RootPage)
