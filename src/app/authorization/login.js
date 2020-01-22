import React, { useState } from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import { authorization } from '../../redux/reducers/actions'
import { Redirect } from 'react-router-dom';

const Login = props => {

  let [login, setLogin] = useState('')
  let [password, setPassword] = useState('')

  const changeLogin = e => setLogin(login = e.target.value)
  const changePassword = e => setPassword(password = e.target.value)
  const click = () => {
                        login !== '' && password !== '' && props.log(password, login)
                        localStorage.RBTauth = (JSON.stringify({password, login}))
                      }
  if(!props.data) {
    return (
      <div>
        <span>Authorize</span><br/>
        <label>Phone number: <input value= {login} onChange= {changeLogin}/></label>
        <label>Password: <input value= {password} onChange= {changePassword}/></label> <br/>
        <button onClick= {click}>Login</button>
      </div>
    )
  } else {
    return (
      <div>
        <Redirect to= '/'/>
      </div>
    )
  }
}

export default connect(state => ({data: dive`${state}authorization.payload.data`}), {log: authorization})(Login)
