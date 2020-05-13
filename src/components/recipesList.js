import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/recipeActions'
import Button from 'react-bootstrap/Button'

class RecipesList extends Component {
  handleClick = (e) => {
    this.props.deleteRecipe(parseInt(e.target.id))
  }

  renderRecipes = () => {
    return this.props.recipes.map((recipe, idx) => {return(
        <div className="recipe">
            <li>{recipe.name}</li>
            <Button id={recipe.id} variant="danger" size="sm" onClick={e => this.handleClick(e)}>Delete Recipe</Button>
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

