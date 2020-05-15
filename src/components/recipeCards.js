import React, { Component } from 'react'
import RecipeCard from '../components/recipeCard'
import CardDeck from 'react-bootstrap/CardDeck'

class RecipeCards extends Component {
  renderAllCards() {
    return this.props.recipes.filter(recipe => recipe.user_id === parseInt(this.props.viewingRecipesOf)).map((recipe, idx) => { return(
      <div className="recipe-card">
        <RecipeCard key={idx} recipe={recipe} viewingOwnRecipes={parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf)} />
      </div> )
    })
  }

  render() {
    console.log("this.props.userId in recipeCards: ", this.props.userId)
    return (
      <div className="recipe-cards">
      { parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf) ?
        <div className="my-recipes">
          <h1>My Recipe Box</h1>
          <CardDeck>{this.renderAllCards()}</CardDeck>  
        </div>    
        :
        <div className="other-recipes">
          <h1>{this.props.viewingRecipesOf}'s Recipe Box</h1>
          <CardDeck>{this.renderAllCards()}</CardDeck> 
        </div>
      }

      </div>
    )
  }
}

export default RecipeCards
