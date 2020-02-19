import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dive } from '../../../../functions'
import { logout, searchSong } from '../../../../redux/reducers/actions'
import history from '../../../../routing/history'
import { withRouter } from "react-router"

const Header = props => {

  let [query, setQuery] = useState('')
  const handleChange = e => setQuery(query = e.target.value)
  const handleHome = () => history.push('/')

  const handleClick = () => {
    if (query !== '') {
      props.searchSong(query)
      history.push('/search')
      setQuery(query = '')
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <>
      <header>
        <div>
          <h1 onClick= {handleHome}>
            T-RBT Service
          </h1>
          <ul>
            <li>EN</li>
            <li>|</li>
            <li>RU</li>
          </ul>
        </div>
        <nav>
          <Link className= {props.history.location.pathname === '/' ? 'active-nav-link' : ''} to='/'> Catalog </Link>
          <Link className= {props.history.location.pathname === '/news' ? 'active-nav-link' : ''} to='/news'> News </Link>
          <Link className= {props.history.location.pathname === '/profile' ? 'active-nav-link' : ''} to='/profile'> My Profile </Link>
          {props.data ?
            <div>
              <span>You entered as {props.data.subsIdent}</span>
              <button onClick= {props.logout}>Logout</button>
            </div> :
            <Link to= '/login'> Login </Link>}
        </nav>
        <div>
          <div>
            {
              props.data && props.history.location.pathname === '/profile' ?
              <span> Subcriber {props.data.subsIdent} </span> :
              <span> Your favorite melodies as a ring back tone!</span>
            }
          </div>
          <div>
            <input value= {query} onKeyDown= {handleKeyDown} onChange = {handleChange}/>
            <button onClick = {handleClick}><i className="fas fa-search"/></button>
          </div>
        </div>
      </header>
    </>
  )
}


export default withRouter(connect(state => ({data: dive`${state}authorization.payload.data.subscriber`}), {logout, searchSong})(Header))
