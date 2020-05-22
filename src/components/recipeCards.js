import React, { Component } from 'react'
import RecipeCard from '../components/recipeCard'
import CardDeck from 'react-bootstrap/CardDeck'

//Shouldn't need logic; give me a bunch of recipes and I'll render them
class RecipeCards extends Component {
  renderAllCards() {
    return this.props.recipes.filter(recipe => recipe.user_id === parseInt(this.props.viewingRecipesOf)).map((recipe, idx) => { return(
      <div key={idx} className="recipe-card">
        <RecipeCard key={idx} recipe={recipe} viewingOwnRecipes={parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf)} />
      </div> )
    })
  }

  getUserName() {
    console.log("viewing recipes of: ", this.props.viewingRecipesOf)
    console.log("this.props.users.length: ", this.props.users.length)
    if (this.props.users.length > 0 && this.props.viewingRecipesOf > 0) {
      return this.props.users.find(user => user.id === parseInt(this.props.viewingRecipesOf)).first_name
    } else {
      return ''
    }
  }

  render() {
    console.log("props in recipeCards: ", this.props)
    return (
      <div className="recipe-cards">
      { parseInt(this.props.userId) === parseInt(this.props.viewingRecipesOf) ?
        <div className="my-recipes">
          <h1>My Recipe Box</h1>
          <CardDeck>{this.renderAllCards()}</CardDeck> 
        </div>    
        :
        <div className="other-recipes">
          <h1>{this.getUserName()}'s Recipe Box</h1>
          <CardDeck>{this.renderAllCards()}</CardDeck> 
        </div>
      }

      </div>
    )
  }
}

export default RecipeCards
