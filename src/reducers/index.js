import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import categoriesReducer from './categoriesReducer'
import notesReducer from './notesReducer'
import currentUser from './currentUser'

export default combineReducers({
  recipesReducer,
  categoriesReducer,
  notesReducer,
  currentUser
})