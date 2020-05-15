import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class NotesList extends Component {
  render() {
    console.log("this.props.notes inside of NotesList: ", this.props.notes)
    return (
      <div>
        {this.props.notes.map(note => <li>{note.content}<button className="delete-note-button">DELETE</button></li>)}
      </div>
    )
  }
}

export default NotesList
