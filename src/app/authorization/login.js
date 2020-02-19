import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { dive } from '../../functions'
import { authorization } from '../../redux/reducers/actions'
import history from '../../routing/history'

const Login = (props) => {
  let [login, setLogin] = useState('')
  let [password, setPassword] = useState('')
  let [style, setStyle] = useState('none')

  const changeLogin = (e) => setLogin(login = e.target.value)
  const changePassword = (e) => setPassword(password = e.target.value)
  const handleClick = () => {
    if (login.match(/^[0-9]{10,12}$/g) !== null && password.match(/^[0-9a-zA-Z]{4,12}$/g) !== null) {
      props.log(password, login)
    } else {
      setStyle(style = 'block')
    }
  }

  useEffect(() => {
    if (props.data) {
      localStorage.RBTauth = (JSON.stringify({password, login}))
      Swal.fire({
        text: `You entered as ${props.data.subscriber.subsIdent}`,
        onClose: () => history.push('/')
      })
    }
    if (props.error) {
      setStyle(style = 'block')
    }
  }, [props.data, props.error])

  return (
    <div className='login'>
      <h3>Authorize</h3>
      <label>
        Phone number:
        <input value={login} onChange={changeLogin} />
      </label>
      <label>
        Password:
        <input value={password} onChange={changePassword} />
      </label>
      <p style={{display: style, color: 'red', marginBottom: '5px'}}>Incorrect password of phone number</p>
      <p> To get the password send SMS to number 444 </p>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default connect((state) => ({
  data: dive`${state}authorization.payload.data`,
  error: dive`${state}authorization.error`
}), {log: authorization})(Login)
