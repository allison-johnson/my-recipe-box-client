//Returns a function that takes in dispatch as a parameter
export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES'} )
    fetch('http://localhost:3001/recipes').then(response => {
      return response.json()
    }).then(responseJSON => {
        dispatch({ type: 'ADD_RECIPES', recipes: responseJSON })
    })
  }//return
}//fetchRecipes

export const addRecipe = (recipe) => {
  console.log("inside addRecipe")
  return (dispatch) => {
    return fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    }).then(response => {
      response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_RECIPE', recipe: responseJSON })
    })
  }
}//addRecipe