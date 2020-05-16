import React, { Component} from 'react'
// import RecipeCard from '../components/recipeCard'
import RecipeCards from '../components/recipeCards'
//import RecipeCardBack from '../components/recipeCardBack'
// import CardDeck from 'react-bootstrap/CardDeck'

class RecipesContainer extends Component {
  
  render() {
    // console.log("In recipesContainer, viewingRecipes of: ", this.props.viewingRecipesOf)
    // console.log("In recipesContainer, userId: ", this.props.userId)

    return (
      <div className="recipe-box-container">
      { this.props.loggedIn ?
          <div className="recipe-box">  
            {/* <h1>My Recipe Box</h1>
            <CardDeck>{this.renderAllCards()}</CardDeck> */}
            <RecipeCards userId={this.props.userId} viewingRecipesOf={this.props.viewingRecipesOf} recipes={this.props.recipes} />
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