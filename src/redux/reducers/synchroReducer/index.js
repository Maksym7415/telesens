const synchroReducer = (state = {}, action) => {
  const actions = {
    ADD () {
      const {name, data} = action
      return {
        [name]: data
      }
    },
    DEL () {
      delete state[action.name]
      return {
        ...state
      }
    }
  }

  if(action.type in actions) {
    return actions[action.type]()
  }

  return state
}

const actionAdd =  (name, data) => {
  const add = () => ({type: 'ADD', name, data})

  return dispatch => {
    dispatch(add())
  }
}

const actionDel = name => {
  const del = () => ({type: 'DEL', name})

  return dispatch => {
    dispatch(del())
  }
}

export { synchroReducer, actionAdd, actionDel }
