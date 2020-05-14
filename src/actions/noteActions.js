export const fetchNotes = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NOTES'})
    fetch('http://localhost:3001/notes').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_NOTES', notes: responseJSON })
    })
  }//return 
}//fetchNotes

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
      console.log("responseJSON in notes: ", responseJSON)
      if (responseJSON.errors) {
        let errorString = "";
        for (const key in responseJSON.errors) {
          errorString += `${responseJSON.errors[key]}\n`
        }
        alert(errorString)
      } else{
        dispatch({ type: 'ADD_NOTE', note: responseJSON})
      }
    })
  }//return
}//addNote 