import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import NotesList from './notesList'

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
    return (
      <div className="recipe">
        <li style={{padding: '5px'}}>{this.props.recipe.name}
        <Button style={{margin: '5px'}} id={this.props.recipe.id} variant="danger" size="sm" onClick={e => this.handleDeleteClick(e)}>Delete Recipe</Button>{' '}
        <Button id={this.props.recipe.id} variant="warning" size="sm" onClick={e => this.handleNotesClick(e)}>Manage Recipe Notes</Button>
        {this.state.showNotes ? 
          <NotesList notes={this.props.recipe.notes.filter(note => note.recipe_id === this.props.recipe.id)} /> 
          : null 
        }
        </li>
      </div>
    )
  }//return
}//class

export default RecipeControls
