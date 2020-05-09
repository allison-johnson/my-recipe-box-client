//Returns a function that takes in dispatch as a parameter
const fetchRecipes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RECIPES'} )
    fetch('http://localhost:3001/recipes').then(response => {
      return response.json()
    }).then(responseJSON => {
        dispatch({ type: 'ADD_RECIPES', recipes: responseJSON })
    })
  }//return
}//fetchRecipes

export default fetchRecipes