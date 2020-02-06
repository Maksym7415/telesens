import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { promiseReducer} from './reducers/promiseReducer'
import { loginReducer } from './reducers/loginReducer'
import { authorization } from './reducers/actions'

const reducers = combineReducers({
  promise: promiseReducer,
  authorization: loginReducer,
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

if (localStorage.RBTauth) {
    const {password, login} = JSON.parse(localStorage.RBTauth)
    store.dispatch(authorization(password, login))
}

export default store
