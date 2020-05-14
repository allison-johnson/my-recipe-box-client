export const signup = (credentials) => {
  console.log("credentials in signup: ", credentials)
  return (dispatch) => {
    return fetch('http://localhost:3001/users', {
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
      console.log("responseJSON in signup: ", responseJSON)
      dispatch({ type: 'SET_CURRENT_USER', user: responseJSON})
    })
  }
}

export const login = (credentials, history) => {
  //console.log("history: ", history) //history not getting passed correctly from login's onSubmit
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
      history.push('/') //also add 'history' to parameters, should get passed by login form on submit
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

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}

export const logout = (event) => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3001/logout', {
      credentials: 'include',
      method: 'POST'
    })
  }
}