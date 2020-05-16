import React, { Component } from 'react'

class RecipeNotes extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>{this.props.notes.map(note => <li key={note.id}>{note.content}</li>)}</ul>
      </React.Fragment>
    )
  }//render
}//class 

export default RecipeNotes
