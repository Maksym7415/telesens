const synchroReducer = (state, action) => {
  const actions = {
    ADDSong () {
      const {song} = action
      return {
        song
      }
    },
    DELSong () {
      return {}
    }
  }

  if (state === undefined) {
    return {}
  }

  if(action.type in actions) {
    return actions[action.type]()
  }

  return state
}

function actionAdd (song) {
  const addSong = () => ({type: 'ADDSong', song})

  return dispatch => {
    dispatch(addSong())
  }
}

export { synchroReducer, actionAdd }
