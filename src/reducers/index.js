import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import categoriesReducer from './categoriesReducer'
import notesReducer from './notesReducer'

export default combineReducers({
  recipesReducer,
  categoriesReducer,
  notesReducer 
})