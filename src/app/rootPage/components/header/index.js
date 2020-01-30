import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dive } from '../../../../functions'
import { logout } from '../../../../redux/reducers/actions'

const Header = props => {

  return (
    <>
      {console.log(props.match)}
      <header>
        <div>
          <h1>
            T-RBT Service
          </h1>
          <ul>
            <li>EN</li>
            <li>|</li>
            <li>RU</li>
          </ul>
        </div>
        <nav>
          <Link to= '/'> Catalog </Link>
          <Link to= '/news'> News </Link>
          <Link to= '/profile'> My Profile </Link>
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
              props.data && props.urlParam === '/profile' ?
              <span> Subcriber {props.data.subsIdent} </span> :
              <span> Your favorite melodies as a ring back tone!</span>
            }
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

export default connect(state => ({
                                  data: dive`${state}authorization.payload.data.subscriber`,
                                  urlParam: dive`${state}synchro.url`
                                }), {logout})(Header)
