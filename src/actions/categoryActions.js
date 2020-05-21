export const fetchCategories = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATEGORIES'} )
      fetch('http://localhost:3001/categories').then(response => {
        return response.json()
      }).then(responseJSON => {
          dispatch({ type: 'ADD_CATEGORIES', categories: responseJSON })
      })
    }//return
}//fetchCategories

// export const changeSelectedCategory = (category_id) => {
//   return (dispatch) => {
//     dispatch({type: 'CHANGE_SELECTED_CATEGORY', category_id: category_id})
//   }//return
// }//changeSelectedCategory
  
  //export default fetchCategories