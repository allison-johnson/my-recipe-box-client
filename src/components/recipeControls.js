import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import NotesList from './notesList'
import { connect } from 'react-redux'

class RecipeControls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNotes: this.props.showNotes
    }
  }

  handleDeleteClick = (e) => {
    this.props.deleteRecipe(parseInt(e.target.id))
  }

  handleNotesClick = (e) => {
    this.setState({
      showNotes: !(this.state.showNotes)
    })
  }

  render() {
    console.log("this.props.notes inside recipeControls render: ", this.props.notes)
    return (
      <div className="recipe">
        <li style={{padding: '5px'}}>{this.props.recipe.name}
        <Button style={{margin: '5px'}} id={this.props.recipe.id} variant="danger" size="sm" onClick={e => this.handleDeleteClick(e)}>Delete Recipe</Button>{' '}
        <Button id={this.props.recipe.id} variant="warning" size="sm" onClick={e => this.handleNotesClick(e)}>Manage Recipe Notes</Button>
        {this.state.showNotes ? 
          <div className="notes-list"><NotesList notes={this.props.notes.filter(note => note.recipe_id === this.props.recipe.id)} deleteNote={this.props.deleteNote} /></div>
          : null 
        }
        </li>
      </div>
    )
  }//return
}//class

//This should be the class that grabs the list of notes from the store to pass down to NotesList
const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes 
  }
}

export default connect(mapStateToProps)(RecipeControls)
