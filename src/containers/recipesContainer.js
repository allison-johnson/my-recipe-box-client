import React, { Component} from 'react'
import RecipeCard from '../components/recipeCard'
import CardDeck from 'react-bootstrap/CardDeck'

class RecipesContainer extends Component {
  constructor(props) {
    super(props)
  }//constructor

  renderAllCards() {
    return this.props.recipes.map((recipe, idx) => <RecipeCard key={idx} recipe={recipe} />)
  }

  render() {
    console.log("props in RecipesContainer: ", this.props)
    return (
      <CardDeck>{this.renderAllCards()}</CardDeck>
    )
  }
}//class 

export default RecipesContainer