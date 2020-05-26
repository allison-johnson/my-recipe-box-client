import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/RecipeActions'
import { deleteNote } from '../actions/NoteActions'
import RecipeControls from './RecipeControls'
import NotesList from './NotesList'

class RecipesList extends Component {
  handleNotesClick = (e) => {
    console.log("inside handleNotesClick");
    return <NotesList notes={this.props.notes.filter(note => note.recipe_id === e.target.id)} />
  }

  render() {
    return (
      <div className="recipes-list" style={{margin: '10px'}}>
        <ul>{this.props.recipes.filter(r => r.user_id === parseInt(this.props.userId)).map(recipe => <RecipeControls key={recipe.id} recipe={recipe} showNotes={false} deleteRecipe={this.props.deleteRecipe} deleteNote={this.props.deleteNote} />)}</ul>
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

