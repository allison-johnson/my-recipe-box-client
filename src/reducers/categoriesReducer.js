//Include switches for all action types
const categoriesReducer = (state = {categories: [], loading: false, selectedCategory: 0}, action) => {
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
      
      case 'CHANGE_SELECTED_CATEGORY':
        return {
          ...state,
          categories: [...state.categories],
          loading: false,
          selectedCategory: action.category_id
        }
      
      default:
        return state
    }//switch
  }
  
  export default categoriesReducer 