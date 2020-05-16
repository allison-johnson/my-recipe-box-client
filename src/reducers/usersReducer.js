const usersReducer = (state = {users: [], loading: false, selectedUser: 0}, action) => {
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

      case 'CHANGE_SELECTED_USER':
        return {
          ...state,
          users: [...state.users],
          loading: false,
          selectedUser: parseInt(action.user_id)
      }

      //added this in during office hours
      //changes the selected user to the logged-in user as soon as that user logs in
      case 'SET_SELECTED_USER':
        console.log("action in SET_SELECTED_USER: ", action)
        return {
          ...state,
          users: [...state.users],
          loading: false,
          selectedUser: action.user.current_user.id 
        }

      default:
        return state
    }//switch
  }
  
  export default usersReducer 