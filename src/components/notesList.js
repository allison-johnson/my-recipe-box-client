import React, { Component } from 'react'

class NotesList extends Component {
  handleClick = (e) => {
    this.props.deleteNote(parseInt(e.target.id))
  }

  render() {
    return (
      <React.Fragment>
        {this.props.notes.map(note => <li key={note.id}>{note.content}<button id={note.id} className="delete-note-button" onClick={e => this.handleClick(e)}>DELETE</button></li>)}
      </React.Fragment>
    )
  }
}

export default NotesList
