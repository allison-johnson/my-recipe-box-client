//Include switches for all action types
const categoriesReducer = (state = {categories: [], loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_CATEGORIES':
        return {
          ...state,
          categories: [...state.categories],
          loading: true 
        }
      
      case 'ADD_CATEGORIES':
        console.log("action inside ADD_CATEGORIES: ", action)
        return {
          ...state,
          categories: action.categories,
          loading: false
        }
      
      default:
        return state
    }//switch
  }
  
  export default categoriesReducer 