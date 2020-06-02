const baseURL = "https://rails-recipe-box-backend.herokuapp.com/"

export const fetchCategories = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATEGORIES'} )
      fetch(baseURL + 'categories').then(response => {
        return response.json()
      }).then(responseJSON => {
          dispatch({ type: 'ADD_CATEGORIES', categories: responseJSON })
      })
    }//return
}//fetchCategories
