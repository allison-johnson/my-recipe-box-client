export const login = (credentials) => {
  return (dispatch) => {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      console.log("responseJSON in login: ", responseJSON)
      dispatch({ type: 'SET_CURRENT_USER', user: responseJSON})
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3001/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(response => {
      dispatch(setCurrentUser(response))
    })
  }
}

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user 
  }
}