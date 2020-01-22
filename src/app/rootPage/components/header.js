import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dive } from '../../../functions'
import { logout } from '../../../redux/reducers/actions'

const Header = props => {
  
  return (
    <>
      <header>
        <nav>
          <Link to= '/'> Catalog </Link>
          <Link to= '/news'> News </Link>
          <Link to= '/profile'> My Profile </Link>
          {props.data && props.data.status === 200 ? <button onClick= {props.logout}>Logout</button> : <Link to= '/login'> Login </Link>}
        </nav>
        <div>
          <div>
            <span> Your favorite melodies as a ring back tone!</span>
          </div>
          <div>
            <input value= {props.value} onChange = {props.onChange}/>
            <button onClick = {props.onClick}><i className="fas fa-search"/></button>
          </div>
        </div>
      </header>
    </>
  )
}

export default connect(state => ({data: dive`${state}authorization.payload`}), {logout})(Header)
