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
  }//fetchRecipes