import React, { Component } from 'react'

class NotesList extends Component {
  render() {
    console.log("this.props.notes inside of NotesList: ", this.props.notes)
    return (
      <div>
        {this.props.notes.map(note => <li>{note.content}</li>)}
      </div>
    )
  }
}

export default NotesList
