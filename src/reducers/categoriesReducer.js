//Include switches for all action types
const categoriesReducer = (state = {categories: [], loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_CATEGORIES':
        return {
          ...state,
          recipes: [...state.recipes],
          loading: true 
        }
      
      case 'ADD_CATEGORIES':
        return {
          ...state,
          recipes: action.recipes,
          loading: false
        }
      
      default:
        return state
    }//switch
  }
  
  export default categoriesReducer 