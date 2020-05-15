import React, { Component} from 'react'
import RecipeCard from '../components/recipeCard'
//import RecipeCardBack from '../components/recipeCardBack'
import CardDeck from 'react-bootstrap/CardDeck'

class RecipesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderAllCards() {
    return this.props.recipes.filter(recipe => recipe.user_id === parseInt(this.props.userId)).map((recipe, idx) => { return(
      <div className="recipe-card">
        <RecipeCard key={idx} recipe={recipe} />
      </div> )
    })
  }

  render() {
    console.log("In recipesContainer, viewingRecipes of: ", this.props.viewingRecipesOf)
    return (
      <div className="recipe-box-container">
      { this.props.loggedIn ?
          <div className="recipe-box">  
            <h1>My Recipe Box</h1>
            <CardDeck>{this.renderAllCards()}</CardDeck>
          </div>
          : 
          <div className="app-info" style={{margin: '10px'}}>
            <h1>My Recipe Box</h1>
            Please log in or sign up to begin using My Recipe Box!
          </div>
      }
      </div>
    )
  }
}//class 

export default RecipesContainer