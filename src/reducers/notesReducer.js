const notesReducer = (state = {notes: [], loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_NOTES':
      return {
        ...state,
        notes: [...state.notes],
        loading: true
      }

    case 'ADD_NOTES':
      return {
        ...state,
        notes: action.notes,
        loading: false
      }

    case 'ADD_NOTE':
      console.log("action in ADD_NOTE: ", action)
      console.log([...state.notes, action.note])
      return {
        ...state,
        notes: [...state.notes, action.note],
        loading: false
      }

    case 'DELETE_NOTE':
      return {
          ...state,
          notes: state.notes.filter(note => note.id !== action.id),
          loading: false 
      }

    default:
      return state
  }//switch
}//notesReducer

export default notesReducer 