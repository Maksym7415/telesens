import React from 'react'
import { Link } from 'react-router-dom'

const Header = props =>
  <>
    <header>
      <nav>
        <Link to= '/'> Catalog </Link>
        <Link to= '/news'> News </Link>
        <Link to= '/myProfile'> My Profile </Link>
        <Link to= '/login'> Login </Link>
      </nav>
      <div>
        <img alt= 'logo' src=''/>
        <div>
          <input value= {props.value} onChange = {props.onChange}/>
          <button onClick = {props.onClick}><i className="fas fa-search"/></button>
        </div>
      </div>
    </header>
  </>


export default Header
