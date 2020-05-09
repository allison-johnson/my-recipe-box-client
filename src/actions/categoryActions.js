const fetchCategories = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATEGORIES'} )
      fetch('http://localhost:3001/categories').then(response => {
        return response.json()
      }).then(responseJSON => {
          dispatch({ type: 'ADD_CATEGORIES', recipes: responseJSON })
      })
    }//return
  }//fetchCategories
  
  export default fetchCategories