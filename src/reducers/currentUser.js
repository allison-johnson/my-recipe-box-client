const currentUser = (state = {current_user: {}, logged_in: false}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      console.log("action inside SET_CURRENT_USER: ", action)
      return action.user 
      //return action.user 
    
    case 'CLEAR_CURRENT_USER':
      return {current_user: {}, logged_in: false}
    
    default:
      return state
  }
}

export default currentUser 