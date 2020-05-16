//Returns a function that takes in dispatch as a parameter
export const fetchUsers = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_USERS'})
      fetch('http://localhost:3001/users').then(response => {
        return response.json()
      }).then(responseJSON => {
          dispatch({ type: 'ADD_USERS', users: responseJSON })
      })
    }//return
}//fetchUsers

export const changeViewingRecipesOf = (user_id) => {
  return (dispatch) => {
    dispatch({type: 'CHANGE_SELECTED_USER', user_id: user_id})
  }//return
}//changeViewingRecipesOf 