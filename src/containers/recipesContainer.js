import React, { Component} from 'react'
import RecipeCard from '../components/recipeCard'
import RecipeCardBack from '../components/recipeCardBack'
import CardDeck from 'react-bootstrap/CardDeck'

class RecipesContainer extends Component {
  renderAllCards() {
    return this.props.recipes.map((recipe, idx) => { return(
      <div className="recipe-card">
        <RecipeCard key={idx} recipe={recipe} />
        {/* <RecipeCardBack key={idx} recipe={recipe} /> */}
      </div> )
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>My Recipe Box</h1>
        <CardDeck>{this.renderAllCards()}</CardDeck>
      </React.Fragment>
    )
  }
}//class 

export default RecipesContainer