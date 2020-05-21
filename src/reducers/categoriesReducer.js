const categoriesReducer = (state = {categories: [], loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_CATEGORIES':
        return {
          ...state,
          categories: [...state.categories],
          loading: true,
          selectedCategory: state.selectedCategory 
        }
      
      case 'ADD_CATEGORIES':
        return {
          ...state,
          categories: action.categories,
          loading: false,
          selectedCategory: state.selectedCategory
        }
      
      default:
        return state
    }//switch
  }
  
  export default categoriesReducer 