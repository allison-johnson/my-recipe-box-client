const usersReducer = (state = {users: [], loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_USERS':
        return {
          ...state,
          users: [...state.users],
          loading: true 
        }
      
      case 'ADD_USERS':
        return {
          ...state,
          users: action.users,
          loading: false
        }
      
      default:
        return state
    }//switch
  }
  
  export default usersReducer 