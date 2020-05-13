//Include switches for all action types
const recipesReducer = (state = {recipes: [], loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_RECIPES':
      return {
        ...state,
        recipes: [...state.recipes],
        loading: true 
      }
    
    case 'ADD_RECIPES':
      return {
        ...state,
        recipes: action.recipes,
        loading: false
      }
    
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: [...state.recipes, action.recipe],
        loading: false
      }

    case 'DELETE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.id),
        loading: false 
      }

    default:
      return state
  }//switch
}

export default recipesReducer 