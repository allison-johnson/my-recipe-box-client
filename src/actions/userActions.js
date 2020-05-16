//Actions related to user auth
//Related reducer: currentUser.js
export const signup = (credentials, history) => {
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
      //console.log("responseJSON in signup: ", responseJSON)
      dispatch({ type: 'SET_CURRENT_USER', user: responseJSON})
      dispatch({ type: 'SET_SELECTED_USER', user: responseJSON })
      history.push('/') //Add history to parameters, should get passed by signup form on submit
    })
  }
}

export const login = (credentials, history) => {
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
      //console.log("responseJSON in login: ", responseJSON)
      dispatch({ type: 'SET_CURRENT_USER', user: responseJSON })
      dispatch({ type: 'SET_SELECTED_USER', user: responseJSON })
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
      //console.log("response in getCurrentUser: ", response)
      dispatch(setCurrentUser(response))
      //This changes the selected user to match the current (logged in) user
      if (response.logged_in){
        dispatch({type: 'CHANGE_SELECTED_USER', user_id: response.current_user.id})
      }
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