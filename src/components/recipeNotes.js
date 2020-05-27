import React from 'react'

/*
  A stateless, presentational component responsible
  for displaying notes on a RecipeCard
*/
const RecipeNotes = ({notes}) => {
  return (
    <React.Fragment>
      <ul>{notes.map(note => <li key={note.id}>{note.content}</li>)}</ul>
    </React.Fragment>
  )
}//RecipeNotes

export default RecipeNotes
