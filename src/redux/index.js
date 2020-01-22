import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { promiseReducer } from './reducers/promiseReducer.js'
import { catIdReducer } from './reducers/catIdReducer'

const reducers = combineReducers({
  promise: promiseReducer,
  categoryID: catIdReducer
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
