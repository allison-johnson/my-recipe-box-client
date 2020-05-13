import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/recipeActions'
import NotesList from './notesList'
import Button from 'react-bootstrap/Button'

class RecipesList extends Component {
  handleDeleteClick = (e) => {
    this.props.deleteRecipe(parseInt(e.target.id))
  }

  handleNotesClick = (e) => {
    console.log("inside handleNotesClick");
    return <NotesList notes={this.props.notes.filter(note => note.recipe_id === e.target.id)} />
  }

  renderRecipes = () => {
    return this.props.recipes.map((recipe, idx) => {return(
        <div className="recipe">
            <li style={{padding: '5px'}}>{recipe.name}
            <Button style={{margin: '5px'}} id={recipe.id} variant="danger" size="sm" onClick={e => this.handleDeleteClick(e)}>Delete Recipe</Button>{' '}
            <Button id={recipe.id} variant="warning" size="sm" onClick={e => this.handleNotesClick(e)}>Manage Recipe Notes</Button></li>
            {/* <NotesList notes={this.props.notes.filter(note => note.recipe_id === e.target.id)} /> */}
        </div>
    )})
  }

  render() {
    return (
      <div className="recipes-list" style={{margin: '10px'}}>
        <ul>{this.renderRecipes()}</ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      deleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
}

export default connect(null, mapDispatchToProps)(RecipesList);

