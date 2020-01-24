import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { promiseReducer } from './reducers/promiseReducer'
import { loginReducer } from './reducers/loginReducer'
import { authorization } from './reducers/actions'

const reducers = combineReducers({
  promise: promiseReducer,
  authorization: loginReducer
})

const store = createStore(
  reducers, applyMiddleware(thunk)  
)
if (localStorage.RBTauth) {
    const {password, login} = JSON.parse(localStorage.RBTauth)
    store.dispatch(authorization(password, login))
}

export default store
