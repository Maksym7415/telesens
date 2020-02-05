import React from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import Content from '../rootPage/components/content'
import Preloader from '../components/preloader'
import history from '../../routing/history'

const SearchResult = props => {

  return props.redirect ?
            props.data ?
                props.data.element ? (
                  <div>
                    <h3 style= {{fontWeight: '400', padding: '10px 0'}}> Serch results </h3>
                    <Content content= {props.data.element}/>
                  </div>
                ) :
                <p> Nothing was found by your querry </p> :
            <Preloader/> :
        null & history.push('/')
}

export default connect (state => ({
                                  data: dive`${state}promise.search.payload.data.searchResult`,
                                  redirect: dive`${state}promise.content`
                                }))(SearchResult)
