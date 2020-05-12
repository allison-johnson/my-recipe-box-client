const notesReducer = (state= {notes: []}, action) => {
  switch(action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.note]
      }
    
    default:
      return state
  }//switch
}//notesReducer

export default notesReducer 