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

export const addRecipe = (recipeData) => {
  console.log("inside addRecipe")
  return (dispatch) => {
    const body = {
      recipe: recipeData 
    }
    return fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      console.log("responseJSON: ", responseJSON)
      dispatch({ type: 'ADD_RECIPE', recipe: responseJSON })
      //return responseJSON
    })
  }
}//addRecipe