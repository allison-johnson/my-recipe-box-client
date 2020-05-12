//need to load notes
export const addNote = (noteData) => {
  return (dispatch) => {
    const body = {
      note: noteData
    }
    return fetch('http://localhost:3001/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_NOTE', note: responseJSON})
    })
  }
}//addNote 