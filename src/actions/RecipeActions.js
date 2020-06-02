const baseURL = "https://rails-recipe-box-backend.herokuapp.com/"

//Returns a function that takes in dispatch as a parameter
export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES'})
    fetch(baseURL + 'recipes').then(response => {
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
    return fetch(baseURL + 'recipes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log('d')
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
    fetch(baseURL + `recipes/${id}`, {
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
