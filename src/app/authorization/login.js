import React, { useState } from 'react'
import { connect } from 'react-redux'
import { dive } from '../../functions'
import { authorization } from '../../redux/reducers/actions'
import { Redirect } from 'react-router-dom';

const Login = props => {

  let [login, setLogin] = useState('')
  let [password, setPassword] = useState('')
  let [style, setStyle] = useState('none')

  const changeLogin = e => setLogin(login = e.target.value)
  const changePassword = e => setPassword(password = e.target.value)
  const click = () => {
                        if(login !== '' && password !== '') {
                          props.log(password, login)
                          localStorage.RBTauth = (JSON.stringify({password, login}))
                        } else {
                          setStyle(style = 'block')
                        }
                      }
  if(!props.data) {
    return (
      <div className= 'login'>
        <h3>Authorize</h3>
        <label>Phone number: <input value= {login} onChange= {changeLogin}/></label>
        <label>Password: <input value= {password} onChange= {changePassword}/></label>
        <p style = {{display: style, color: 'red', marginBottom: '5px'}}>Incorrect password of phone number</p>
        <p> To get the password send SMS to number 444 </p>
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
