import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class RecipeControls extends Component {
  handleDeleteClick = (e) => {
    this.props.deleteRecipe(parseInt(e.target.id))
  }

  render() {
    return (
      <div className="recipe">
        <li style={{padding: '5px'}}>{this.props.recipe.name}
        <Button style={{margin: '5px'}} id={this.props.recipe.id} variant="danger" size="sm" onClick={e => this.handleDeleteClick(e)}>Delete Recipe</Button>{' '}
        {/* <Button id={recipe.id} variant="warning" size="sm" onClick={e => this.handleNotesClick(e)}>Manage Recipe Notes</Button> */}
        </li>
      </div>
    )
  }//return
}//class

export default RecipeControls
