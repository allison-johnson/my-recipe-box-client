import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import categoriesReducer from './categoriesReducer'
import notesReducer from './notesReducer'
import currentUserReducer from './currentUserReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  recipesReducer,
  categoriesReducer,
  notesReducer,
  currentUserReducer,
  usersReducer
})