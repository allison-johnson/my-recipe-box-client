import React, { Component } from 'react'

class RecipeNotes extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.notes.map(note => <li>{note.content}</li>)}</ul>
      </div>
    )
  }//render
}//class 

export default RecipeNotes
