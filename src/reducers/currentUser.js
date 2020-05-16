const currentUser = (state = {current_user: {}, logged_in: false}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user 
    
    case 'CLEAR_CURRENT_USER':
      return {current_user: {}, logged_in: false}
    
    default:
      return state
  }
}

export default currentUser 