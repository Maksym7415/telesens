const catIdReducer = (state, action) => {
  const actions = {
    AddCat() {
      const {id} = action
      return {
        ...state,
        id
      }
    }
  }

  if (state === undefined) {
    return {}
  }

  if( action.type in actions) {
    return actions[action.type]()
  }

  return state
}

function actionAddId (id) {
  const addId = () => ({type: 'AddCat', id})

  return dispatch =>
    dispatch(addId())
}

export { catIdReducer, actionAddId }
