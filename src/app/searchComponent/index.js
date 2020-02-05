import React from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import Content from '../rootPage/components/content'

const SearchResult = props => {

  return props.data ? props.data.element ? (
    <div>
      <h3 style= {{fontWeight: '400', padding: '10px 0'}}> Serch results </h3>
      <Content content= {props.data.element}/>
    </div>
  ) : <p> Nothing was found by your querry </p> : null
}

export default connect (state => ({data: dive`${state}promise.search.payload.data.searchResult`}))(SearchResult)
