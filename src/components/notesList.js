import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class NotesList extends Component {
  handleClick = (e) => {
    this.props.deleteNote(parseInt(e.target.id))
  }

  render() {
    return (
      <div>
        {this.props.notes.map(note => <li>{note.content}<button id={note.id} className="delete-note-button" onClick={e => this.handleClick(e)}>DELETE</button></li>)}
      </div>
    )
  }
}

export default NotesList
