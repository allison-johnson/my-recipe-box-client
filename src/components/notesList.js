import React from 'react'

const NotesList = ({notes, deleteNote}) => {
  const handleClick = (e) => {
    deleteNote(parseInt(e.target.id))
  }

  return (
    <React.Fragment>
      {notes.map(note => 
        <li key={note.id}>
          {note.content}
          <button id={note.id} 
            className="delete-note-button" 
            onClick={e => handleClick(e)}>
              DELETE
          </button>
        </li>)
      }
    </React.Fragment>
  );
}//NotesList

export default NotesList
