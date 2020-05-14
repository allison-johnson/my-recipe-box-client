//Returns a function that takes in dispatch as a parameter
export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES'})
    fetch('http://localhost:3001/recipes').then(response => {
      return response.json()
    }).then(responseJSON => {
        dispatch({ type: 'ADD_RECIPES', recipes: responseJSON })
    })
  }//return
}//fetchRecipes

export const addRecipe = (recipeData) => {
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
      if (responseJSON.errors) {
        let errorString = "";
        for (const key in responseJSON.errors) {
          errorString += `${responseJSON.errors[key]}\n`
        }
        alert(errorString)
      } else {
        dispatch({ type: 'ADD_RECIPE', recipe: responseJSON })
      }
      //return responseJSON
    })
  }
}//addRecipe

export const deleteRecipe = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/recipes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).finally(responseJSON => {
      dispatch({ type: 'DELETE_RECIPE', id})
    })
  }
}