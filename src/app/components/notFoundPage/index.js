import React from 'react'
import history from '../../../routing/history'

const PageNotFound = () => {

  const handleClick = () => history.push('/')

  return (
    <div className= 'not-found-page'>
      <img src= {require('./notFound.jpg')} alt= '404'/>
      <button onClick= {handleClick}> Go home </button>
    </div>
  )
}

export default PageNotFound
