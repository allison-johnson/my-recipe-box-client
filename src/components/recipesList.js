import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/recipeActions'
import { deleteNote } from '../actions/noteActions'
import RecipeControls from './recipeControls'
import NotesList from './notesList'

class RecipesList extends Component {

  handleNotesClick = (e) => {
    console.log("inside handleNotesClick");
    return <NotesList notes={this.props.notes.filter(note => note.recipe_id === e.target.id)} />
  }

  render() {
    return (
      <div className="recipes-list" style={{margin: '10px'}}>
        <ul>{this.props.recipes.map(recipe => <RecipeControls recipe={recipe} showNotes={false} deleteRecipe={this.props.deleteRecipe} deleteNote={this.props.deleteNote} />)}</ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      deleteRecipe: (id) => dispatch(deleteRecipe(id)),
      deleteNote: (id) => dispatch(deleteNote(id))
    }
}

export default connect(null, mapDispatchToProps)(RecipesList);

