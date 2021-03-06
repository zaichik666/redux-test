const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'

const initialState = {
  username: 'ovas',
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        username: action.username
      }
    case SET_REPOSITORIES:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export function updateUsername(username) {
  return { type: UPDATE_USER_NAME, username }
}

export function setRepositories(username) {
  return function (dispatch) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((r) => r.json())
      .then((list) => {
        dispatch({ type: SET_REPOSITORIES, list })
      })
  }
}
