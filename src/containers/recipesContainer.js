import React, { Component} from 'react'
import RecipeCard from '../components/recipeCard'
//import RecipeCardBack from '../components/recipeCardBack'
import CardDeck from 'react-bootstrap/CardDeck'

class RecipesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderAllCards() {
    return this.props.recipes.map((recipe, idx) => { return(
      <div className="recipe-card">
        <RecipeCard key={idx} recipe={recipe} />
        {/* <RecipeCardBack key={idx} recipe={recipe} /> */}
      </div> )
    })
  }

  render() {
    console.log("this.props.loggedIn: ", this.props.loggedIn)
    return (
      <div className="recipe-box-container">
      { this.props.loggedIn ?
          <div className="recipe-box">  
            <h1>My Recipe Box</h1>
            <CardDeck>{this.renderAllCards()}</CardDeck>
          </div>
          : 
          <div className="app-info">
            Please log in or sign up to begin using My Recipe Box!
          </div>
      }
      </div>
    )
  }
}//class 

export default RecipesContainer